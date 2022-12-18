class CustomAPIError extends Error {
  constructor(message, statusCode) {
    console.log("from error", message, statusCode);
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = CustomAPIError;
