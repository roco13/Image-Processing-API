import express from 'express';

const logger = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  let url = req.url;
  console.log(`url= ${url} was visited`);
  next();
};

export default logger;
