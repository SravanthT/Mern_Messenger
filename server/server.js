const express = require('express');
const path = require('path');
require('dotenv').config();



const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/api/',(req,res)=>{
    res.json("<h1> Welcome to MERN Messenger </h1>");
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`)
});