import {
  BodyObjType,
  SensorObjType,
  SensorItemType,
  SensorListType
} from "../types";

export const updateItem = async (item: SensorObjType) => {
  return Promise.resolve(item);
};

export const saveItem = async (item: BodyObjType) => {
  return Promise.resolve(item);
};

export const getItem = async (sensorId: string) => {
  const item = {
    sensorId: sensorId,
    name: "Name",
    type: "Type",
    duration: 1,
    price: 1
  };

  let getResult: SensorItemType = { Item: item };

  return Promise.resolve(getResult);
};

export const queryTable = async (sensorId: string) => {
  const item = {
    sensorId: sensorId,
    name: "Name",
    type: "Type",
    duration: 1,
    price: 1
  };

  let getResult: SensorItemType = { Item: item };

  return Promise.resolve(getResult);
};

export const listAll = async () => {
  const item = {
    sensorId: "sensorId",
    name: "Name",
    type: "Type",
    duration: 1,
    price: 1
  };

  let scanResults: SensorListType = {
    Items: [item]
  };

  return Promise.resolve(scanResults);
};

export const deleteItem = async (sensorId: string) => {
  return Promise.resolve(sensorId);
};
