const uuid = require("uuid");
import { BodyObjType, SensorObjType } from "../utils/types";

export const convertToDbObj = (bodyObj: BodyObjType) => {
  return {
    sensorId: uuid.v4(),
    name: bodyObj.name,
    type: bodyObj.type,
    duration: bodyObj.duration,
    price: bodyObj.duration
  };
};

export const convertToResultObj = (sensor: SensorObjType) => {
  if (sensor === undefined) {
    return {};
  }

  return {
    id: sensor.sensorId,
    name: sensor.name,
    type: sensor.type,
    duration: sensor.duration,
    price: sensor.price
  };
};
