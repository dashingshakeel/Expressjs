var express=require(express);
var app= express();


app.get('/:breed',function(req,res){

  req.params.breed;
  req.query.ATTR;
  req.body.ATTR;
  req.param(ATTR);//params, body,query


  req.route;
  req.originalUrl;


  req.cookies.ATTR;
  req.get();//any header name
  req.accepts('text\html');

});
app.listen(3000);