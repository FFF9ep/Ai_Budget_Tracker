const HttpError = require('./HttpError');

class ForbiddenError extends HttpError {
    constructor(message = 'Access forbidden') {
        super(message, 403);
        this.name = 'ForbiddenError';
    } 
}

module.exports = ForbiddenError;