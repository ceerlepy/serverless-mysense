import { APIGatewayProxyHandler } from "aws-lambda";
import { BodyObjType } from "../utils/types";
import { saveItem } from "../utils/dynamodbPort";
import { convertToDbObj } from "../utils/util";
import { headers } from "../utils/config";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  let bodyObj: BodyObjType = {
    name: undefined,
    type: undefined,
    duration: undefined,
    price: undefined
  };
  try {
    bodyObj = JSON.parse(event.body);
  } catch (jsonError) {
    console.log("There was an error parsing the body", jsonError);
    return {
      statusCode: 400,
      headers,
      body: "There was an error parsing the body"
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

  let putResults = {};

  try {
    putResults = await saveItem(convertToDbObj(bodyObj));
  } catch (putError) {
    console.log("There was a problem putting the sensor");
    console.log("putError", putError);
    return {
      statusCode: 500,
      headers,
      body: "There was a problem putting the sensor"
    };
  }

  return {
    statusCode: 201,
    headers,
    body: JSON.stringify(putResults)
  };
};
