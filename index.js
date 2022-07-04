import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/document.js";

const params = {
  TableName: "Customer",
  Item: {
      CustomerID: { S: "002" },
      CustomerName: { S: "Richard nickson" },
  },
};

export async function handler(evt) {
  try {
      const data = await ddbDocClient.send(
          new PutCommand(params)
      );
      return data;
  } catch(err) {
      console.log('error');
      console.log(err);
  }
};


handler();