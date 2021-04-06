const express = require("express");
const PORT = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("OK");
});

require("./routes/stateRoutes")(app);

app.listen(PORT);
