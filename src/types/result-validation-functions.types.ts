import { ValidationStepNavigation } from "./validation-step.types";

// ----------------------------------------------------------------------------------------------------
// @ After validation function invoked
// ----------------------------------------------------------------------------------------------------

export type FunctionInvoked<T> = {

    setMessage: (message: string) => ValidationStepNavigation<T>;
    // useDefaultMessage: () => ValidationStepNavigationType<T>;

};
