var express=require('express'),
  bodyParser=require('body-parser'),
  app=express();


///third party middleware
app.use(bodyParser.urlencoded());

//custom middleware

app.use(function(req,res,next){
  console.log('this is log on every request');
  next();

});



app.get('/route',function(req,res){
  res.send('this is route');
});

//bilt-in middleware
app.use(express.static('./public'));
app.listen(3000);