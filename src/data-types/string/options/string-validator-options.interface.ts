export type StringValidatorOptions = {

    /**
     * @property 
     * The `string` type check must be ignored.
     * - Default is `false`, so, by default, the check is enabled
     */
    ignoreTypeCheck?: boolean;
    /**
     * @property
     * Error message if the type check is enabled and fails.
     * - Default message: `Invalid type. "string" was expected`
     */
    errorMessage?: string;

};