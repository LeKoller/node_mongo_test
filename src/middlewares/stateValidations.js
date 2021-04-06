const { body } = require("express-validator");

module.exports = () => {
  return [
    body("name").notEmpty().escape().trim(),
    body("abbreviation").notEmpty().escape().trim(),
    body("abbreviation").isLength({ min: 2, max: 2 }),
  ];
};
