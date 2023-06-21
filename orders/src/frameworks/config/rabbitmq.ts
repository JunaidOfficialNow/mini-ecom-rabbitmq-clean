import { RabbitMQConfig , Queues, Exchanges, RoutingKeys} from 'ecom-common';
import { Channel } from 'amqplib';

class RabConfig extends RabbitMQConfig {
  RabUrl: string = 'amqp://localhost:5673';
  async configRabbitMq(channel: Channel) {
    if (!channel) throw new Error('No channel connected');
    channel.assertQueue(Queues.USER_CREATED, { durable: true});
    channel.bindQueue(Queues.USER_CREATED, Exchanges.USERS, RoutingKeys.USER_CREATED );
  }
}


const rabClient = new RabConfig();
export { rabClient };