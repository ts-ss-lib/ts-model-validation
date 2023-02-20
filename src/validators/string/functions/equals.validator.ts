/**
 * ### String Equals Validator Options
 * Options to the `string.equals` validator function
 * 
 * @type StringEqualsValidatorOptions
 */
type StringEqualsValidatorOptions = {

    /**
     * The case must be ignored. Default is `false`
     */
    ignoreCase?: boolean;
    /**
     * The whitespaces in the start and/or end of the values must be considered. Default is `false`
     */
    applyTrim?: boolean;

};

const defaultOptions: StringEqualsValidatorOptions = {

    ignoreCase: false,
    applyTrim: false

};

/**
 * Compare two strings and returns a boolean that indicate if the string are equals
 * @param value The first value used in the comparison
 * @param compareValue The seconds value used in the comparison
 * @param options (`Optional`) Options of the comparison method
 * @returns {boolean} The result of the comparison
 * 
 * @function stringEqualsValidator
 */
function stringEqualsValidator(value: string, compareValue: string, options: StringEqualsValidatorOptions = defaultOptions): boolean {

    if (options) {

        if (options.ignoreCase === true) {
            value = value.toLocaleLowerCase();
            compareValue = compareValue.toLocaleLowerCase();
        }

        if (options.applyTrim === true) {
            value = value.trim();
            compareValue = compareValue.trim();
        }
    }

    const result = value == compareValue;

    return result;

};

export { stringEqualsValidator, StringEqualsValidatorOptions };