const express = require("express");

const State = require("../models/state");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    if (await State.findOne({ abbreviation }))
      return res.status(400).send({ error: "Estado já cadastrado." });

    const user = await State.create(req.body);

    res.status(201).send({ user });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "O registro falhou." });
  }
});

module.exports = (app) => app.use("/", router);
