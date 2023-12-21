import express from 'express';
const students = express.Router();

//create primary endpoint wit get request
students.get('/', (req, res) => {
  res.send('Students route');
});

export default students;