const express = require("express");
const router = express.Router();

const {
  create,
  list,
  retrieve,
  update,
  destroy,
} = require("../controllers/cityController");
const {
  cityValidations,
  stateIdValidation,
  validate,
} = require("../middlewares");

router.post(
  "/register",
  cityValidations(),
  validate,
  stateIdValidation,
  create
);
router.get("/list", list);
router.get("/get/", retrieve);
router.put("/edit/:id", cityValidations(), validate, stateIdValidation, update);
router.delete("/delete/:id", destroy);

module.exports = (app) => app.use("/cities", router);
