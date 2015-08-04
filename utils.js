var http = require('http')
var fs = require('fs')
var path = require('path')

headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "text/plain"
};

var encoding = {encoding: 'utf-8'};

exports.serveAsset = function(response, asset, callback){
  fs.readFile(__dirname+asset, encoding, function(err, result){
    exports.sendResponse(response, result)
  });
};

exports.serveAsset2 = function(response, asset, callback){
  fs.readFile(__dirname+asset, encoding, function(err, result){
    // console.log("__dirname+asset= ", __dirname+asset);
    // console.log("result= ", result);
    exports.sendResponse2(response, result);
  });
};

exports.serveAsset3 = function(response, asset, callback){
  fs.readFile(__dirname+asset, encoding, function(err, result){
    exports.sendResponse3(response, result);
  });
};

exports.serveAsset4 = function(response, asset, callback){
  fs.readFile(__dirname+asset, encoding, function(err, result){
    exports.sendResponse3(response, result);
  });
};

exports.serveAsset5 = function(response, asset, callback){
  fs.readFile(__dirname+asset, encoding, function(err, result){
    exports.sendResponse3(response, result);
  });
};

exports.sendResponse = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, {'Content-Type': 'text/html'});
  response.end(data);
};

exports.sendResponse2 = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, {'Content-Type': 'text/css'});
  response.end(data);
};

exports.sendResponse3 = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, {'Content-Type': 'application/javascript'});
  response.end(data);
};

exports.sendResponse4 = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, {'Content-Type': 'text/plain'});
  response.end(data);
};

exports.collectData = function(response, callback){
  var data = "";
  response.on('data', function(chunk){
    data = data + chunk;
  });
  response.on('end', function(){
    callback(JSON.parse(data))
  })
};

//it should work