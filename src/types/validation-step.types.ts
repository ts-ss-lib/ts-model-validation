// ----------------------------------------------------------------------------------------------------
// @ Validation step completation types
// ----------------------------------------------------------------------------------------------------

export type ValidationStepCompleted = {

    completeValidation: () => void;

}

export type ValidationStepNavigation<T> = {

    nextValidation: () => T;
    // ignoreNextValidations: () => T;

} & ValidationStepCompleted;