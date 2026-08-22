const HttpError = require('./httpError');

class ForbiddenError extends HttpError {
    constructor(message = 'Access forbidden') {
        super(403, message);
        this.name = 'ForbiddenError';
    } 
}

module.exports = ForbiddenError;