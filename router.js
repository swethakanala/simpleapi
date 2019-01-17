const express = require('express');
const router = express.Router();
var cookieParser = require('cookie-parser');
var User= require('./schema');


  //middleware creation
var simpleFun= function(req,res,next){
req.middleware="middleware created";
next()
}
router.use(simpleFun);
//api using middleware

router.get('/middleware',simpleFun,function(req,res){
var response= req.middleware;
res.send(response);
});

//cookie creation
router.get('/cookie',function(req,res){
  res.cookie('name','swetha').send('Cookie is set');
});

//display of cookies

router.get('/cookie-details', function(req, res) {
  res.send(req.cookies).json();
});


//posting user details
router.post('/mongo',function(req,res)
{
  const firstname= req.body.firstname;
  const lastname= req.body.lastname;
  const role= req.body.role;

  let user= new User();
  user.firstname= firstname;
  user.lastname= lastname;
  user.role= role;

//saving user details into database
  user.save(function(err){
    if(err){
res.send('error')
    }
    res.send(user);

  })
})

// getting url parameters

router.get('/parameters',function(req,res){
  var firstname= req.param('firstname');
  var lastname= req.param('lastname');
  res.send(firstname +' ' + lastname);
})

router.get('/parameters/:username', function(req, res) {
  res.send(req.params.username);
});





module.exports=router;
