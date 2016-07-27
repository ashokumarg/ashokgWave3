var express = require('express');
var mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', function(error)  {
  if(error){console.log(error);} console.log("Connect successfully");
});

var mailBoxSchema = mongoose.Schema({
  mailId: String,
  subject: String,
  date: String, 
});

var messageModel = mongoose.model("mails", mailBoxSchema);


var router = express();
var http = require('http');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}
  ));

router.get('/harry', function(req, res, next) {
  
    console.log("Hello Brother!!!");
});


router.post('/add',function(req,res){

console.log("Hello Add!!!");
console.log(req.body.mailId); 
console.log(req.body.subject); 
console.log(req.body.date); 

var newMessage = new messageModel(req.body);
console.log("Hello save before!!!");
  
  newMessage.save(function (err, newMessage) {
    console.log("Hello save method!!!");
   if (err) {
     console.log(err);
   } 
     console.dir(newMessage);
     console.log('Message saved');
   
  });
  res.send(newMessage);
});


router.get('/findAll', function (req, res) {
  console.log("I am here");
  messageModel.find({}, function(err,message){
    if(err){
      console.log(err);
    }
      console.log(message);
      res.send(message);
    
  });
});


module.exports = router;