var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fdata = {};

var User = require('.././models/mongoSchema');
mongoose.connect("mongodb://localhost/mydatabase");
var db = mongoose.connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
    User.find({age:25}, function(err, data){
      	fdata = data;
  		res.send(fdata);
    });
});
});
router.get('/:age=?', function(req, res, next) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
  User.find({age:parseInt(req.params.age)}, function(err, data){
      	fdata = data;
  		res.send(fdata);
    });
});
});
    module.exports = router;