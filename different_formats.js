var express= require('express');
var app= express();

app.get('/',function(req,res){
  res.format({
    'text/plain': function(){
      res.send('text messages');
    },
    'text/html': function(){
      res.render('pindex.jade');
    },
    'application/json': function(){
      res.json({topic: 'express'});
    }
  });
});

app.listen(3000);