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
