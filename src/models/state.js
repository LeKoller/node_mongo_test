const mongoose = require("../database");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const StateSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  abbreviation: {
    type: String,
    index: true,
    unique: true,
    required: true,
    uppercase: true,
    maxLength: 2,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  cities: [CitySchema],
});

const State = mongoose.model("state", StateSchema);

module.exports = State;
