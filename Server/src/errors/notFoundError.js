const HttpError = require('./httpError');

class NotFoundError extends HttpError {
    constructor(message = 'Resource not found') {
        super(404, message);
        this.name = 'NotFoundError';
    } 
}

module.exports = NotFoundError;