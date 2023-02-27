import { ModelValidation } from "./classes/model-validation.class";

interface IUser {

    name: string;
    age: number;

}

const model: IUser = {

    name: 'Felipe',
    age: 23

};

class UserValidator extends ModelValidation<IUser> {

    constructor() {
        
        super();
    }
}

const userValidator = new UserValidator();

userValidator.run(model);