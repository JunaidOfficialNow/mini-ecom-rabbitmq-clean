import dotenv from 'dotenv';
import { connectDB } from './config/mongodb';
import { setupApp } from './config/app';
import { rabClient } from './config/rabbitmq';
dotenv.config();


async function bootstrap() {
  await rabClient.initialize();
  await connectDB();
  const app = setupApp();
  app.listen(3002, () => console.log('listening on port 3002'));
}

bootstrap().catch(console.log)