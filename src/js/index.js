class Validator {
    validateUsername(name) {
        const regex = /^[a-z]+(([0-9]{0,3}[a-z\_\-])+)[a-z]$/i;

        if(regex.test(name)) {
            return `Имя ${name} соответсвует требованием`;
        } else {
            return `Имя ${name} не соответсвует требованием`;
        };
    };
}

const validator = new Validator();

export default validator;