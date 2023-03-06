import { StringEqualsValidatorOptions } from "../data-types/string/functions/equals.validator";
import { StringMinLengthValidatorOptions } from "../data-types/string/functions/min-length.validator";
import { FunctionInvoked } from "./result-validation-functions.types";
import { ArrayElementType } from "./type-check.type";

// ----------------------------------------------------------------------------------------------------
// @ Typed validation functions
// ----------------------------------------------------------------------------------------------------

export type GenericFunctions<T> = {

    must: (compareFn: (value: T) => boolean, result: boolean) => FunctionInvoked<GenericFunctions<T>>;
    equals: (value: T) => FunctionInvoked<GenericFunctions<T>>;
    notEquals: (value: T) => FunctionInvoked<GenericFunctions<T>>;

};

export type StringFunctions = {

    equals(value: string): FunctionInvoked<StringFunctions>;
    equals(value: string, options: StringEqualsValidatorOptions): FunctionInvoked<StringFunctions>;
    minLength(min: number): FunctionInvoked<StringFunctions>;
    minLength(min: number, options: StringMinLengthValidatorOptions): FunctionInvoked<StringFunctions>;
    // maxLength(max: number): AfterFunctionInvokedType<StringFunctions>;
    // must(compareFn: (value: string) => boolean): AfterFunctionInvokedType<StringFunctions>;
    // must(compareFn: (value: string) => boolean, result: boolean): AfterFunctionInvokedType<StringFunctions>;
    // notEquals(value: string): AfterFunctionInvokedType<StringFunctions>;

};

export type NumberFunctions = {

    min: (min: number) => FunctionInvoked<NumberFunctions>;
    max: (max: number) => FunctionInvoked<NumberFunctions>;
    between: (min: number, max: number) => FunctionInvoked<NumberFunctions>;
    must: (compareFn: (value: number) => boolean, result: boolean) => FunctionInvoked<NumberFunctions>;
    equals: (value: number) => FunctionInvoked<NumberFunctions>;
    notEquals: (value: number) => FunctionInvoked<NumberFunctions>;

};

export type ArrayFunctions<T> = {

    minCount: (min: number) => FunctionInvoked<ArrayFunctions<T>>;
    maxCount: (max: number) => FunctionInvoked<ArrayFunctions<T>>;
    contains: (value: ArrayElementType<T>) => FunctionInvoked<ArrayFunctions<T>>;
    must: (compareFn: (value: Array<T>) => boolean, result: boolean) => FunctionInvoked<ArrayFunctions<T>>;

};

export type BooleanFunctions = {
    
    must: (compareFn: (value: boolean) => boolean, result: boolean) => FunctionInvoked<BooleanFunctions>;
    equals: (value: boolean) => FunctionInvoked<BooleanFunctions>;
    notEquals: (value: boolean) => FunctionInvoked<BooleanFunctions>;

};

export type FunctionFunctions<T extends () => unknown> = {

    // mustReturnType: (t: 'string' | 'number' | 'boolean' | 'function' | 'object') => AfterFunctionInvokedType<FunctionFunctions<T>>;
    mustReturnValue: (value: ReturnType<T>) => FunctionInvoked<FunctionFunctions<T>>;
    must: (compareFn: (value: T) => boolean, result: boolean) => FunctionInvoked<FunctionFunctions<T>>;

};
