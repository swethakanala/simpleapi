const express = require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost/Task');
var db=mongoose.connection;
db.once('open',function(){
  console.log("connected to db");
});

db.on('error',function(err){
  console.log(err);
});
var User= require('./schema');

const app = express();
app.use(cookieParser());

app.use(bodyParser.json());


var router=require('./router')
app.use('/',router);

app.listen(4900);
  console.log('started');
