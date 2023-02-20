import { StringValidatorOptions } from "../options/string-validator-options.interface";
import { ConditionalValidationFunctions } from "../types/conditional-validation.types";
import { IModelValidation } from "../types/model-validation.inteface";
import { ArrayFunctions, BooleanFunctions, NumberFunctions, StringFunctions } from "../types/validation-functions.types";
import { ValidationStepNavigationType } from "../types/validation-step.types";

export abstract class ModelValidation<T> implements IModelValidation<T> {

    private _typeValidations: { key: keyof T; typeIsValid: (value: T[keyof T]) => boolean; errorMessage: string; }[] = [];

    private _modelValidations: { key: keyof T; isValid: (value: T[keyof T]) => boolean; errorMessage: string; }[] = [];

    private messages: string[] = [];

    constructor() { }

    public addStringValidator<K extends keyof T>(key: K): StringFunctions;
    public addStringValidator<K extends keyof T>(key: K, options: StringValidatorOptions): StringFunctions;
    public addStringValidator<K extends keyof T>(key: K, options?: StringValidatorOptions): StringFunctions {
        
        const defaultTypeErrorMessage = `Invalid type in "${key.toString()}" key`;

        options = options ?? {};
        options.ignoreTypeValidation = options?.ignoreTypeValidation ?? false;
        options.typeErrorMessage = options?.typeErrorMessage ?? defaultTypeErrorMessage;

        if (options)
        {
            if (!options.ignoreTypeValidation)
            {
                this._typeValidations.push({
                    key: key,
                    typeIsValid: (value: T[K]) => {
                        
                        if (typeof value == 'string')
                            return true;
        
                        return false;
                    },
                    errorMessage: options.typeErrorMessage
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

            equals: (value: string) => {

                return {

                    setMessage: (message: string) => {

                        this._modelValidations.push({
                            key: key,
                            isValid: (v: T[keyof T]) => {

                                if (v == value)
                                    return true;

                                return false;
                            },
                            errorMessage: message
                        });

                        this.messages.push(message);

                        return getNavigationValidationFunction(validationFunctions);

                    }
                };
            },

            notEquals: (value: string) => {

                return {

                    setMessage: (message: string) => {

                        this.messages.push(message);
                        
                        return getNavigationValidationFunction(validationFunctions);

                    }
                };
            },

            must: (compareFn: (value: string) => boolean, result?: boolean) => {

                return {

                    setMessage: (message: string) => {

                        this.messages.push(message);

                        return getNavigationValidationFunction(validationFunctions);

                    }
                };
            },

        };

        return validationFunctions;
    }
    public addNumberValidator<K extends keyof T>(key: K): NumberFunctions {
        throw new Error("Method not implemented.");
    }
    public addBooleanValidator<K extends keyof T>(key: K): BooleanFunctions {
        throw new Error("Method not implemented.");
    }
    public addArrayValidator<K extends keyof T>(key: K): ArrayFunctions<T> {
        throw new Error("Method not implemented.");
    }
    public addValidatorWhen<K extends keyof T, V = T[K]>(field: K, condition: (value: V) => boolean): ConditionalValidationFunctions {
        throw new Error("Method not implemented.");
    }

    public run(model: T): void {

        console.log('Model =>', model);

        console.log("==============================================");

        // console.log('messages =>', this.messages);

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

    // private _getSimpleValidatorFunctionByValueType<K extends keyof T, V = T[K]>(key: K): SimpleValidationFunctions<V> {

    //     type ResultType = SimpleValidationFunctions<V>;

    //     const getCompletationStepFunction = <F>(functionsMap: F): ValidationStepNavigationType<F> => {

    //         return {
    //             nextValidation: () => functionsMap,
    //             completeValidation: () => null
    //         };
    //     };

    //     const validationFunctionsMapping: SimpleValidationIntersectionFunctions<V> = {

    //         // ----------------------------------------------------------------------------------------------------
    //         // @ Basic validations
    //         // ----------------------------------------------------------------------------------------------------

    //         equals: (value: V) => {

    //             return {
    //                 setMessage: (message: string) => {
                        
    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<BasicFunctions<V, ResultType>>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         notEquals: (value: V) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<BasicFunctions<V, ResultType>>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         must: (compareFn: (value: V) => boolean, result: boolean) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<BasicFunctions<V, ResultType>>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         // ----------------------------------------------------------------------------------------------------
    //         // @ String validations
    //         // ----------------------------------------------------------------------------------------------------

    //         maxLength: (max: number) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<StringFunctions>(validationFunctionsMapping);
    //                 }
    //             };

    //         },

    //         minLength: (min: number) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<StringFunctions>(validationFunctionsMapping);
    //                 }
    //             };

    //         },

    //         // ----------------------------------------------------------------------------------------------------
    //         // @ Number validations
    //         // ----------------------------------------------------------------------------------------------------

    //         min: (min: number) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<NumberFunctions>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         max: (max: number) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<NumberFunctions>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         between: (min: number, max: number) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<NumberFunctions>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         // ----------------------------------------------------------------------------------------------------
    //         // @ Array validations
    //         // ----------------------------------------------------------------------------------------------------

    //         minCount: (min: number) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);
                        
    //                     return getCompletationStepFunction<ArrayFunctions<V>>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         maxCount: (max: number) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);
                        
    //                     return getCompletationStepFunction<ArrayFunctions<V>>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         contains: (element: ArrayElementType<V>) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);
                        
    //                     return getCompletationStepFunction<ArrayFunctions<V>>(validationFunctionsMapping);
    //                 }
    //             };
    //         },

    //         // ----------------------------------------------------------------------------------------------------
    //         // @ Functions validations
    //         // ----------------------------------------------------------------------------------------------------

    //         mustReturnValue: (value: ReturnType<() => any>) => {

    //             return {
    //                 setMessage: (message: string) => {

    //                     this.messages.push(message);

    //                     return getCompletationStepFunction<FunctionFunctions<any>>(validationFunctionsMapping);
    //                 }
    //             };
    //         }

    //     };

    //     return <SimpleValidationFunctions<V>>validationFunctionsMapping;
    // }
}
