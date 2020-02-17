export interface BodyObjType {
  name: string;
  type: string;
  duration: number;
  price: number;
}

export interface SensorObjType extends BodyObjType {
  sensorId: string;
}

export interface SensorItemType {
  Item: SensorObjType;
}

export interface SensorListType {
  Items: Array<SensorObjType>;
}
