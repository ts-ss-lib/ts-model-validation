// ----------------------------------------------------------------------------------------------------
// @ Generic type custom check
// ----------------------------------------------------------------------------------------------------

export type GenericTypeIsAny<T> = 0 extends (1 & T) ? true : false;

export type ArrayElementType<T> = T extends readonly (infer E)[] ? E : never