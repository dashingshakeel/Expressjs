var express=require(express);
var app= express();


app.get('/:breed',function(req,res){

  res.status(200);
  res.set(header,value);
  res.get(header);

  res.cookie(name,value);
  res.clearCookie(name);


  res.redirect(status,path);
  res.send(status,text);
  res.json(status,object);
  res.josnp(object);//callback({})
  res.doownload(file);

  res.render(file,propss,function(err,html){
    res.send(200,html);
  });


});
app.listen(3000);