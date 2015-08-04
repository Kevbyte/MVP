var utils = require('./utils')
var url = require('url')
var Twitter = require('twitter');
// var twitter = require('./twitter')

var twit = new Twitter({
  consumer_key: 'gbOtIZ0C1cQD0643Sp9MG5lOL',
  consumer_secret: 'N4Sfna456Gz9fzjDBSxuutlkB8oopaE6Ax3gSTbF2FTEsKWQSd',
  access_token_key: '3304536349-DAegsFYTqZCsnHMXWM0O2DVhCrvkOiLUF8UbWAx',
  access_token_secret: 'mmqMqbxYFHR342aFJJfSps4AG6Pap2rsyS7KKcBjxrkC0'
});




var messages = [{
  tweet: "Hella Savings at Auotzone!!!"
}];

exports.handleRequest = function(request, response){
  console.log("Serving request type " + request.method + " for url " + request.url);
  var parts = url.parse(request.url);
  var urlPath = parts.pathname;
  var actions = {

    'GET': function(request, response){
      // console.log("request.url= ", request.url)
      if(urlPath === "/"){
        var index = urlPath + 'index.html';
        // console.log("index= ", index)
        utils.serveAsset(response, index);
      }
      else if(urlPath==="/style.css"){
        var style = urlPath;
        utils.serveAsset2(response, style);
      }
      else if(urlPath==="/twitter.js"){
        var twitterjs = urlPath;
        utils.serveAsset5(response, twitterjs);
      }
      else if(urlPath==="/bower_components/jquery/jquery.min.js"){
        var jquery = urlPath;
        utils.serveAsset3(response, jquery);
      }
      else if(urlPath==="/bower_components/underscore/underscore-min.js"){
        var under = urlPath;
        utils.serveAsset4(response, under);
      }
      else if(urlPath==="/messages"){
        twit.get('search/tweets', {q: 'meow'}, function(error, tweets, response){
          // console.log(tweets.statuses[0]);
          for(var i=0; i<tweets.statuses.length; i++){
            messages.push({
              tweet: tweets.statuses[i].text
            });
            // console.log(data);
          }
        });
        utils.sendResponse(response, {results: messages});
      }
    },
    'POST': function(request, response){
      console.log("urlPath",urlPath)
      if(urlPath === '/tires'){
        var index = "/assets/tires.html";
        utils.serveAsset(response, index)
      }
      if(urlPath === '/brakes'){
        var index = "/assets/brakes.html";
        utils.serveAsset(response, index)
      }

      // utils.collectData(response, function(data){
      //   messages.push(data);
      //   utils.sendResponse(response, data)
      // })
    },
    'OPTIONS': function(request, response){
      console.log("I am trying to handle options")
      utils.sendResponse4(response, "ok", 200);
    }
  };

  var action = actions[request.method];
  if(action){
    action(request, response);
  }else{
    sendResponse(response, "Not Found", 404);
  }
};