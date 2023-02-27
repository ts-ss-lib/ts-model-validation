import { StringValidatorOptions } from "../options/string-validator-options.interface";
import { IModelValidation } from "../types/model-validation.inteface";
import { StringFunctions } from "../types/validation-functions.types";
import { ValidationStepNavigationType } from "../types/validation-step.types";
import {
    StringEqualsValidatorOptions,
    StringMinLengthValidatorOptions,
    stringValidationFunctions
} from "../validators/string/string.validators";


export abstract class ModelValidation<T> implements IModelValidation<T> {

    private _typeValidations: { key: keyof T; typeIsValid: (value: T[keyof T]) => boolean; errorMessage: string; }[] = [];
    private _modelValidations: { key: keyof T; isValid: (value: T[keyof T]) => boolean; errorMessage: string; }[] = [];

    constructor() { }

    public stringValidator<K extends keyof T>(key: K): StringFunctions;
    public stringValidator<K extends keyof T>(key: K, options: StringValidatorOptions): StringFunctions;
    public stringValidator<K extends keyof T>(key: K, options?: StringValidatorOptions): StringFunctions {
        
        const defaultTypeErrorMessage = `Invalid type in "${key.toString()}" key`;

        options = options ?? {};
        options.ignoreTypeCheck = options?.ignoreTypeCheck ?? false;
        options.errorMessage = options?.errorMessage ?? defaultTypeErrorMessage;

        if (options)
        {
            if (!options.ignoreTypeCheck)
            {
                this._typeValidations.push({
                    key: key,
                    typeIsValid: (value: T[K]) => {
                        
                        if (typeof value == 'string')
                            return true;
        
                        return false;
                    },
                    errorMessage: options.errorMessage
                });
            }
        }

        const getNavigationValidationFunction = (functionsMapping: StringFunctions): ValidationStepNavigationType<StringFunctions> => {

            return {

                completeValidation: () => {

                },

                nextValidation: () => {
                    return functionsMapping;
                }

            };
        };

        const validationFunctions: StringFunctions = {

            equals: (value: string, options?: StringEqualsValidatorOptions) => {

                return {

                    setMessage: (message: string) => {

                        this._modelValidations.push({
                            key: key,
                            errorMessage: message,
                            isValid: (v: T[keyof T]) => {

                                return stringValidationFunctions.equals(<string>v, value, options ?? {});
                            }
                        });

                        return getNavigationValidationFunction(validationFunctions);
                    }
                };
            },

            minLength: (minLength: number, options?: StringMinLengthValidatorOptions) => {

                return {

                    setMessage: (message: string) => {

                        this._modelValidations.push({
                            key: key,
                            errorMessage: message,
                            isValid: (v: T[keyof T]) => {

                                return stringValidationFunctions.minLength(<string>v, minLength, options ?? {});
                            }
                        });

                        return getNavigationValidationFunction(validationFunctions);
                    }
                }
            }

        };

        return validationFunctions;
    }

    

    public run(model: T): void {

        for (const validation of this._typeValidations)
        {
            const value = model[validation.key];

            if (!validation.typeIsValid(value))
                console.error('[TYPE ERROR]: ', validation.errorMessage);
        }

        for (const validation of this._modelValidations)
        {
            const value = model[validation.key];

            if (!validation.isValid(value))
                console.error('[VALIDATION ERROR]: ', validation.errorMessage);
        }
    }
}
