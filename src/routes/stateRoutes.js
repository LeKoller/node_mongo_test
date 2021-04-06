const express = require("express");
const router = express.Router();

const { stateValidations, validate } = require("../middlewares");

const {
  create,
  list,
  retrieve,
  update,
  destroy,
} = require("../controllers/stateController");

router.post("/register", stateValidations(), validate, create);
router.get("/list", list);
router.get("/get/", retrieve);
router.patch("/edit/:id", update);
router.delete("/delete/:id", destroy);

module.exports = (app) => app.use("/states", router);
