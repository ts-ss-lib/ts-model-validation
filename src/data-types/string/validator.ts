import { stringEqualsValidator, StringEqualsValidatorOptions } from "./functions/equals.validator";
import { stringMinLengthValidator, StringMinLengthValidatorOptions } from "./functions/min-length.validator";

/**
 * ### String validations functions
 * Map of string validation functions
 */
const stringValidationFunctions = {

    equals: stringEqualsValidator,
    minLength: stringMinLengthValidator

};

export { stringValidationFunctions };

export {
    StringEqualsValidatorOptions,
    StringMinLengthValidatorOptions
};