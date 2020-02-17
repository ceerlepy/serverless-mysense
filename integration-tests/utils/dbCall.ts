"use strict";

const AWS = require("aws-sdk");
AWS.config.region = "eu-west-2";
let dynamodb = new AWS.DynamoDB.DocumentClient();

export const removeDataFromTable = (id: string) => {
  const params = {
    Key: {
      sensorId: id
    },
    TableName: process.env.DYNAMODB_SERSORDATATABLE_TABLE
  };

  return dynamodb.delete(params).promise();
};
