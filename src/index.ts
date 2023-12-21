import express from 'express';
import routes from './routes/index';
import students from './routes/api/students';
import teachers from './routes/api/teachers';

const app = express();
const port = 3000;

//create middleware
app.use('/', routes);
app.use('/students', students);
app.use('/teachers', teachers);



//create server
app.listen(port, () => {
  console.log(`server ready at http://localhost:${port}`);
});
