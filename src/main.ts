import { ModelValidation } from "./classes/model-validation.class";

interface IUser {

    name: string;
    age: number;

}

const model: IUser = {

    name: 'Felipe ',
    age: 16

};

class UserValidator extends ModelValidation<IUser> {

    constructor() {
        
        super();

        // this.addStringValidator('name')
        //     .must(name => name.length > 0)
        //         .setMessage("Nome é obrigatório")
        //         .nextValidation()
        //     .equals("Felipe")
        //         .setMessage("Nome incorreto")
        //         .nextValidation()
        //     .notEquals("Wesley")
        //         .setMessage("Nome incorreto (\"Wesley\" não permitido)")
        //         .completeValidation();

        this.stringValidator('name', { typeErrorMessage: 'O nome deve ser um texto' })
            .equals("FelipE", { applyTrim: true, ignoreCase: true })
                .setMessage("Nome incorreto")
                .completeValidation();
    }
}

const userValidator = new UserValidator();

// userValidator.addStringValidator("name")
//     .must(name => name.lastIndexOf('e') != name.length - 1)
//         .setMessage("Último caracter inválido")
//         .completeValidation();

userValidator.run(model);