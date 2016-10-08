var express= require('express'),
  bodyParser=require('body-parser'),
  app =express(),
  APIv1=require('./api1'),
  APIv2=require('./api2');


app.use('/api/v1',APIv1);
app.use('/api/v2',APIv2);


//var router=express.Router();
/*
router.use(function(req,res,next){
  console.log('router specific middleware');
  next();

});

router.get('/',function(req,res){
  res.send('router home route');
});

router.route('/test').get(function(req,res){
  res.send('router test route');
});



app.use('/api',router);
*/






app.listen(3000);
