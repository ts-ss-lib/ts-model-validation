/**
 * ### String Minimum Length Validator Options
 * Options to the `string.minLength` validator function
 * 
 * @type StringMinLengthValidatorOptions
 */
type StringMinLengthValidatorOptions = {

    /**
     * The whitespaces in the start and/or end of the values must be considered. Default is `false`
     */
    applyTrim?: boolean;

};

const defaultOptions: StringMinLengthValidatorOptions = {

    applyTrim: false

};

/**
 * Returns a boolean indicating whether the length of the string is greater than or equal to the specified length
 * @param value The value to check
 * @param minLength The minimum length
 * @param options (`Optional`) Options of the minimum length check method
 * @returns {boolean}
 * 
 * @function stringMinLengthValidator
 */
function stringMinLengthValidator(value: string, minLength: number, options: StringMinLengthValidatorOptions = defaultOptions): boolean {

    if (options) {

        if (options.applyTrim === true) {
            value = value.trim();
        }
    }

    const result = value.length >= minLength;

    return result;

};

export {  stringMinLengthValidator, StringMinLengthValidatorOptions };