import express, { Router } from "express";
import cors from 'cors';
import logger from 'morgan';

export function setupApp() {
  const app = express();
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  const router = Router();
  app.use('/api/v1', router);
  return app;

}