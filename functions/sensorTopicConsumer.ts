import { SNSHandler } from "aws-lambda";

export const handler: SNSHandler = async (event, _context) => {
  try {
    const topic = event.Records[0].Sns.TopicArn;
    const message = event.Records[0].Sns.Message;

    console.log(topic + " " + message);
  } catch (error) {
    console.log(error);
  }
};
