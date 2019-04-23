var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"]
  }
});
module.exports = mongoose.model("Human", schema);
