var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: 'sql.njit.edu',
  port: 3306,
  user: 'ndl25',
  password: 'GsMbmEBdp',
  database: 'ndl25'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error connecting database");
}
});

exports.login = function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query('SELECT * FROM login WHERE username = ?',[username], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results);
      if(results.length >0){
        if(results[0].password == password){
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        }
        else{
          res.send({
            "code":204,
            "success":"Username and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Username does not exits"
            });
      }
    }
    });
  }

