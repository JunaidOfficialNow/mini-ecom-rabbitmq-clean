import { Channel } from 'amqplib';
import { Exchanges, RabbitMQConfig } from 'ecom-common';

export class RabConfig extends RabbitMQConfig {
  RabUrl: string = 'amqp://localhost:5673'
  async configRabbitMq(channel: Channel): Promise<void> {
    if (!channel) throw new Error('No channel connected');
    channel.assertExchange(Exchanges.USERS, 'topic', {durable: true});    
  }
}

const  rabClient = new RabConfig();
export { rabClient };