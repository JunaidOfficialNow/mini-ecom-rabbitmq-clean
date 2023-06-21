import dotenv from 'dotenv';
import { connectDB } from './config/mongodb';
import { app } from './config/app';
import { rabClient } from './config/rabbitmq';
dotenv.config();


async function bootstrap() {
  if (!process.env.PORT) {
    throw new Error('Port must be specified');
  }

  if (!process.env.RAB_URL) {
    throw new Error('RAB_URL must be specified');
  }
  await rabClient.initialize();
  await connectDB();
  app.listen(process.env.PORT,  () => console.log('Connected to port ' + process.env.PORT));
}


bootstrap().catch(console.log);