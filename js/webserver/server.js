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
// test route will trigger on /api
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
    //res.append('./login.js', {root: __dirname });
});


game.get('/blackjack', function(req, res) {
    res.sendFile('./game.html', {root: __dirname });
    //res.render('./game.html', {root: __dirname }, {username:username, credit:credit});
    //res.append('./login.js', {root: __dirname });
});

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

//route to handle user registration
api.post('/register',login.register);
api.post('/login',login.login);
api.post('/refill', login.refill);
app.use('/api', api);
app.use('/', game);
app.listen(5000);
