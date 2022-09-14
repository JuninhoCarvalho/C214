const Calculadora = require('./src/operacoes')

const sum = Calculadora.soma(4);
const sub = Calculadora.subtraction(5);
const mult = Calculadora.multiplication(8);
const div = Calculadora.division(4);
const pow = Calculadora.pow(2);

console.log(sum);
console.log(sub);
console.log(mult);
console.log(div);
console.log(pow);