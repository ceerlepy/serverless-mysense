"use strict";

import { BodyObjType } from "../../utils/types";

const APP_ROOT = "../../functions";

const callFunc = (event, functionName) => {
  const functionCls = require(`${APP_ROOT}/${functionName}`);
  const context = {};
  return functionCls["handler"](event, context);
};

export const invokeSensorCreate = (item: BodyObjType) => {
  const event = {
    body: JSON.stringify(item)
  };
  return callFunc(event, "sensorCreate");
};

export const invokeSensorGet = (id: string) => {
  const event = {
    pathParameters: {
      id
    }
  };
  return callFunc(event, "sensorGet");
};

export const invokeSensorList = () => {
  const event = {};
  return callFunc(event, "sensorList");
};

export const invokeSensorUpdate = (id: string, item: BodyObjType) => {
  const event = {
    pathParameters: {
      id
    },
    body: JSON.stringify(item)
  };
  return callFunc(event, "sensorUpdate");
};

export const invokeSensorDelete = (id: string) => {
  const event = {
    pathParameters: {
      id
    }
  };
  return callFunc(event, "sensorDelete");
};
