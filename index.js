const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const router = require("./controller/HumanController");
mongoose.connect("mongodb://localhost:27017/expprac", {
  useNewUrlParser: true
});
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/HumanController", router);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example  app listening on port ${port}!`));
