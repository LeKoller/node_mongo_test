const { body } = require("express-validator");
const City = require("../models/city");

module.exports.sanitizer = () => {
  return [
    body("name").notEmpty().escape().trim(),
    body("stateId").notEmpty().escape().trim(),
  ];
};

module.exports.stateIdValidation = async (req, res, next) => {
  try {
    const { stateId } = req.body;

    await City.findById(stateId);

    return next();
  } catch {
    res.status(400).send({
      error: "Invalid stateId. No state found with provided credential.",
    });
  }
};
