const { validationResult } = require("express-validator");

module.exports.stateValidations = require("./stateValidations");

module.exports.cityValidations = require("./cityValidations").sanitizer;
module.exports.stateIdValidation = require("./cityValidations").stateIdValidation;

module.exports.validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];

  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).send({
    errors: extractedErrors,
  });
};
