var express=require('express');

var app= express();
app.get('/',function(req,res){
  res.render('index.ejs',{
    title: "hello express and jade"
  });
});


app.listen(3000,function(){
  console.log("listening on prt 3000")
});