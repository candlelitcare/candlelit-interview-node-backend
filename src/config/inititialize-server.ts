import { Application } from 'express';

import Logger from './logger/logger';

const InitializeServer = async (app: Application) => {
  const PORT = 8000;
  const PID = process.pid;
  app.listen(PORT, () => {
    Logger.info(`Running on ${PORT} and pid ${PID}`);
  });
};

export default InitializeServer;
