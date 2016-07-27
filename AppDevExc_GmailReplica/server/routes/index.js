var express = require('express');
var mongoose   = require('mongoose');
var movieModel = require('../models/mongoSchema');

var router = express.Router();
var http = require('http');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}
  ));

router.get('/harry', function(req, res, next) {
  
    console.log("Hello Brother!!!");
});

    module.exports = router;