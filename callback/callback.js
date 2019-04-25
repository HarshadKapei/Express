var express = require("express");
var router = express.Router();
module.exports = function(req, res, next) {
  return function(err, data) {
    // Implement the middleware function based on the options object
    console.log("data.......................................", data);
    // console.log("res.......................................", res.body);
    // console.log("next......................................", next);
    if (err) {
      // res.status(500).json(err)
      console.log("from callback err...................");
      res.json({
        error: err,
        value: false
      });
      next();
    } else if (data) {
      // res.status(200).json(data)
      console.log("from callback data...................");
      res.json({
        data: data,
        value: true
      });
      next();
    } else {
      // res.status(200).send()
      console.log("from callback null...................");
      res.json({
        data: "No Data Found",
        value: false
      });
      next();
    }
  };
};
