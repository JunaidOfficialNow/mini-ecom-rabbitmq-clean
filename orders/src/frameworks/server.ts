import dotenv from 'dotenv';
import { rabClient } from './config/rabbitmq';
import { connectDB } from './config/mongodb';
import { setupApp } from './config/app';
import { UserCreatedConsumer } from './rabbitmq/listener/userCreated.listener';
import { makeUserCreatedListener } from './factory/listeners/userCreated.listener';
dotenv.config();


async function bootstrap() {
  await rabClient.initialize();
  await connectDB();
  const app = setupApp();
  app.listen(3001, () => {
    makeUserCreatedListener().consume();
    console.log('server listening on port 3001')
  });
}


bootstrap();