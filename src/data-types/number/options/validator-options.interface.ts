export type NumberValidatorOptions = {

    /**
     * @property 
     * The `number` type check must be ignored.
     * - Default is `false`, so, by default, the type check is enabled
     */
    ignoreTypeCheck?: boolean;
    /**
     * @property
     * Error message if the type check is enabled and fails.
     * - Default message: `Invalid type. "number" was expected`
     */
    errorMessage?: string;

};