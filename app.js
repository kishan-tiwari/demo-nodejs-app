const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

//require database configuration file
require('./config/dbConnection');
const router = require('./routes/email')
const port = process.env.APP_PORT;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req,res)=>{
    res.send('App is running');
});

app.use('/user',router )

app.listen(port, (req, res)=>{
    console.log(`App is running on ` + port);
})