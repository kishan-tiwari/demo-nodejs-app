const express = require('express');
const emailbody = require('../controllers/email');

const router = express.Router();

router.post('/email', emailbody.sentEmail);
router.post('/get', emailbody.getDetails);
router.post('/sent', emailbody.emailSend);

module.exports= router;