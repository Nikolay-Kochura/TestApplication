var express = require('express');
var bodyParser = require('body-parser');
var usersController = require('./controllers/users');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/users', usersController.show);

app.get('/register', function (req, res) {
    res.render('pages/register');
});

app.post('/register', usersController.create);





app.listen(3012, function () {
    console.log('App started!');
})