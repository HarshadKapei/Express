var express = require("express");
var router = express.Router();
var humanModal = require("../model/HumanModal");

router.post("/save", function(req, res) {
  console.log("######################");
  humanModal.save(req.body, res.callback);
});
module.exports = router;
