"use strict";

const config = require("../utils/config");

describe("CONFIG TEST", () => {
  test("config stage undefined", async () => {
    expect(config.config).toStrictEqual({
      authKeyName: "/authSecretKey/test"
    });
  });
});
