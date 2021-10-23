const express = require('express');
const app = express()

app.get('/helloWorld',(req,res)=>{

    res.send("Hello World from node server !!!");
});

app.listen(3031);