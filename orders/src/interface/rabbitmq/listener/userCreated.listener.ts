import { ConsumeMessage } from "amqplib";
import { RabConsumer, Queues } from "ecom-common";

export class UserCreatedConsumer extends RabConsumer {
  protected queueName: string = Queues.USER_CREATED
  async onMessage(data: any, msg: ConsumeMessage): Promise<void> {
    console.log(data);
    this.channel.ack(msg);
    
  }
  
}