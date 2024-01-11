import express from 'express';
import logger from '../../utilities/logger';
import resizeImage from '../../utilities/resizeImage';
const images = express.Router();

//create primary endpoint with get request
images.get('/', async (req, res, next) => {
  //res.send('images route');
  let fileName = req.query.name as string;
  let width = Number(req.query.width);
  let height = Number(req.query.height);
  try {
    if (fileName === '' || width === 0 || height === 0) {
      res.send(`Error in the current url, need to provide image name, widht and height<br>
    For example http://localhost:3000/api/images<b>?name=fjord&width=200&height=200</b> `);
      return;
    }
    let outputFile = `${fileName}_${width}_${height}.jpg`;

    await resizeImage(fileName, width, height);
    await res.sendFile(outputFile, { root: 'images/thumb' });
  } catch (err) {
    console.log(err);

    res.send(`Error in the current url, need to provide image name, widht and height<br>
    For example http://localhost:3000/api/images<b>?name=fjord&width=200&height=200</b> `);
  }
});

export default images;
