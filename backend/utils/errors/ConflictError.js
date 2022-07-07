const { resCodes } = require('../constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = resCodes.CONFLICT;
  }
}

module.exports = ConflictError;
