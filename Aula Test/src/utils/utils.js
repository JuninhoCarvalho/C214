const { StatusCodes } = require('http-status-codes');
const { v4: uuidv4 } = require('uuid');

const Constants = require('./constants');

const Utils = {
    responseStatus(data) {
        switch (data) {
            case undefined:
                return StatusCodes.OK;
            case Constants.ErrorValidation.name:
                return StatusCodes.BAD_REQUEST;
            case Constants.ErrorDuplicate.name:
                return StatusCodes.CONFLICT;
            case Constants.ErrorNotFound.name:
                return StatusCodes.NOT_FOUND;
            case Constants.ErrorServiceUnavailable:
                return StatusCodes.SERVICE_UNAVAILABLE;
            case Constants.ErrorMethodNotAllowed:
                return StatusCodes.METHOD_NOT_ALLOWED;
            case Constants.ErrorToManyRequests:
                return StatusCodes.TOO_MANY_REQUESTS;
            default:
                return StatusCodes.INTERNAL_SERVER_ERROR;
        }
    },

    generateUuid(){
        return uuidv4();
    },
};

module.exports = Utils;