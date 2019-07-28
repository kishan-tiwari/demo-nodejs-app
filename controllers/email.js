const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const email = require('../models/email');


//User email details
let  sentEmail = (req, res)=>{
    const userdetails = new email ({
        email : req.body.email,
        emailBody: req.body.emailBody
    });
    userdetails.save((err, data)=>{
        if(err) throw err;
        else{
            res.send(data);
        }        
    });
};

//Get details of user by email
let getDetails = (req, res)=>{
    email.find({"email": req.body.email}, (err, data)=>{
        if(err) throw err;
        else{
            res.send(data);
        }
    })
};

//Send email to the user

let emailSend  = (req, res)=>{
    let transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 587,
        auth :{
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASS

        }
    });

    let info = transporter.sendMail({
        from: "kishan@eleve.co.in",
        to: req.body.email,
        subject: "This is the Test Email",
        html: req.body.emailBody
    })
    res.json({
        Success : "Deliver successfully"
    })
}

module.exports = {
    sentEmail: sentEmail,
    getDetails: getDetails,
    emailSend: emailSend
}