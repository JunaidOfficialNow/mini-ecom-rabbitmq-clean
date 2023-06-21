import express, { Router } from "express";
import cors from 'cors';
import logger from 'morgan';
import { configProductRoutes } from "../routes/product.routes";
import { handleGlobalErrors, handleUrlNotFound } from "ecom-common";

export function setupApp() {
  const app  = express();
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  
  const router = Router();
  app.use('/api/v1', router);
  configProductRoutes(router);

  app.use('*', handleUrlNotFound);
  app.use(handleGlobalErrors);
   
  return app;
}