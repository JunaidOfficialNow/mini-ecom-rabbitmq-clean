import { ConsumeMessage } from "amqplib";
import { RabConsumer } from "ecom-common";

export class ProductCreatedListener extends RabConsumer {
  protected queueName: string;
  onMessage(data: any, msg: ConsumeMessage): Promise<void> {
    throw new Error("Method not implemented.");
  }

}