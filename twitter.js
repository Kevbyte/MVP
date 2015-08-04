
var data = [{
  tweet: "Hella Savings at Auotzone!!!"
}];


  var app = {
//TODO: The current 'addFriend' function just adds the class 'friend'
//to all messages sent by the user
    server: 'https://localhost:3000/messages',


    init: function() {

      // Poll for new messages
      setInterval(app.fetch, 2000);
    },
    
    fetch: function() {
      $.ajax({
        url: app.server,
        type: 'GET',
        contentType: 'application/json',
        success: function(data) {
          console.log('twitterfetch: Messages fetched');
          // "do something with data"
        },
          
        error: function(data) {
          console.error('twitterfetch: Failed to fetch messages');
        }
      });
    },
  };

// twit.get('search/tweets', {q: 'meow'}, function(error, tweets, response){
//       console.log(tweets.statuses[0]);
//       for(var i=0; i<tweets.statuses.length; i++){
//         data.push({
//           user: tweets.statuses[i].user.screen_name,
//           tweet: tweets.statuses[i].text,
//           location: tweets.statuses[i].user.location
//         });
//       }














    // send: function(data) {
    //   app.startSpinner();
    //   // Clear messages input
    //   app.$message.val('');

    //   // POST the message to the server
    //   $.ajax({
    //     url: app.server,
    //     type: 'POST',
    //     data: JSON.stringify(data),
    //     contentType: 'application/json',
    //     success: function (data) {
    //       console.log('chatterbox: Message sent');
    //       // Trigger a fetch to update the messages, pass true to animate
    //       app.fetch();
    //     },
    //     error: function (data) {
    //       console.error('chatterbox: Failed to send message');
    //     }
    //   });
    // },