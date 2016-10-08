var express=require('express');

var app= express();


app.set();
app.enable()
app.disable();
app.get();


app.disabled();
app.enabled();

app.set('env','development'); // procees.ev._ENV production
app.enable('trust proxy');
app.set('json callback name', 'cb');
app.set('json replacer', function(attr, val){
  if(attr='passwordHash')
    return undefined;
  else 
    return val;

})
app.enable('case sensitive routing');
app.enable('strict routing');
app.enable('view cache');
app.set('view engine','ejs');
app.set('views','templates');
app.disable('x-powered-by');

app.get ('/user_info',function(req,res){
  res.json(user);

})

app.get('/',function(req,res){
  res.render('index.ejs',{
    title: "hello express and jade"
  });
});


app.listen(3000,function(){
  console.log("listening on prt 3000")
});