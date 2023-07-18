import { Application } from 'express';

import coachesRouter from './coaches/CoachesRouter';

const setupRoutes = (app: Application) => {
  app.get('/', (_, res) =>
    res.status(200).json({
      error: false,
      message: 'Application is up and running',
    }),
  );
  app.get('/v1', (_, res) =>
    res.status(200).json({
      error: false,
      message: 'Application is up and running',
    }),
  );
  app.use('/v1/coaches', coachesRouter);
};

export default setupRoutes;
