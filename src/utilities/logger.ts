import express from 'express';

const logger = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const url = req.url;
  console.log(`url= ${url} was visited`);
  next();
};

export default logger;
