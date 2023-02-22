import { StringValidatorOptions } from "../options/string-validator-options.interface";
import { StringFunctions } from "./validation-functions.types";

export interface IModelValidation<T> {

    stringValidator<K extends keyof T>(key: K): StringFunctions;
    stringValidator<K extends keyof T>(key: K, options: StringValidatorOptions): StringFunctions;

}