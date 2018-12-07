var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  database: "BlackJackUsers",
  user: "newuser",
  password: "password",
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM Users', function (error, results, fields) {
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
});

connection.end();