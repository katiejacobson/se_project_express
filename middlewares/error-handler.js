const errorHandler = (err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const errorMessage =
    statusCode === 500 ? "An error occured on the server" : err.message;
  res.status(statusCode).send({ message: errorMessage });
};

module.exports = errorHandler;
