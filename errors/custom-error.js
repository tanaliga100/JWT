class CustomAPIError extends Error {
  constructor(message, statusCode) {
    console.log("from error", message, statusCode);
    super(message);
  }
}

module.exports = CustomAPIError;
