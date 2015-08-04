var http = require('http');
var url = require('url');
var path = require('path');
var handler = require('./requestHandler');
// var express = require('express');

// var app = express();

// app.use(express.static(__dirname + '/public'));





// app.get('/', function(request, response){
//   res.render('index')
// })








var ip = '127.0.0.1';
var port = 8000;

var encoding = {encoding: 'utf-8'}

var server = http.createServer(handler.handleRequest)
    // path = url.parse(request.url,true).pathname;
    //  var x= fs.readFile(__dirname + "/index.html", encoding, function(err, result){
    //    response.end(result);
    //   })



console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip)