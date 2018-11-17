import { promises } from "fs";

class ValidationResult {
    errors = []
    isValid = () => this.errors.length === 0;
}


class Validator {

    isObject(value) {
        return value && typeof value === 'object' && value.constructor === Object;
    }

    isValidationRule = (rule) => {
        if (Array.isArray(rule)) {
            if (typeof rule[0] === 'function') {
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
            result.errors.push(validation_message);
            return Promise.reject(result);
        }
        else {
            return Promise.resolve(result);
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
            for (var key in validation_rules) {
                
                var value_to_validate = (data == null)  ? null : data[key];
                var rule = validation_rules[key];
                promises.push(this.validate(value_to_validate, rule).catch(r => {
                    result.errors.push(r.errors);
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
export default validator;