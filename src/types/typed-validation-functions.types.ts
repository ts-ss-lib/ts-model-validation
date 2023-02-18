import { AfterFunctionInvokedType } from "./result-validation-functions.types";

// ----------------------------------------------------------------------------------------------------
// @ Typed validation functions
// ----------------------------------------------------------------------------------------------------

export type GenericFunctions<T> = {

    must: (compareFn: (value: T) => boolean, result: boolean) => AfterFunctionInvokedType<GenericFunctions<T>>;

}

export type AnyFunctions<T> = GenericFunctions<T>;

export type StringFunctions = {

    minLength: (min: number) => AfterFunctionInvokedType<StringFunctions>;
    maxLength: (max: number) => AfterFunctionInvokedType<StringFunctions>;

}

export type NumberFunctions = {

    min: (min: number) => AfterFunctionInvokedType<NumberFunctions>;
    max: (max: number) => AfterFunctionInvokedType<NumberFunctions>;
    between: (min: number, max: number) => AfterFunctionInvokedType<NumberFunctions>;

}

export type BooleanFunctions = {

    equals: (value: boolean) => AfterFunctionInvokedType<BooleanFunctions>;
    notEquals: (value: boolean) => AfterFunctionInvokedType<BooleanFunctions>;

}

export type ArrayFunctions<T> = {

    minLength: (min: number) => AfterFunctionInvokedType<ArrayFunctions<T>>;
    maxLength: (max: number) => AfterFunctionInvokedType<ArrayFunctions<T>>;
    must: (comparisonFn: (value: T[]) => boolean) => AfterFunctionInvokedType<ArrayFunctions<T>>;
    contains: (value: T) => AfterFunctionInvokedType<ArrayFunctions<T>>;

}

export type FunctionFunctions<T extends () => unknown> = {

    // mustReturnType: (t: 'string' | 'number' | 'boolean' | 'function' | 'object') => AfterFunctionInvokedType<FunctionFunctions<T>>;
    mustReturnValue: (value: ReturnType<T>) => AfterFunctionInvokedType<FunctionFunctions<T>>;

}