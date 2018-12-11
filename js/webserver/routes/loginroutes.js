// file that handles the calls to the database and the answers to the website

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'newuser',
  password : 'password',
  database : 'BlackJackUsers'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... ");
} else {
    console.log("Error connecting database ... ");
}
});

// creates new user 
exports.register = function(req,res){
    var users = {
      "username":req.body.username,
      "password":req.body.password,
      "credit":50,
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } else {
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
  }

  // refills the user credit
  exports.refill = function(req,res){
    var credit = req.body.credit;
    var username = req.body.username;
    console.log(credit);

    connection.query("UPDATE users SET credit = ? WHERE username = '" + username + "'",[credit], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred",
      })
    } else {
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"credit succesfully refilled",
        "credit": credit
          });
    }
    });
  }

  // updates the user credit in the database
  exports.updateCredit = function(req,res){
    var credit = req.body.credit;
    var username = req.body.username;
    console.log(credit);

    connection.query("UPDATE users SET credit = ? WHERE username = '" + username + "'",[credit], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred",
      })
    } else {
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"credit succesfully updated",
        "credit": credit
          });
    }
    });
  }
  
  // check if the user input is correct and logs in
  exports.login = function(req,res){
    var username= req.body.username;
    console.log("username is : '" + username + "'");
    var password = req.body.password;

    connection.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } else {
      if(results.length >0){
        if(results[0].password == password){
          var credit = (results[0].credit);
          console.log("credit is " + credit);
          res.send({
            "code":200,
            "credit": credit,
            "success":"login sucessful"
              });
        }
        else {
          res.send({
            "code":204,
            "success":"Username and password do not match"
              });
        }
      }
      else {
        res.send({
          "code":204,
          "success":"Username does not exist"
            });
      }
    }
    });
  }