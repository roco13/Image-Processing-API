import express from 'express';
import routes from './routes/index';
import logger from './utilities/logger';

const app = express();
const port = 3000;

//create middleware
app.use('/api', logger, routes);

//create server
app.listen(port, () => {
  console.log(`server ready at http://localhost:${port}`);
});

export default app;
