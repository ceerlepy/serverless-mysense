let { getKey, authSecretKeyPromise } = require("../utils/secretKeyManager");

describe("SECRET KEY MANAGER TEST", () => {
  test("key is undefined", async () => {
    const result = getKey();

    expect(typeof result).toEqual("object");
  });

  test("getKey returns expected result", async () => {
    const key = {
      Parameter: {
        Value: 3
      }
    };

    authSecretKeyPromise = new Promise((resolve, _reject) => {
      return resolve(key);
    });

    const result = getKey();

    expect(typeof result).toEqual("object");
  });
});
