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

const mailer = async (mailOptions, transporter) => {
    const info = await transporter.sendMail(mailOptions);
    console.log({info: info.response});
};

mailer(mailOptions, transporter).catch(console.error);
