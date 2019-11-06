const Joi = require('joi');
const User = require('../models/user.model');

module.exports = {

  // POST /v1/products
  createProduct: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().min(6).max(128).required(),
      price: Joi.string().max(128),
    },
  },
};
