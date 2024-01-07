import express from 'express';
import sharp from 'sharp';
import path from 'path';

const logger = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  let url = req.url;
  let imageName = req.query.name as string;
  let width = parseInt(req.query.width as string);
  let height = parseInt(req.query.height as string);
  let imgPath = 'images/' + imageName + '.jpg';
  let newImagPath = 'images/thumb/' + imageName + '_' + width + '_' + width + '.jpg';

  const options = {
    root: path.resolve('images/thumb')
  };

  const resize = await sharp(imgPath)
    .resize(width, height)
    .toFile(newImagPath)
    // .then(() => {
    //   console.log('options', options);
    //   // Sending the image
    //   res.sendFile(`${imageName}_${width}_${height}.jpg`, options);
    // });
  
  console.log('options', options)
  await res.sendFile(`${imageName}_${width}_${height}.jpg`, options);
  console.log(
    `url= ${url} was visited, new image ${imageName}_${width}_${height}.jpg`
  );
  next();
};

export default logger;
