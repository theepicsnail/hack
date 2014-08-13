require('tough-cookie');
var request = require('request');
var Promise = require('promise');
var jar = request.jar();
request = request.defaults({jar:jar});
var server = 'http://localhost:3000/';

function GET(path) {
  return new Promise(function(ret, thr) {
    request.get({url:server + path}, function(err,res) {
      if(err) { thr(err); }
      ret(JSON.parse(res.body));
    });
  });
}

function POST(path, data) {
  return new Promise(function(ret, thr) {
    request.post({url:server + path, json:data}, function(err,res) {
      if(err) { thr(err); }
      ret(res.body);
    });
  });
}

GET("").then(function(res){
GET("").then(function(res){
  console.log(res);
POST("login", {'a':3}).then(console.log.bind(console));
});
});


