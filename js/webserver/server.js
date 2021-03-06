// The server file with tha main routes

var express    = require("express");
var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var api = express.Router();
var game = express.Router();

api.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

api.get('/register', function(req, res) {
    res.sendFile('./register.html', {root: __dirname });
});

api.get('/refill', function(req, res) {
    res.sendFile('./refill.html', {root: __dirname });
});

game.get('/', function(req, res) {
    res.sendFile('./index.html', {root: __dirname });
});


game.get('/blackjack', function(req, res) {
    res.sendFile('./game.html', {root: __dirname });
});

// making the js, pictures, css folders static so that they can be accessed everywhere
app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/pictures', express.static('pictures'));

// main routes
api.post('/register',login.register);
api.post('/login',login.login);
api.post('/refill', login.refill);
api.post('/updateCredit', login.updateCredit);
app.use('/api', api);
app.use('/', game);
app.listen(5000);
