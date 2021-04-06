const City = require("../models/city");

exports.create = async (req, res) => {
  const { name } = req.body;

  try {
    if (await City.findOne({ name }))
      return res.status(400).send({ error: "City already registered." });

    const city = await City.create(req.body);

    res.status(200).send({ city });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "Register failed." });
  }
};

exports.list = async (req, res) => {
  let filter = {};

  if (req.query.state) filter = { stateId: req.query.state };

  try {
    const cities = await City.find(filter);

    res.status(200).send({ cities });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "Cities listing failed." });
  }
};

exports.retrieve = async (req, res) => {
  let city = null;

  try {
    if (req.query.name) {
      city = await City.findOne({ name: req.query.name });
    } else if (req.query.id) {
      city = await City.findById(req.query.id);
    } else {
      return res.status(400).send({
        error: "Query parameters 'name' or 'id' are required.",
      });
    }

    if (city === null)
      return res.status(404).send({ error: "City not found." });

    res.status(200).send({ city });
  } catch {
    res.status(404).send({ error: "City not found." });
  }
};

exports.update = async (req, res) => {
  try {
    const city = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    city.updatedAt = Date.now();

    res.status(202).send({ city });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err.msg });
  }
};

exports.destroy = async (req, res) => {
  try {
    const city = await City.findByIdAndDelete(req.params.id);

    res.status(200).send({ deleted: city });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "City not found." });
  }
};
