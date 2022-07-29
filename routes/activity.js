'use strict';
var util = require('util');

// Deps
const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var http = require('https');

var authToken;
var statusCode;

exports.logExecuteData = [];

function logData(req) {
    exports.logExecuteData.push({
        body: req.body,
        headers: req.headers,
        trailers: req.trailers,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        route: req.route,
        cookies: req.cookies,
        ip: req.ip,
        path: req.path,
        host: req.host,
        fresh: req.fresh,
        stale: req.stale,
        protocol: req.protocol,
        secure: req.secure,
        originalUrl: req.originalUrl
    });
    console.log("body: " + util.inspect(req.body));
    console.log("headers: " + req.headers);
    console.log("trailers: " + req.trailers);
    console.log("method: " + req.method);
    console.log("url: " + req.url);
    console.log("params: " + util.inspect(req.params));
    console.log("query: " + util.inspect(req.query));
    console.log("route: " + req.route);
    console.log("cookies: " + req.cookies);
    console.log("ip: " + req.ip);
    console.log("path: " + req.path);
    console.log("host: " + req.host);
    console.log("fresh: " + req.fresh);
    console.log("stale: " + req.stale);
    console.log("protocol: " + req.protocol);
    console.log("secure: " + req.secure);
    console.log("originalUrl: " + req.originalUrl);
}

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function (req, res) {

    console.log("5 -- For Edit");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
    //console.log("Edited: "+req.body.inArguments[0]);    

    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Edit');
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function (req, res) {

    console.log("5 -- For Save");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
    //console.log("Saved: "+req.body.inArguments[0]);

    // Data from the req and put it in an array accessible to the main app.
    console.log(req.body);
    logData(req);
    res.send(200, 'Save');
};

/*
 * POST Handler for /execute/ route of Activity.
 */
exports.execute = function (req, res) {

    console.log("5 -- For Execute");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");


    var requestBody = req.body.inArguments[0];

    const accountSid = requestBody.accountSid;
    const authToken = requestBody.authToken;
    const SubscriberKey = requestBody.SubscriberKey;
    const EmailAddress = requestBody.EmailAddress;
    const from = requestBody.messagingService;
    const body = requestBody.body;
    console.log("requestBody: " + requestBody);
    console.log("ExecutedaccountSid: " + accountSid);
    console.log("ExecutedauthToken: " + authToken);
    console.log("SubscriberKey: " + SubscriberKey);
    console.log("EmailAddress: " + EmailAddress);
    console.log("Executedfrom: " + from);
    console.log("Executedbody: " + body);

    //       const client = require('twilio')(accountSid, authToken);
    //          client.messages
    //         .create({body: body, from: '+12562903890', to: '+917869544724', messagingService: messagingService })
    //         .then(message => console.log(message.sid))
    //         .done();

    //         client.messages
    //         .create({body: body, from: '+12562903890', to:to, messagingService: from})
    //         .then(message => console.log(message.sid))
    //         .done();


    // const client = require('twilio')(accountSid, authToken);
    //    client.messages
    //    .create({body: body, from: '+12562903890', to: to, messagingService: from})
    //    .then(message => console.log(message.sid))
    //    .done();

    // // FOR TESTING
    // logData(req);
    //   res.send(200, 'Publish');

    // Used to decode JWT
    // JWT(req.body, process.env.jwtSecret, (err, decoded) => {

    //     // verification error -> unauthorized request
    //     if (err) {
    //         console.error(err);
    //         return res.status(401).end();
    //     }

    //     if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {

    //         // decoded in arguments
    //         var decodedArgs = decoded.inArguments[0];

    //         logData(req);

    //Journey Fire event

    // Get Token

    // Create JSON body for Fire event

    //  const https = require('https');

    // https.get('https://mch4s3mv5j6r7tyf5xqf8s0-y2wm.auth.marketingcloudapis.com/v2/token', res => {
    //     let data = [];
    //     const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    //     console.log('Status Code:', res.statusCode);
    //     console.log('Date in Response header:', headerDate);

    //     res.on('data', chunk => {
    //         data.push(chunk);
    //     });

    //     res.on('end', () => {
    //         console.log('Response ended: ');
    //         const users = JSON.parse(Buffer.concat(data).toString());

    //         for (user of users) {
    //             console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    //         }
    //     });
    // }).on('error', err => {
    //     console.log('Error: ', err.message);
    // });

    res.send(200, 'Execute');
    //     } else {
    //         console.error('inArguments invalid.');
    //         return res.status(400).end();
    //     }
    // });
};

/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function (req, res) {

    console.log("5 -- For Publish");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");
    //console.log("Published: "+req.body.inArguments[0]);        

    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    //     logData(req);
    res.send(200, 'Publish');
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function (req, res) {

    console.log("5 -- For Validate");
    console.log("4");
    console.log("3");
    console.log("2");
    console.log("1");

    var request = require('request');

    var myJSONObject2 = {
        "grant_type": "client_credentials",
        "client_id": "ewozgxquu4nriupcx2tylyfl",
        "client_secret": "d3BNHjIK6RAZQi7VgbXVYnWw",
        "account_id": "526000739"
    };
    request({
        url: "https://mch4s3mv5j6r7tyf5xqf8s0-y2wm.auth.marketingcloudapis.com/v2/token",
        method: "POST",
        json: true,   // <--Very important!!!
        body: myJSONObject2
    }, function (error, response, body) {

        statusCode = response.statusCode;
        authToken = JSON.parse(JSON.stringify(response.body))['access_token'];

        if (statusCode === 200) {
            console.log("INIFLOOP");
            // check.call(authToken);
            check(authToken);
        }
    });

    logData(req);
    res.send(200, 'Validate');
};

function check(authtoken) {

    var request2 = require('request');

    var bearerT = 'Bearer ' + authtoken;
    var myJSONObject4 = {
        "definitionKey": "API_Test_1234",
        "recipients":
        [
            {
                "contactKey": "anmol.shrivastava@v2force.com",
                "to": "anmol.shrivastava@v2force.com"
            }
        ]
    };

    request2({
        headers: {
            'Authorization': bearerT,
            'Content-Type': 'application/json'
        },
        url: "https:///mch4s3mv5j6r7tyf5xqf8s0-y2wm.rest.marketingcloudapis.com/messaging/v1/email/messages",
        // url: "https://jsonplaceholder.typicode.com/users?_limit=2",
        method: "POST",
        json: true,   // <--Very important!!!
        body: myJSONObject4
    }, function (error, res, body) {

        var checkcode = res.statusCode;
        var authotokkkene = JSON.stringify(res);
        console.log("ssssssauthTokensssssssss" + authotokkkene);
        console.log("statusCodestatusCoddddestatusCode" + checkcode);
    });
}