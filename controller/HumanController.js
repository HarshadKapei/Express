var express = require("express");
var router = express.Router();
var humanModal = require("../model/HumanModal");
var callback = require("../callback/callback.js");
router.post("/save", function(req, res) {
  console.log("######################");
  humanModal.save(req.body, res.callback);
  // console.log(res.send(res.body));
});
router.put("/edit/:id", function(req, res) {
  console.log("eeeeeeeeeeeeeeeeeeeee", req.params.id);
  humanModal.edit(req.params.id, req.body, res.callback);
});
router.get("/getAll", function(req, res) {
  humanModal.getAll(req.body, res.callback);
});
router.get("/delete", function(req, res) {
  humanModal.delete(req.body, res.callback);
});
router.get("/getOne", function(req, res) {
  humanModal.getOne(req.query.id, res.callback);
});
router.delete("/deleteOne/:id", function(req, res) {
  humanModal.deleteOne(req.params.id, res.callback);
});
module.exports = router;
