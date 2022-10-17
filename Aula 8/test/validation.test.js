const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Carro válido', () => {
    const result = Validation.create({
        "placa": "AOC-1234",
        "marca": "Chevrolet",
        "modelo": "Onix",
        "cor": "Branco"
    });
    expect(result).toEqual(undefined);
});

it('Carro inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        "marca": "Chevrolet",
        "modelo": "Onix",
        "cor": "Branco"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
