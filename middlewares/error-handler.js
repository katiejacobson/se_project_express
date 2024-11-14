const {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
} = require("../utils/errors");

const errorHandler = (err, req, res, next) => {
  console.error(err);
  console.error(err.message);
  const statusCode = err.statusCode || 500;
  const message =
    statusCode === 500 ? "An error occured on the server" : err.messsage;
  res.status(statusCode).send({ message: err.message });
};

module.exports = errorHandler;
