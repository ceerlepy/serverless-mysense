const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

export const updateItem = async params => {
  return await dynamodb
    .update(params)
    .promise()
    .catch(err => {
      console.log(err);
    });
};

export const saveItem = async params => {
  return await dynamodb
    .put(params)
    .promise()
    .catch(err => {
      console.log(err);
    });
};

export const getItem = async params => {
  return await dynamodb
    .get(params)
    .promise()
    .catch(err => {
      console.log(err);
    });
};

export const queryTable = async params => {
  return await dynamodb
    .query(params)
    .promise()
    .then(result => {
      return result.items;
    });
};

export const listAll = async params => {
  return await dynamodb
    .scan(params)
    .promise()
    .catch(err => {
      console.log(err);
    });
};

export const deleteItem = async params => {
  return await dynamodb
    .delete(params)
    .promise()
    .catch(err => {
      console.log(err);
    });
};
