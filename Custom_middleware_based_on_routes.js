var express= require('express'),
    app=express();


app.param('name',function(req,res,next,name){

  req.name=name[0].toUpperCase()+name.substring(1);
  next();

  Users.findOne({username: name},function(req,res,next){
    req.user=user;
    next();
  });
});

app.get('/name/:name',function(req,res){
  res.send('your name is ' + req.name);
});

app.put('/name/:name/edit');
app.delete('/name/:name/delete')
app.listen(3000);