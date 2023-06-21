import { Channel } from "amqplib";
import { IUserCreatedPublishMessenger } from "../../../../application/interfaces/messaging/userCreated.interface";
import { UserCreatedPublisher } from "../../../gateway/rabbitmq/userCreted.publisher";

export class UserCreatedPublishMessenger implements IUserCreatedPublishMessenger {
  constructor(private channel:  Channel) {}
  async publish(userData: any): Promise<void> {
    new UserCreatedPublisher(this.channel).publish(userData); 
  }
}