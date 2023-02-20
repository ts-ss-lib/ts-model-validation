import { StringValidatorOptions } from "../options/string-validator-options.interface";
import { ConditionalValidationFunctions } from "./conditional-validation.types";
import {
    ArrayFunctions,
    BooleanFunctions,
    NumberFunctions,
    StringFunctions
} from "./validation-functions.types";

export interface IModelValidation<T> {

    addStringValidator<K extends keyof T>(key: K): StringFunctions;
    addStringValidator<K extends keyof T>(key: K, options: StringValidatorOptions): StringFunctions;

    // addNumberValidator<K extends keyof T>(key: K): NumberFunctions;

    // addBooleanValidator<K extends keyof T>(key: K): BooleanFunctions;

    // addArrayValidator<K extends keyof T>(key: K): ArrayFunctions<T>;

    // addValidatorWhen<K extends keyof T, V = T[K]>(field: K, condition: (value: V) => boolean): ConditionalValidationFunctions;

}