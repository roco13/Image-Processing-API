import express from 'express';
import sharp from 'sharp';
import path from 'path';
//import resizeImage from './resizeImage';

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
