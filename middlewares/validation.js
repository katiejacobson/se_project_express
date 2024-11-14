const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateUrl = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

module.exports.validateClothingItem = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),
    imageUrl: Joi.string().required().custom(validateUrl).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'The "imageUrl" field must be a valid url',
    }),
    weather: Joi.string().required().valid("hot", "warm", "cold"),
  }),
});

module.exports.validateUserCreationInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),
    avatar: Joi.string().required().custom(validateUrl).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'The "imageUrl" field must be a valid url',
    }),
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.uri": 'The "email" field must be a valid email',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
    }),
  }),
});

module.exports.validateUserLoginInfo = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.uri": 'The "email" field must be a valid email',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
    }),
  }),
});

module.exports.validateUserId = celebrate({
  body: Joi.object().keys({
    userId: Joi.string().length(24).hex().messages({
      "string.length": "The ID must be 24 characters in length",
      "string.hex": "The ID must be a hexadecimal string",
    }),
  }),
});

module.exports.validateItemId = celebrate({
  body: Joi.object().keys({
    itemId: Joi.string().length(24).hex().messages({
      "string.length": "The ID must be 24 characters in length",
      "string.hex": "The ID must be a hexadecimal string",
    }),
  }),
});

module.exports.validateId = celebrate({
  params: Joi.object().keys({
    itemId: Joi.string().length(24).hex().messages({
      "string.length": "The ID must be 24 characters in length",
      "string.hex": "The ID must be a hexadecimal string",
    }),
    userId: Joi.string().length(24).hex().messages({
      "string.length": "The ID must be 24 characters in length",
      "string.hex": "The ID must be a hexadecimal string",
    }),
  }),
});
