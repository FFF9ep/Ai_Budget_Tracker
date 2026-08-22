const HttpError = require('./httpError');

class ServerError extends HttpError {
    constructor(message = 'Internal Server Error') {
        super(500, message);
        this.name = 'ServerError';
    }
}

module.exports = ServerError;