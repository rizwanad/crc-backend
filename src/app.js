import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/document.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const count = getRandomInt(20);

const params = {
  TableName: "Stats",
  Item: {
      VisitorCountID: `uuid-${new Date().getTime()}`,
      Count: `${count}`,
  },
};

export async function handler() {
  try {
    const data = await ddbDocClient.send(
      new PutCommand(params)
    );
    return {
      "statusCode": 200,
      "body": { count, ...data },
      "isBase64Encoded": false
    };
  } catch(err) {
      console.log(err);
  }
};
