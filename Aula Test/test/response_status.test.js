const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/constants');

it('Status Code OK', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

it('Status Code CONFLICT', () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
    expect(result).toEqual(409);
});

it('Status Code NOT FOUND', () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});

it('Status Code SERVICE UNAVAILABLE', () => {
    const result = Utils.responseStatus(Constants.ErrorServiceUnavailable.name);
    expect(result).toEqual(503);
});

it('Status Code Method Not Allowed', () => {
    const result = Utils.responseStatus(Constants.ErrorMethodNotAllowed.name);
    expect(result).toEqual(405);
});

it('Status Code To Many Requests', () => {
    const result = Utils.responseStatus(Constants.ErrorToManyRequests.name);
    expect(result).toEqual(429);
});




