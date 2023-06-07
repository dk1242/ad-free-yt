const express = require("express");
const cors = require("cors");

require("dotenv").config();

const searchRoutes = require("./routes/searchRoutes");

const app = express();

app.use(cors());
app.use("/api", searchRoutes);

const port = process.env.PORT || 8000;

app.listen(port, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listening on port: ${port}`);
  }
});
