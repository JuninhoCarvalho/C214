const Constants = {
    ErrorValidation: {
        name: 'ValidationError',
        message: '',
    },

    ErrorDB: {
        name: 'MongoError',
        message: 'MongoDB Error',
    },

    ErrorNotFound: {
        name: 'NotFound',
        message: 'Not Found!',
    },

    ErrorDuplicate: {
        name: 'Duplicate',
        message: 'Duplicada!',
    },

    ErrorServiceUnavailable: {
        name: 'Service Unavailable',
        message: 'Service Unavailable!',
    },

    ErrorMethodNotAllowed: {
        name: 'MethodNotAllowed',
        message: 'Method Not Allowed!',
    },
    
    ErrorToManyRequests: {
        name: 'ToManyRequests',
        message: 'To Many Requests!',
    },

};

module.exports = Constants;