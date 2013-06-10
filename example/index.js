var http = require('http');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/static'));

var antbox = require('../');
var ab = antbox();

ab.on('test', function (response) {

  // Store in database

  console.log(response.name);
  console.log(response.data);

  //console.log(response.req);
  //console.log(response.res);

});

var data1 = {
  title: 'Please login',
  body: 'Welcome to our wonderful login form',
  css: 'a.css',
};

var data2 = {
  title: 'Login NOW',
  body: 'Do it or we\'ll find you!',
  css: 'b.css',
};

app.get('/', ab('root test', data1, data2));

app.get('/', function (req, res, next) {
  res.render(__dirname + '/index.jade');
});

http.createServer(app).listen(3000, function () {
  console.log('http://0.0.0.0:3000');
});
