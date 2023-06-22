// Send email to user
/*
// Package called nodemailer
// package require
// nodemailer initializer; transporter
// transporter.sendMail()
*/

const nodemailer = require('nodemailer');

const mailOptions = {
        from: '"Bikki 👻" <myemail@gmail.com>', // sender address
        to: "theirEmail@gmail.com, theieEmail@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'myemail@gmail.com',
        pass: '',
    }
});

// transporter.on()

const mailer = (mailOptions, transporter) => {
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

mailer(mailOptions, transporter);
