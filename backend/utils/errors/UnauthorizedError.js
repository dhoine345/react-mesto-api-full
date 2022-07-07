const { resCodes } = require('../constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = resCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
