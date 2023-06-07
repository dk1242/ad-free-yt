const express = require("express");
const cors = require("cors");

require("dotenv").config();

const searchRoutes = require("./routes/searchRoutes");

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Visitor!!");
});
app.get("/favicon.ico", (req, res) => res.status(204));
app.use("/api", searchRoutes);

const port = process.env.PORT || 8000;

app.listen(port, (err, data) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log(`server listening on port: ${port}`);
  }
});
