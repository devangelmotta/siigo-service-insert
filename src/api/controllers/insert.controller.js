const httpStatus = require('http-status');
const { omit } = require('lodash');
const Product = require('../models/user.model');


/**
 * Create new user
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    console.log(req.body)
    // const savedProduct = await product.save();
    // res.status(httpStatus.CREATED);
    // res.json(savedUser.transform());
  } catch (error) {
    // next(User.checkDuplicateEmail(error));
    console.log(error)
  }
};

