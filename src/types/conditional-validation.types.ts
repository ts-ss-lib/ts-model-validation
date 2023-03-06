import { ValidationStepCompleted } from "./validation-step.types";

// ----------------------------------------------------------------------------------------------------
// @ Conditional validation function results
// ----------------------------------------------------------------------------------------------------

export type ConditionalValidationFunctions = {

    setValidators: (addValidatorsFn: () => void) => ConditionalValidationElseFunctions;

};

export type ConditionalValidationElseFunctions = {

    else: (addValidatorsFn: () => void) => ValidationStepCompleted;

} & ValidationStepCompleted;