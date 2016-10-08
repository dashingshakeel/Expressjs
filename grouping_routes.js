var express= require('express');
var app= express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));



var names = [];


app.route('/')
  .all(function(req,res,next){
    console.log('from all');
    next();
  })

  .get(function(req,res,next){
    console.log(names);
    next();
  },function(req,res){
    res.render('index.jade',{names: names})
  })

  .post(function(req,res){
    names.push(req.body.name);
  
    res.redirect('/');
  });

app.listen(3000);