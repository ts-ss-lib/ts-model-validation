import { StringValidatorOptions } from "./data-types/string/options/string-validator-options.interface";
import { StringFunctions } from "./types/validation-functions.types";

export interface IModelValidation<T> {

    /**
     * asfasfasf
     * @param key 
     */
    stringValidator<K extends keyof T>(key: K): StringFunctions;
    /**
     * ajkshdasfh
     * @param key 
     * @param options 
     */
    stringValidator<K extends keyof T>(key: K, options: StringValidatorOptions): StringFunctions;

}