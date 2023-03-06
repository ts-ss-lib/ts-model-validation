/**
 * ### Number Equals Validator Options
 * Options to the `number.equals` validator function
 * 
 * @type NumberEqualsValidatorOptions
 */
type NumberEqualsValidatorOptions = {

};

const defaultOptions: NumberEqualsValidatorOptions = {

};

/**
 * Compare two numbers and returns a boolean that indicate if the numbers are equals
 * @param value The first value used in the comparison
 * @param compareValue The second value used in the comparison
 * @param options (`Optional`) Options of the comparison method
 * @returns {boolean} The result of the comparison
 * 
 * @function numberEqualsValidator
 */
function numberEqualsValidator(value: number, compareValue: number, options: NumberEqualsValidatorOptions = defaultOptions): boolean {

    if (options) {

        
    }

    const result = value == compareValue;

    return result;

};

export { numberEqualsValidator, NumberEqualsValidatorOptions };