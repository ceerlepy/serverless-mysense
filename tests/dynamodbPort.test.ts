"use strict";

const dynamodbPort = require("../utils/dynamodbPort");
const mockDatabaseConnector = require("../utils/dynamodbManager");

describe("DB PORT TEST", () => {
  test("save item", async () => {
    const item = {
      name: "name",
      type: "type",
      duration: 1,
      price: 5
    };

    mockDatabaseConnector.saveItem = jest
      .fn()
      .mockReturnValue(Promise.resolve());

    const result = await dynamodbPort.saveItem(item);

    const paramsToValidate = {
      TableName: undefined,
      Item: item
    };

    expect(mockDatabaseConnector.saveItem).toBeCalledWith(paramsToValidate);
    expect(result).toBe(item);
  });

  test("get non existing item", async () => {
    const sensorId = "1";
    mockDatabaseConnector.getItem = jest.fn().mockReturnValue(undefined);

    const result = await dynamodbPort.getItem(sensorId);

    const paramsToValidate = {
      TableName: undefined,
      Key: {
        sensorId
      }
    };

    expect(mockDatabaseConnector.getItem).toBeCalledWith(paramsToValidate);
    expect(result).toBe(undefined);
  });

  test("list item", async () => {
    const listItems = {
      Items: []
    };
    mockDatabaseConnector.listAll = jest.fn().mockReturnValue(listItems);

    const result = await dynamodbPort.listAll();

    const paramsToValidate = {
      TableName: undefined
    };

    expect(mockDatabaseConnector.listAll).toBeCalledWith(paramsToValidate);
    expect(result).toBe(listItems);
  });

  test("get item", async () => {
    const sensorId = "1";
    const singleItem = {
      Item: {}
    };
    mockDatabaseConnector.getItem = jest.fn().mockReturnValue(singleItem);

    const result = await dynamodbPort.getItem(sensorId);

    const paramsToValidate = {
      TableName: undefined,
      Key: {
        sensorId
      }
    };

    expect(mockDatabaseConnector.getItem).toBeCalledWith(paramsToValidate);
    expect(result).toBe(singleItem);
  });

  test("update item", async () => {
    const item = {
      sensorId: "1",
      name: "name",
      type: "type",
      duration: 1,
      price: 4
    };
    mockDatabaseConnector.updateItem = jest
      .fn()
      .mockReturnValue(Promise.resolve());

    const result = await dynamodbPort.updateItem(item);

    const paramsToValidate = {
      TableName: undefined,
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

    expect(mockDatabaseConnector.updateItem).toBeCalledWith(paramsToValidate);
    expect(result).toBe(item);
  });

  test("delete item", async () => {
    const sensorId = "1";

    mockDatabaseConnector.deleteItem = jest
      .fn()
      .mockReturnValue("Sensor is deleted");

    const result = await dynamodbPort.deleteItem(sensorId);

    const paramsToValidate = {
      TableName: undefined,
      Key: {
        sensorId
      }
    };

    expect(mockDatabaseConnector.deleteItem).toBeCalledWith(paramsToValidate);
    expect(result).toBe("Sensor is deleted");
  });
});
