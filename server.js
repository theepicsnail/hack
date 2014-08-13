var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({secret: new Date() + ' '}));

app.get('/', function(req, res) {
  //console.log(req.session.count);
  req.session.count = 1+(req.session.count | 0);
  res.send({some:'json', count:req.session.count});
});

app.post('/login', function(req, res) {
  console.log("server:", req.session.count);
  console.log(req.body);
  res.send({reply:req.session.count});
});

app.listen(3000);



register({username:String, password:String}) = {
login
logout








