const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(x) {
        const validateNum = validate({ x },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Deve ser um número!';
        }
        return x + x;
    },

    subtraction(x) {
        const validateNum = validate({ x },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Deve ser um número!';
        }
        return x - 2;
    },

    multiplication(x) {
        const validateNum = validate({ x },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Deve ser um número!';
        }
        return x * x;
    },

    division(x) {
        const validateNum = validate({ x },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Deve ser um número!';
        }
        return x / 4;
    },

    pow(x) {
        const validateNum = validate({ x },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Deve ser um número!';
        }
        return x * x;
    },
};

module.exports = Calculadora;