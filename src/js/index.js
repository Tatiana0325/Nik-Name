class Validator {
    validateUsername(name) {
        const regex1 =/^[a-z]+$/i;
        const regex2 = /^[a-z]+(([\d]{1}[\w\_\-][\d]{1})+)[a-z]$/i;
        const regex3 = /^[a-z]+(([0-9]{0,3}[a-z\_\-])+)[a-z]$/i;
        const regex4 = /^[a-z]+[\-\_]+([\d]{1})+[a-z]$/i;
        const regex5 = /^[a-z]+([\d]{0,3})[a-z]$/i

        if((regex1.test(name)) || (regex2.test(name)) || (regex3.test(name)) || (regex4.test(name)) || (regex5.test(name))) {
            return `Имя ${name} соответсвует требованием`;
        } else {
            return `Имя ${name} не соответсвует требованием`;
        }
    };
}

const validator = new Validator();

export default validator;