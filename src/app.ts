import cors from 'cors';
import express from 'express';
import errorHandler from '@utils/error/handler';
import Logger from '@config/logger/logger';
import InitializeServer from './config/inititialize-server';
import setupRoutes from './resources';

const server = express();
server.use(errorHandler);
server.use(express.json());
server.use(cors());
setupRoutes(server);

InitializeServer(server).then(async () => {
  Logger.info('Application is up and running');
});
