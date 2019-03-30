import moment from 'moment';

class ValidationResult {

    
}


const Validation_Types = {
    NotNull: (i) => i != null,
    Date: {
        IsDate: i => !Date.parse(i),
        Future: i => {
            return moment(i).isAfter();
        }
    },
    Number: {
        Positive: function isNormalInteger(str) {
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        }
    }
}

class Validator {

    hasChildValidations(value) {
        return value && typeof value === 'object' && value.constructor === Object;
    }

    isValidationRule = (rule) => {
        if (Array.isArray(rule)) {
            if (typeof rule[0] === 'function' || typeof Validation_Types[rule] === 'function') {
                return true;
            }
        }
        return false;
    }

    evaluateRule = (value, rule) => {

        var validation_function = rule[0];
        var validation_message = rule[1];
        var valuation_result = validation_function(value);
        if (!valuation_result) {
            return Promise.reject({ valid: false, message: validation_message });
        }
        else {
            return Promise.resolve({ valid: true, message: validation_message });
        }
    }


    validate = (data, rules) => {

        var result = new ValidationResult();

        if (this.isValidationRule(rules)) {
            return this.evaluateRule(data, rules);
        }

        if ( this.hasChildValidations(rules)) {

            var promises = [];

            for (let key in rules) {

                let value_to_validate = (data == null) ? null : data[key];
               
                let rule = rules[key];
               
                promises.push(this.validate(value_to_validate, rule)
                    .then(r => {
                        result[key] = r;
                        return r;
                    })
                    .catch(r => {
                        console.debug(`validation ${key} failed.`);
                        result[key] = r;
                        throw r;
                    }));
            }

            var reflect = Promise.all(promises).then(r => {
                console.debug(`all promises succeeded.`);
                      
                return result;
            }).catch(r => {
                console.debug(`all promises failed.`);
                
                throw result;
            })
            return reflect;
        }
    }
}
var validator = new Validator();
const VT = Validation_Types;
export { validator, VT };
