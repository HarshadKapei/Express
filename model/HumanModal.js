var mongoose = require("mongoose");
var human = require("../mongooseModel/Human");
const callback = require("../callback/callback.js");
const express = require("express");
const app = express();
var model = {
  // save: (data, callback) => {
  //   console.log("dataaaaaaaaaaa", data);
  //   var saveHuman = new human(data);
  //   saveHuman.save(callback);
  // }
  save: function(req, callback) {
    var saveHuman = new human(req);
    saveHuman.save(function(err, saveData) {
      if (err) {
        callback(err, null);
      } else if (saveData === null) {
        callback("No data found", null);
      } else {
        console.log("111111111111111111111");
        app.use(callback, callback(null, saveData));
      }
    });
  },
  edit: function(_id, data, callback) {
    human
      .findOneAndUpdate({ _id: _id }, data, { new: true })
      .exec(function(err, updatedData) {
        if (err) {
          console.log("hii from err.............");
          callback;
        } else if (updatedData == null) {
          console.log("hii from null.............");
          callback;
        } else {
          console.log("updatedData", updatedData);
          console.log("hii from data.............");
          callback;
        }
      });
  },
  getAll: function(data, callback) {
    human.find({}).exec(function(err, allData) {
      if (err) {
        console.log("hii from err.............");
        callback;
      } else if (allData == null) {
        console.log("hii from null.............");
        callback;
      } else {
        console.log("allData", allData);
        console.log("hii from data.............");
        callback;
      }
    });
  },
  delete: function(data, callback) {
    human.deleteMany({}).exec(function(err, deleteData) {
      if (err) {
        console.log("hii from err.............");
        callback;
      } else if (deleteData == null) {
        console.log("hii from null.............");
        callback;
      } else {
        console.log("allData", deleteData);
        console.log("hii from data.............");
        callback;
      }
    });
  },
  getOne: function(data, callback) {
    human.findOne({ _id: data }).exec(function(err, oneData) {
      if (err) {
        console.log("hii from err.............");
        callback;
      } else if (oneData == null) {
        console.log("hii from null.............");
        callback;
      } else {
        console.log("oneData", oneData);
        console.log("hii from data.............");
        callback;
      }
    });
  },
  deleteOne: function(data, callback) {
    human.deleteOne({ _id: data }).exec(function(err, oneData) {
      if (err) {
        console.log("hii from err.............");
        callback;
      } else if (oneData == null) {
        console.log("hii from null.............");
        callback;
      } else {
        console.log("oneData", oneData);
        console.log("hii from data.............");
        callback;
      }
    });
  }
};
module.exports = model;
