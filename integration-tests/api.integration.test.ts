"use strict";

import init from "./utils/init";
import * as dbCall from "./utils/dbCall";

const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");

describe("API TEST", () => {
  let instance = undefined;
  beforeAll(() => {
    init();
    instance = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 10000,
      headers: { "x-api-key": "toKdg61vmNds81l9dgvFknUzj8asW" }
    });
  });

  describe("invoke sensor create api", () => {
    test("With a data", async () => {
      const body = {
        name: "sensor8",
        type: "type8",
        duration: 4,
        price: 7
      };

      const response = await instance.post("/sensor", body);
      expect(response.status).toBe(201);
      await dbCall.removeDataFromTable(response.data.sensorId);
    });
  });

  describe("invoke sensor get api", () => {
    test("With a sensorId", async () => {
      const response = await instance.get(
        "/sensor/f0b41d25-9627-498c-a60d-dd3f1a8e741e"
      );
      expect(response.status).toBe(200);
      expect(response.data).not.toBeNull();
    });

    test("Without sensorId", async () => {
      const response = await instance.get(
        "/sensor/f0b41d25-9627-498c-a60d-dd3f1a8e741e"
      );
      expect(response.status).toBe(200);
    });
  });

  describe("invoke sensor list api", () => {
    test("data exists", async () => {
      const response = await instance.get("/sensor");
      expect(response.status).toBe(200);
    });
  });

  describe("invoke sensor update api", () => {
    test("With a data", async () => {
      const body = {
        name: "sensor3",
        type: "type4",
        duration: 4,
        price: 7
      };

      const response = await instance.put(
        "/sensor/f0b41d25-9627-498c-a60d-dd3f1a8e741e",
        body
      );
      expect(response.status).toBe(200);
    });
  });

  describe("invoke sensor delete api", () => {
    test("With a sensorId", async () => {
      const response = await instance.delete(
        "/sensor/94db1425-9ebf-4c0d-b11e-23adfb678a44"
      );
      expect(response.status).toBe(200);
    });
  });
});
