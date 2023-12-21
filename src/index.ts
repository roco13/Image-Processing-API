import express from "express";
const app = express();
const port = 3000;

//create endpoint
app.get('/api',(req,res) => {
    res.send("hello world")
})

//create server
app.listen(port, () => {
    console.log(`server ready at localhost:${port}`)
})

