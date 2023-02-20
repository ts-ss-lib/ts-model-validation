import { AfterFunctionInvokedType } from "./result-validation-functions.types";
import { ArrayElementType } from "./type-check.type";

// ----------------------------------------------------------------------------------------------------
// @ Typed validation functions
// ----------------------------------------------------------------------------------------------------

export type GenericFunctions<T> = {

    must: (compareFn: (value: T) => boolean, result: boolean) => AfterFunctionInvokedType<GenericFunctions<T>>;
    equals: (value: T) => AfterFunctionInvokedType<GenericFunctions<T>>;
    notEquals: (value: T) => AfterFunctionInvokedType<GenericFunctions<T>>;

};

export type StringFunctions = {

    // minLength(min: number): AfterFunctionInvokedType<StringFunctions>;
    // maxLength(max: number): AfterFunctionInvokedType<StringFunctions>;
    must(compareFn: (value: string) => boolean): AfterFunctionInvokedType<StringFunctions>;
    must(compareFn: (value: string) => boolean, result: boolean): AfterFunctionInvokedType<StringFunctions>;
    equals(value: string): AfterFunctionInvokedType<StringFunctions>;
    notEquals(value: string): AfterFunctionInvokedType<StringFunctions>;

};

export type NumberFunctions = {

    min: (min: number) => AfterFunctionInvokedType<NumberFunctions>;
    max: (max: number) => AfterFunctionInvokedType<NumberFunctions>;
    between: (min: number, max: number) => AfterFunctionInvokedType<NumberFunctions>;
    must: (compareFn: (value: number) => boolean, result: boolean) => AfterFunctionInvokedType<NumberFunctions>;
    equals: (value: number) => AfterFunctionInvokedType<NumberFunctions>;
    notEquals: (value: number) => AfterFunctionInvokedType<NumberFunctions>;

};

export type ArrayFunctions<T> = {

    minCount: (min: number) => AfterFunctionInvokedType<ArrayFunctions<T>>;
    maxCount: (max: number) => AfterFunctionInvokedType<ArrayFunctions<T>>;
    contains: (value: ArrayElementType<T>) => AfterFunctionInvokedType<ArrayFunctions<T>>;
    must: (compareFn: (value: Array<T>) => boolean, result: boolean) => AfterFunctionInvokedType<ArrayFunctions<T>>;

};

export type BooleanFunctions = {
    
    must: (compareFn: (value: boolean) => boolean, result: boolean) => AfterFunctionInvokedType<BooleanFunctions>;
    equals: (value: boolean) => AfterFunctionInvokedType<BooleanFunctions>;
    notEquals: (value: boolean) => AfterFunctionInvokedType<BooleanFunctions>;

};

export type FunctionFunctions<T extends () => unknown> = {

    // mustReturnType: (t: 'string' | 'number' | 'boolean' | 'function' | 'object') => AfterFunctionInvokedType<FunctionFunctions<T>>;
    mustReturnValue: (value: ReturnType<T>) => AfterFunctionInvokedType<FunctionFunctions<T>>;
    must: (compareFn: (value: T) => boolean, result: boolean) => AfterFunctionInvokedType<FunctionFunctions<T>>;

};
