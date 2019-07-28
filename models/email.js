const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const  emailSchema =  Schema({
    email : {
        type : String,
        required: 'Email address is requied',
        lowercase: true,
        trim: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    emailBody: {
        type: String,
        required: true,
    }
}, {timestamps: true})

module.exports= mongoose.model('emaildetail', emailSchema);