import { APIGatewayProxyHandler } from "aws-lambda";
import { BodyObjType } from "../utils/types";
import { updateItem } from "../utils/dynamodbPort";
import { headers } from "../utils/config";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  let bodyObj: BodyObjType = {
    name: undefined,
    type: undefined,
    duration: undefined,
    price: undefined
  };

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
    bodyObj = JSON.parse(event.body);
  } catch (jsonError) {
    console.log("There was an error parsing the body", jsonError);
    return {
      statusCode: 400,
      headers,
      body: 'There was an error parsing the body"'
    };
  }

  if (
    typeof bodyObj.name === "undefined" ||
    typeof bodyObj.type === "undefined" ||
    typeof bodyObj.duration === "undefined" ||
    typeof bodyObj.price === "undefined"
  ) {
    console.log("Missing parameters");
    return {
      statusCode: 400,
      headers,
      body: "Missing parameters"
    };
  }

  let item = {
    sensorId: event.pathParameters.id,
    ...bodyObj
  };

  try {
    item = await updateItem(item);
  } catch (updateError) {
    console.log("There was an error updating the sensor");
    console.log("updateError", updateError);
    return {
      statusCode: 500,
      headers,
      body: "There was an error updating the sensor"
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(item)
  };
};
