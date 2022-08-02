'use strict';
// Module Dependencies
// -------------------
var express = require('express');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var http = require('http');
var path = require('path');
var request = require('request');
var routes = require('./routes');
var activity = require('./routes/activity');

var app = express();

// Configure Express
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json({ type: 'application/json' }));
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.methodOverride());
//app.use(express.favicon());

app.use(express.static(path.join(__dirname, 'public')));

// Express in Development Mode
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

// var check = "amnmol";

// if (check === "amnmol") {
// console.log('inanmolifloop');
//   check2();
// }


// console.log('ccccccccccccccccccchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');

// function check2() {
//   var request = require('request');
//   var myJSONObject2 = {
//     "grant_type": "client_credentials",
//     "client_id": "ewozgxquu4nriupcx2tylyfl",
//     "client_secret": "d3BNHjIK6RAZQi7VgbXVYnWw",
//     "account_id": "526000739"
//   };
//   request({
//     url: "https://mch4s3mv5j6r7tyf5xqf8s0-y2wm.auth.marketingcloudapis.com/v2/token",
//     method: "POST",
//     json: true,   // <--Very important!!!
//     body: myJSONObject2
//   }, function (error, response, body) {

//     var statusCode = response.statusCode;
//     var authorizationtoken = JSON.parse(JSON.stringify(response.body))['access_token'];

//     console.log("authorizationtoken" + authorizationtoken);

//     if (statusCode === 200) {
//       console.log("INIFLOOP");
//     }
//   });

//   console.log('sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');

// }


// HubExchange Routes
app.get('/', routes.index);
app.post('/login', routes.login);
app.post('/logout', routes.logout);

// Custom Hello World Activity Routes
app.post('/check/save/', activity.save);
app.post('/check/validate/', activity.validate);
app.post('/check/publish/', activity.publish);
app.post('/check/execute/', activity.execute);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
