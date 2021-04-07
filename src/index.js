const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("OK");
});

require("./routes/stateRoutes")(app);
require("./routes/cityRoutes")(app);

app.listen(port, () => console.log(`Server running on port ${port}`));
