var express= require('express');
var app= express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



var names = [];
app.all('/',function(req,res,next){
  console.log('from all');
  next();
});

app.get('/', function(req,res,next){
  console.log(names);
  next();
},function(req,res){
  res.render('index.ejs',{names: names})
});

app.post('/',function(req,res){
  names.push(req.body.name);
  console.log(names[2]);
  res.redirect('/');
});

app.listen(3000);