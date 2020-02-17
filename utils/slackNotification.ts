"use strict";

var http = require("https");

export const sendToSlack = async id => {
  var timestamp = new Date().getTime() / 1000;

  var message = JSON.stringify({
    channel: "#" + process.env.SLACK_CHANNEL,
    username: "Veysel",
    response_type: "in_channel",
    attachments: [
      {
        color: "#ff0000",
        text: `sensor with ${id} is deleted from ${process.env.DYNAMODB_SERSORDATATABLE_TABLE} table`,
        ts: timestamp
      }
    ]
  });

  var options = {
    host: "hooks.slack.com",
    port: "443",
    path: process.env.SLACK_PATH,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(message)
    }
  };

  var req = http.request(options, function(res) {
    res.setEncoding("utf8");
  });

  req.write(message);
  req.end();
};
