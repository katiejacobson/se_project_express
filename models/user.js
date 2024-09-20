const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "You must enter a valid URL",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message: "You must enter a valid email",
    },
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(
  email,
  password
) {
  console.log("inside findUserByCredentials");
  return this.findOne({ email }).then((user) => {
    if (!user) {
      return Promise.reject(new Error("Wrong email or password"));
    }
    console.log(user.password);
    console.log(password);
    return bcrypt.compare(password, user.password).then((matched) => {
      console.log(matched);
      if (!matched) {
        return Promise.reject(new Error("Wrong email or password"));
      }
      return user;
    });
  });
};

module.exports = mongoose.model("user", userSchema);
