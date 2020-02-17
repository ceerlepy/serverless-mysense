const { convertToDbObj, convertToResultObj } = require("../utils/util");

describe("UTIL TEST", () => {
  test("convertToDbObj return expected item", () => {
    const body = {
      name: "name",
      type: "type",
      duration: 1,
      price: 5
    };

    const result = convertToDbObj(body);

    const item = {
      sensorId: result.sensorId,
      name: body.name,
      type: body.type,
      duration: body.duration,
      price: body.duration
    };

    expect(result).toEqual(item);
  });

  test("convertToResultObj return expected item", () => {
    const sensor = {
      sensorId: "2",
      name: "name",
      type: "type",
      duration: 1,
      price: 5
    };

    const result = convertToResultObj(sensor);

    const item = {
      id: "2",
      name: "name",
      type: "type",
      duration: 1,
      price: 5
    };

    expect(result).toEqual(item);
  });

  test("convertToResultObj return empty item", () => {
    const result = convertToResultObj(undefined);

    expect(result).toEqual({});
  });
});
