const { SNS, publish } = require("../utils/snsPublisher");

describe("SNS PUBLISHER TEST", () => {
  test("sns is not published", async () => {
    SNS.publish = jest.fn();
    await publish("Hello");

    expect(SNS.publish).toBeCalledTimes(1);
  });
});
