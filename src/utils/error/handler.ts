import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: unknown, _: Request, res: Response, _next: NextFunction) => {
  const theError = err as Error;
  res.status(500).json({
    error: theError,
    message: `Something broke! ${theError.message}`,
  });
};

export default errorHandler;
