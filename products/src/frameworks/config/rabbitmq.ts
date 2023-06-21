import { RabbitMQConfig, Exchanges } from 'ecom-common';
import { Channel } from 'amqplib';

class RabConfig extends RabbitMQConfig {
  RabUrl: string = 'amqp://localhost:5673';
  async configRabbitMq(channel: Channel) {
    if (!channel) {
      throw new Error('channel not created');
    }
    channel.assertExchange(Exchanges.PRODUCTS, 'topic', {durable: true});        
  }
}

const rabClient = new RabConfig();
export { rabClient };