import express from 'express';
const teachers = express.Router();

//create primary endpoint wit get request
teachers.get('/', (req, res) => {
  res.send('Teachers route');
});

export default teachers;