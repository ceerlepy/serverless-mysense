import { config } from "./config";
const AWS = require("aws-sdk");

const ssm = new AWS.SSM();
export const authSecretKeyPromise = ssm
  .getParameter({
    Name: config.authKeyName,
    WithDecryption: true
  })
  .promise();

export const getKey = () => {
  return authSecretKeyPromise.then(key => {
    if (key !== null && key !== undefined) {
      if (key.Parameter !== null && key.Parameter !== undefined) {
        return key.Parameter.Value;
      }
    }
    return null;
  });
};
