const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const {
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
  DUPLICATE_EMAIL,
  UNAUTHORIZED,
} = require("../utils/errors");
const { JWT_SECRET } = require("../utils/config");

const opts = { runValidators: true, new: true };

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => {
      console.error(err);
      return res
        .status(SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

module.exports.getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({ message: "Invalid data." });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({ message: "Not found." });
      }
      return res
        .status(SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

module.exports.createUser = (req, res) => {
  const { name, avatar, email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        const emailError = new Error("Email already exists");
        emailError.name = "DuplicateEmail";
        throw emailError;
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({ name, avatar, email, password: hash }))
    .then((user) => {
      const userObj = user.toObject();
      delete userObj.password;
      res.status(201).send({ user: userObj });
      // console.log(user);
      // user.password = undefined;
      // console.log(user);
      // res.status(201).send({ user });
    })
    .catch((err) => {
      console.error(err);
      console.log(err.name);
      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST).send({ message: "Invalid data." });
      }
      if (err.name === "DuplicateEmail") {
        return res
          .status(DUPLICATE_EMAIL)
          .send({ message: "Email already exists" });
      }
      return res
        .status(SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "7d",
      });
      return res.status(200).send({ token });
    })
    .catch((err) => {
      console.log(err);
      console.log(err.name);
      if (err.name === "ValidationError" || err.name === "Error") {
        return res.status(BAD_REQUEST).send({ message: "Invalid data." });
      }
      return res.status(UNAUTHORIZED).send({ message: err.message });
    });
};

module.exports.getCurrentUser = (req, res) => {
  const userId = req.user._id;

  User.findById(userId)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({ message: "Invalid data." });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({ message: "Not found." });
      }
      return res
        .status(SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

module.exports.updateUser = (req, res) => {
  const { name, avatar } = req.body;
  const userId = req.user._id;

  User.findByIdAndUpdate(userId, { name, avatar }, opts)
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST).send({ message: "Invalid data." });
      }
      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({ message: "Invalid data." });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({ message: "Not found." });
      }
      return res
        .status(SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};
