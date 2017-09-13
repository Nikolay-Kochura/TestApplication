var feedMail = require('./controllers/users');
const nodemailer = require('nodemailer');
exports.send =  function() {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'your@gmail.com', // your mail
            pass: '******'  // your password
        }
    });
    var mailOptions = {
        from: 'Sender', // sender address
        to: feedMail.feedback, // list of receivers
        subject: 'Сообщение из сайта', // Subject line
        text: 'OK', // plain text body
        html: '<b>OK</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}





