// ----------------------------------------------------------------------------------------------------
// @ Generic type custom check
// ----------------------------------------------------------------------------------------------------

/**
 * @type GenericTypeIsAny<T>
 * 
 * Generic type - Returns `true` if `T` matches with `any`, and `false` otherwise
 */
export type GenericTypeIsAny<T> = 0 extends (1 & T) ? true : false;

/**
 * @type ArrayElementType<T>
 * 
 * Generic type to represents the type of a item in an array
 */
export type ArrayElementType<T> = T extends readonly (infer E)[] ? E : never