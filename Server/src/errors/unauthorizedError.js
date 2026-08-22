const HttpError = require('./httpError');

class UnauthorizedError extends HttpError {
    constructor(message = 'Unauthorized') {
        super(401, message);
        this.name = 'UnauthorizedError';
    }
}

module.exports = UnauthorizedError;