"use strict";

const AWS = require("aws-sdk");
AWS.config.region = "eu-west-2";

export default function init() {
  process.env.DYNAMODB_SERSORDATATABLE_TABLE =
    "MySense-Serverless-Case-SensorDataTable-dev";
  process.env.BASE_URL =
    "https://kyo18xs610.execute-api.eu-west-2.amazonaws.com/dev";
  process.env.AWS_SNS_TOPIC =
    "arn:aws:sns:eu-west-2:631318080448:MySense-Serverless-Case-topic-dev";
}
