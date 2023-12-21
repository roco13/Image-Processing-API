import express from 'express';
const routes = express.Router();

//create primary endpoint wit get request
routes.get('/api', (req, res) => {
  res.send('Main api route');
});

export default routes;
