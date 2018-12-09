import moment from 'moment';

class ValidationResult {
    errors = {}
    valids = {}
    isValid = () => this.errors.length === 0;
}


const Validation_Types = {
    NotNull : (i) => i != null,
    Date : {
        IsDate : i => !Date.parse(i),
        Future : i => {
            return moment(i).isAfter();
        }
    },
    Number : {
        Positive : function isNormalInteger(str) {
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        }
    }
}

class Validator {

    isObject(value) {
        return value && typeof value === 'object' && value.constructor === Object;
    }

    isValidationRule = (rule) => {
        if (Array.isArray(rule)) {
            if (typeof rule[0] === 'function' || typeof Validation_Types[rule] === 'function' ) {
                return true;
            }
        }
        return false;
    }

    evaluateRule = (value, rule) => {
        var result = new ValidationResult();
        var validation_function = rule[0];
        var validation_message = rule[1];
        var valuation_result = validation_function(value);
        if (!valuation_result) {
            result.errors["this"] =validation_message;
            return Promise.reject(validation_message);
        }
        else {
            result.valids["this"] =validation_message;
            return Promise.resolve(validation_message);
        }
    }


    validate = (data, validation_rules) => {
        var result = new ValidationResult();
        if (!this.isObject(validation_rules)) {
            if (this.isValidationRule(validation_rules)) {
                return this.evaluateRule(data, validation_rules);
            }
        }
        else {
            var promises = []
            for (let key in validation_rules) {
                
                let value_to_validate = (data == null)  ? null : data[key];
                let rule = validation_rules[key];
                promises.push(this.validate(value_to_validate, rule)
                .then(r => {
                    result.valids[key] = key + " is valid.";
                })
                .catch(r => {
                    result.errors[key] = r;
                    return r;
                }).then(r => {
                    if(!r.isValid()) {
                        throw r;
                    }
                }));
            }

            return Promise.all(promises).then(r => {
               return Promise.resolve(result);
            }).catch(r => {
                return Promise.reject(result);
            })
        }

    }

}
var validator = new Validator();
const VT = Validation_Types;
export  { validator , VT };
