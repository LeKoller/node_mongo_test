const datetime = require("../utils/datetime");
const mongoose = require("../database");
const Schema = mongoose.Schema;

const StateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    abbreviation: {
      type: String,
      unique: true,
      required: true,
      uppercase: true,
      maxLength: 2,
    },
    createdAt: {
      type: Date,
      default: datetime,
    },
    updatedAt: {
      type: Date,
      default: datetime,
    },
  },
  { versionKey: false }
);

const State = mongoose.model("State", StateSchema);

module.exports = State;
