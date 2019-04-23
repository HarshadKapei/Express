var mongoose = require("mongoose");
var human = require("../mongooseModel/Human");

var model = {
  save: (data, callback) => {
    console.log("dataaaaaaaaaaa", data);
    var saveHuman = new human(data);
    saveHuman.save(callback);
  }
};
module.exports = model;
