import { ModelValidation } from "./model-validation.class";

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

        this.stringValidator('age', { ignoreTypeCheck: true })
    }
}

const userValidator = new UserValidator();

userValidator.run(model);