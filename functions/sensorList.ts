import { APIGatewayProxyHandler } from "aws-lambda";
import { SensorListType } from "../utils/types";
import { listAll } from "../utils/dynamodbPort";
import { convertToResultObj } from "../utils/util";
import { headers } from "../utils/config";

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  let scanResults: SensorListType = { Items: [] };

  try {
    scanResults = await listAll();
  } catch (scanError) {
    console.log("There was a problem scanning the sensor");
    console.log("scanError", scanError);
    return {
      statusCode: 500,
      headers,
      body: "There was a problem scanning the sensor"
    };
  }

  if (
    scanResults === null ||
    !Array.isArray(scanResults.Items) ||
    scanResults.Items.length === 0
  ) {
    return {
      statusCode: 404,
      headers,
      body: "Not found any sensor"
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(
      scanResults.Items.map(sensor => {
        return convertToResultObj(sensor);
      })
    )
  };
};
