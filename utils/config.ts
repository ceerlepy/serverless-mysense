export const stage = process.env.stage;

export const stageConfigs = {
  dev: {
    authKeyName: "/authSecretKey/test"
  },
  prod: {
    authKeyName: "/authSecretKey/live"
  }
};

export const config = stageConfigs[stage] || stageConfigs.dev;

//is added for swagger ui- without this swagger ui gives error
export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true
};
