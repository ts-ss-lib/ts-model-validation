import { stringMaxLengthValidator } from "../../functions/string/max-length.validator";
import { stringMinLengthValidator } from "../../functions/string/min-length.validator";

const stringFunctionsMapping = {

    minLengthValidatorFn: stringMinLengthValidator,
    maxLengthValidatorFn: stringMaxLengthValidator

};

export { stringFunctionsMapping };