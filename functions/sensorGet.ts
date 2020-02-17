import { APIGatewayProxyHandler } from "aws-lambda";
import { getItem } from "../utils/dynamodbPort";
import { convertToResultObj } from "../utils/util";
import { SensorItemType } from "../utils/types";
import { headers } from "../utils/config";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  let getResult: SensorItemType = { Item: null };

  if (
    event.pathParameters.id === undefined ||
    event.pathParameters.id === null
  ) {
    console.log("Missing query param");
    return {
      statusCode: 400,
      headers,
      body: "Missing query param"
    };
  }

  try {
    getResult = await getItem(event.pathParameters.id);
  } catch (getError) {
    console.log("There was a problem getting the sensor");
    console.log("getError", getError);
    return {
      statusCode: 500,
      headers,
      body: "There was a problem getError the sensor"
    };
  }

  if (
    getResult === null ||
    getResult.Item === null ||
    getResult.Item === undefined
  ) {
    return {
      statusCode: 404,
      headers,
      body: "Not found"
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(convertToResultObj(getResult.Item))
  };
};
