const HttpError = require('./httpError');

class BadRequestError extends HttpError {
    constructor(message = 'Bad Request') {
        super(400, message);
        this.name = 'BadRequestError';
    }
}

module.exports = BadRequestError;