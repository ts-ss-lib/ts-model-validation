import { ValidationStepNavigationType } from "./validation-step.types";

// ----------------------------------------------------------------------------------------------------
// @ After validation function invoked
// ----------------------------------------------------------------------------------------------------

export type AfterFunctionInvokedType<T> = {

    setMessage: (message: string) => ValidationStepNavigationType<T>;
    // useDefaultMessage: () => ValidationStepNavigationType<T>;

};
