// ----------------------------------------------------------------------------------------------------
// @ Validation step completation types
// ----------------------------------------------------------------------------------------------------

export type ValidationStepCompletedType = {

    completeValidation: () => void;

}

export type ValidationStepNavigationType<T> = {

    nextValidation: () => T;
    // ignoreNextValidations: () => T;

} & ValidationStepCompletedType;