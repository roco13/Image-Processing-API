import express from 'express';
//import images from './api/images';
const routes = express.Router();

//create primary endpoint with get request
routes.get('/', (req, res) => {
  res.send('Main api route');
});

//routes.use('/images', images);

export default routes;
