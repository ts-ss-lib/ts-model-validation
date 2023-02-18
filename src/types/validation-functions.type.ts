import { GenericTypeIsAny } from "./type-check.type";
import {
    AnyFunctions,
    ArrayFunctions,
    BooleanFunctions,
    FunctionFunctions,
    GenericFunctions,
    NumberFunctions,
    StringFunctions
} from "./typed-validation-functions.types";

// ----------------------------------------------------------------------------------------------------
// @ Simple validation functions type
// ----------------------------------------------------------------------------------------------------

export type SimpleValidationFunctions<T> = 
    GenericTypeIsAny<T> extends true ?
    AnyFunctions<T> :
    T extends string ?
    StringFunctions :
    T extends number ?
    NumberFunctions :
    T extends boolean ?
    BooleanFunctions :
    T extends Array<infer T> ?
    ArrayFunctions<T> :
    // T extends Function ?
    T extends () => unknown ?
    FunctionFunctions<T> :
    GenericFunctions<T>;


