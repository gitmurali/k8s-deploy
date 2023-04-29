const createAndThrowError = (message, code) => {
  const error = new Error(message);
  error.code = code;
  throw error;
};

exports.createAndThrowError = createAndThrowError;
