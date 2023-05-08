const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();


dotenv.config({path: './config.env'});
require('./db/conn');

app.use(express.json());
const User = require('./model/userScema');
app.use(require('./router/ruth'));

const PORT = process.env.PORT;


app.listen(PORT,()=>{
    console.log(`server is runing at port ${PORT}`);
})
