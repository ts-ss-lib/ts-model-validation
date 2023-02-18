import { ConditionalValidationFunctions } from "../types/conditional-validation.types";
import { SimpleValidationFunctions } from "../types/validation-functions.type";

export abstract class ModelValidation<T> {

    constructor() { }

    public setSimpleValidator<K extends keyof T, V = T[K]>(field: K): SimpleValidationFunctions<V>;
    public setSimpleValidator<K extends keyof T, V = T[K]>(field: K): SimpleValidationFunctions<V> {

        return;
    }

    public setConditionalValidator<K extends keyof T, V = T[K]>(field: K, condition: (value: V) => boolean): ConditionalValidationFunctions;
    public setConditionalValidator<K extends keyof T, V = T[K]>(field: K, condition: (value: V) => boolean): ConditionalValidationFunctions {

        return;
    }
}
