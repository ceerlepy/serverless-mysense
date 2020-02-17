import { BodyObjType, SensorObjType } from "./types";
const dynamodbManager = require("./dynamodbManager");
const TABLE_NAME = process.env.DYNAMODB_SERSORDATATABLE_TABLE;

export const updateItem = async (item: SensorObjType) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      sensorId: item.sensorId
    },
    ExpressionAttributeNames: {
      "#name": "name",
      "#type": "type",
      "#duration": "duration",
      "#price": "price"
    },
    ExpressionAttributeValues: {
      ":name": item.name,
      ":type": item.type,
      ":duration": item.duration,
      ":price": item.price
    },
    UpdateExpression:
      "SET #name = :name, #type = :type, #duration = :duration, #price = :price",
    ReturnValues: "ALL_NEW"
  };

  return await dynamodbManager.updateItem(params).then(() => item);
};

export const saveItem = async (item: BodyObjType) => {
  const params = {
    TableName: TABLE_NAME,
    Item: item
  };

  return await dynamodbManager.saveItem(params).then(() => item);
};

export const getItem = async (sensorId: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      sensorId
    }
  };

  return await dynamodbManager.getItem(params);
};

export const queryTable = async (sensorId: string) => {
  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: "sensorId = :HsensorId",
    ExpressionAttributeValues: {
      ":HsensorId": sensorId
    }
  };

  return await dynamodbManager.queryTable(params);
};

export const listAll = async () => {
  const params = {
    TableName: TABLE_NAME
  };

  return await dynamodbManager.listAll(params);
};

export const deleteItem = async (sensorId: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      sensorId
    }
  };

  return await dynamodbManager.deleteItem(params);
};
