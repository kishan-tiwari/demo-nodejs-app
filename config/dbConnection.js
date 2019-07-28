const mongoose = require('mongoose');
require('dotenv').config();

const url = "mongodb://" + 
			process.env.DB_USERNAME + ":" + 
			process.env.DB_PASSWORD + "@" + 
			process.env.DB_HOST + ":" + 
			process.env.DB_PORT + "/" + 
            process.env.DB_DATABASE;
            
const dbConnection = mongoose.connect(url, { useNewUrlParser: true }, (err)=>{
    if(err) throw err;
    else{
        console.log('Database Connected Successfully');
    }
})

module.exports = dbConnection;
