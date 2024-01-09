import express from 'express';

//import logger from '../../utilities/logger'
const images = express.Router();

//create primary endpoint with get request
images.get('/', (req, res) => {
  res.send('images route');
});

export default images;
