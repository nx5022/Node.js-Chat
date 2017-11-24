var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html')
});

server.listen('80', function(){
  console.log('Server running at 80');
});
