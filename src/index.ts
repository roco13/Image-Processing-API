import express from 'express';
import logger from './utilities/logger';
import resizeImage from './utilities/resizeImage';
//import routes from './routes/index';

const app = express();
const port = 3000;

//create middleware
//app.use('/api', logger, routes);

// Without middleware
app.get('/api/images', logger, async (req, res, next) => {
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

//create server
app.listen(port, () => {
  console.log(`server ready at http://localhost:${port}`);
});

export default app;
