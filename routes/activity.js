'use strict';
var util = require('util');

// Deps
const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var http = require('https');

var authorizationtoken;
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

    // if (!authtoken && expireTime < currentTime) {
    //     check2;
    // }

    const requestBody = req.body.inArguments[0];

    const SubscriberKey = requestBody.SubscriberKey;
    const EmailAddress = requestBody.EmailAddress;
    const eventDefinationKey = requestBody.body;

    console.log("SubscriberKey: " + SubscriberKey);
    console.log("EmailAddress: " + EmailAddress);
    console.log("Executedbody: " + eventDefinationKey);


    var request = require('request');
    var accessTokenGetBody= {
        "grant_type": "client_credentials",
        "client_id": "ewozgxquu4nriupcx2tylyfl",
        "client_secret": "d3BNHjIK6RAZQi7VgbXVYnWw",
        "account_id": "526000739"
    };
    request({
        url: "https://mch4s3mv5j6r7tyf5xqf8s0-y2wm.auth.marketingcloudapis.com/v2/token",
        method: "POST",
        json: true,   // <--Very important!!!
        body: accessTokenGetBody
    }, function (error, response, body) {

        statusCode = response.statusCode;
       
        if (statusCode === 200) {

            var authorizationtoken = JSON.parse(JSON.stringify(response.body))['access_token'];
            journeyTrigger(authorizationtoken, eventDefinationKey);
        }
    });

    function journeyTrigger(authorizationtoken, eventDefinationKey) {

        var request2 = require('request');
        var bearerT = 'Bearer ' + authorizationtoken;
       // console.log("check" + bearerT);

        var eventKey = eventDefinationKey;
       // console.log('eventKeyeventKey' + eventKey);

        var journeyBody = {
            "definitionKey": eventKey,
            "recipients":
                [
                    {
                        "contactKey": SubscriberKey,
                        "to": EmailAddress
                    }
                ]
        };

        request2({
            headers: {
                'Authorization': bearerT,
                'Content-Type': 'application/json'
            },
            url: "https://mch4s3mv5j6r7tyf5xqf8s0-y2wm.rest.marketingcloudapis.com/messaging/v1/email/messages",
            method: "POST",
            json: true,   // <--Very important!!!
            body: journeyBody
        }, function (error, res, body) {

            // var check2323 = JSON.stringify(res);
            // console.log("fslhgkushgshi" + check2323);
        });
    };

    res.send(200, 'Execute');
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

    // var date_time = new Date();
    // console.log("date_time"+date_time);
    logData(req);
    res.send(200, 'Validate');
};