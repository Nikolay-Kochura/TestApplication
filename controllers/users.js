var users = require('../models/users');
var fs = require('fs');
const nodemailer = require('nodemailer');
var mail = require('../mailer');

exports.create = function (req, res) {
    var user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mail: req.body.mail
    };
    users.push(user);
    res.render('pages/register');
    JSON.stringify(user);
// save user to file
    fs.appendFile('./users.txt', `Имя: ${req.body.firstName}    Фамилия: ${req.body.lastName}    E-mail: ${req.body.mail} \n`, 'utf8', (err) => {
        if (err) throw err;
        console.log('Пользователь добавлен');
// send email to user
        exports.feedback = req.body.mail;
        mail.send();

    });
}

exports.show = function (req, res) {
    res.send(users);
}