const AWS = require("aws-sdk");
export const SNS = new AWS.SNS();
const TOPIC_ARN = process.env.AWS_SNS_TOPIC;

export const publish = async message => {
  SNS.publish(
    {
      Message: message,
      TopicArn: TOPIC_ARN
    },
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("delete message is published");
      console.log(data);
    }
  );
};
