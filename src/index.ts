import express from 'express';
import logger from './utilities/logger';
import routes from './routes/index';

const app = express();
const port = 3000;

//create middleware
app.use('/api', logger, routes);

//create server
app.listen(port, () => {
  console.log(`server ready at http://localhost:${port}`);
});

export default app;
