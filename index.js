import { faker } from '@faker-js/faker';
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/document.js";

const params = {
  TableName: "Customer",
  Item: {
      VisitorCountID: { S: faker.datatype.uuid() },
      Count: { S: faker.datatype.number({ min: 5, max: 15 }) },
  },
};

export async function handler() {
  try {
      const data = await ddbDocClient.send(
        new PutCommand(params)
      );
      return data;
  } catch(err) {
      console.log(err);
  }
};
