import { Channel, ConsumeMessage } from "amqplib";
import { RabConsumer, Queues } from "ecom-common";
import { IUserCreateListenerMessenger } from "../../../application/interfaces/messages/listener/userCreated.listener";

export class UserCreatedConsumer extends RabConsumer {
  constructor(channel: Channel, private listener: IUserCreateListenerMessenger) {
    super(channel);
  }
  protected queueName: string = Queues.USER_CREATED
  async onMessage(data: any, msg: ConsumeMessage): Promise<void> {
    await this.listener.execute(data);
    this.channel.ack(msg);
  }
}