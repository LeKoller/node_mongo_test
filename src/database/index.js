const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27018/state_city", {
  auth: { authSource: "admin" },
  user: "root",
  pass: "example",
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

module.exports = mongoose;
