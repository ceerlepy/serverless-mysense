import { APIGatewayProxyHandler } from "aws-lambda";
import { deleteItem, getItem } from "../utils/dynamodbPort";
import { publish } from "../utils/snsPublisher";
import { headers } from "../utils/config";
import { sendToSlack } from "../utils/slackNotification";
import { SensorItemType } from "../utils/types";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
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
    let getResult: SensorItemType = { Item: null };
    getResult = await getItem(event.pathParameters.id);

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

    await deleteItem(event.pathParameters.id);
    const message = `Sensor is deleted. id: ${
      event.pathParameters.id
    }, \n Delete Time : ${new Date()}`;
    publish(message);
    sendToSlack(event.pathParameters.id);
  } catch (deleteError) {
    console.log("There was a problem deleting the sensor");
    console.log("deleteError", deleteError);
    return {
      statusCode: 500,
      headers,
      body: "There was a problem getError the sensor"
    };
  }

  return {
    statusCode: 200,
    headers,
    body: "The sensor is deleted"
  };
};
