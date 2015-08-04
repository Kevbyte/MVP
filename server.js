var http = require('http');
var url = require('url')
var path = require('path')
var handler = require('./requestHandler')


var ip = '127.0.0.1';
var port = 3000;

var encoding = {encoding: 'utf-8'}

var server = http.createServer(handler.handleRequest)
    // path = url.parse(request.url,true).pathname;
    //  var x= fs.readFile(__dirname + "/index.html", encoding, function(err, result){
    //    response.end(result);
    //   })



console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip)