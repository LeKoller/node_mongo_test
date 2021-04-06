const express = require("express");
const router = express.Router();

const {
  create,
  list,
  retrieve,
  update,
  destroy,
} = require("../controllers/stateController");

router.post("/register", create);
router.get("/list", list);
router.get("/get/", retrieve);
router.patch("/edit/:id", update);
router.delete("/delete/:id", destroy);

module.exports = (app) => app.use("/states", router);
