function attemptLogin(username, password, callback) {

    connection.query("SELECT * FROM Users WHERE username = '" + username + "'", function (error, results, fields) {

        var loggedIn = false;

        if (error)
            throw error;

        results.forEach(result => {
            console.log(result);
        });

        for (let i = 0; i < results.length; i++) {
            console.log(results[i].userID);
            console.log(results[i].username);
            console.log(results[i].password);
            console.log(results[i].credit);
        }

        //console.log(results[0].password + " = " + password)

        if (password == results[0].password) {
            loggedIn = true;
        } else {
            loggedIn = false;
        }

        console.log("logged in is " + loggedIn);
        return callback(loggedIn);
    });

}

var url = require('url');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    database: "BlackJackUsers",
    user: "newuser",
    password: "password",
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});



var http = require('http');
http.createServer(function (req, res) {

    var parts = url.parse(req.url, true);
    var query = parts.query;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url.startsWith("/login")) {
        res.write("boh");
        if (attemptLogin(query.username, query.password, function (e) {
            if (e) {
                res.write("Logged in!")
            } else {
                res.write("not logged in :(")
            } res.end();
        }));

    }
    else {

        res.write(req.url);
        res.end();
        console.log("nope");
    }

}).listen(8080);