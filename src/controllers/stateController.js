const State = require("../models/state");

exports.create = async (req, res) => {
  const { abbreviation } = req.body;

  try {
    if (await State.findOne({ abbreviation }))
      return res.status(400).send({ error: "State already registered." });

    const state = await State.create(req.body);

    res.status(201).send({ state });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "Register failed." });
  }
};

exports.list = async (req, res) => {
  try {
    const states = await State.find({});

    res.status(200).send({ states });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "State listing failed." });
  }
};

exports.retrieve = async (req, res) => {
  try {
    let state = {};

    if (req.query.abbreviation) {
      state = await State.findOne({ abbreviation: req.query.abbreviation });
    } else if (req.query.name) {
      state = await State.findOne({ name: req.query.name });
    } else {
      return res.status(400).send({
        error: "Query parameters 'name' or 'abbreviation' are required.",
      });
    }

    res.status(200).send({ state });
  } catch (err) {
    console.log(err);
    res.status(404).send({ error: "State not found." });
  }
};

exports.update = async (req, res) => {
  try {
    const state = await State.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    state.updatedAt = Date.now();

    res.status(202).send({ state });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "State not found." });
  }
};

exports.destroy = async (req, res) => {
  try {
    const state = await State.findByIdAndDelete(req.params.id);

    res.status(200).send({ deleted: state });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "State not found." });
  }
};
