const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/constants');
const CarRepository = require('../src/port/car_repository');
const Car = require('../src/application/car_service');

jest.mock('../src/port/car_repository');

describe('Create', () => {
    it('Valid Car', async () => {
        const data = {
            marca: "Nissan",
            modelo: "Frontier",
            placa: "ABC-1234",
            cor: "Preto"
        }

        const id = Utils.generateUuid();

        CarRepository.create.mockResolvedValue({ ...data, id});

        const result = await Car.create(data);

        expect(result).toEqual({ ...data, id});
    });
});

describe('List', () => {
    it('Valid Car', async () => {
        const data = {
            marca: "Nissan",
            modelo: "Frontier",
            placa: "ABC-1234",
            cor: "Preto"
        }

        const id = Utils.generateUuid();

        CarRepository.list.mockResolvedValue({ ...data, id});

        const result = await Car.list();

        expect(result).toEqual({ ...data, id});
    });
});