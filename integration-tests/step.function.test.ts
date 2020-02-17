"use strict";

import init from "./utils/init";
import * as funcCall from "./utils/funcCall";
import * as dbCall from "./utils/dbCall";
import { BodyObjType } from "../utils/types";

describe("invoke sensor create function", () => {
  beforeAll(() => {
    init();
  });

  test("create sensor item", async () => {
    const item: BodyObjType = {
      name: "name7",
      type: "type7",
      duration: 7,
      price: 7
    };

    var result = await funcCall.invokeSensorCreate(item);
    expect(result.statusCode).toBe(201);
    try {
      const bodyObj = JSON.parse(result.body);
      await dbCall.removeDataFromTable(bodyObj.sensorId);
    } catch (jsonError) {
      console.log("There was an error parsing the body", jsonError);
    }
  });
});

describe("Call sensor get", () => {
  test("list item", async () => {
    var result = await funcCall.invokeSensorGet(
      "ee96af75-10f3-4678-8e95-22824d95b7b4"
    );
    expect(result.statusCode).toBe(404);
  });
});

describe("Call sensor list", () => {
  test("list all items", async () => {
    var result = await funcCall.invokeSensorList();
    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBeGreaterThan(0);
  });
});

describe("Call sensor update", () => {
  test("update sensor", async () => {
    const item: BodyObjType = {
      name: "name5",
      type: "type5",
      duration: 24,
      price: 72
    };

    var result = await funcCall.invokeSensorUpdate(
      "3375acab-43db-40cb-ad07-835ed8ee317b",
      item
    );
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(
      '{"sensorId":"3375acab-43db-40cb-ad07-835ed8ee317b","name":"name5","type":"type5","duration":24,"price":72}'
    );
  });
});

describe("Call sensor delete", () => {
  beforeAll(() => {
    init();
  });

  test("delete sensor", async () => {
    var result = await funcCall.invokeSensorDelete(
      "3375acab-43db-40cb-ad07-835ed8ee317b"
    );
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe("The sensor is deleted");
  });
});
