const mongoose = require("../database");
const Schema = mongoose.Schema;

const CitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
    stateId: {
      ref: "State",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { versionKey: false }
);

const City = mongoose.model("City", CitySchema);

module.exports = City;
