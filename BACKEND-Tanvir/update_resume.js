var mysql = require('mysql');

var pool = mysql.createPool({
    host: "icimsproject.c4hdae2hey0k.us-east-1.rds.amazonaws.com",
    user: "",
    password: "",
    database: "nd127"
});

//lambda function
exports.handler = (event, context, callback) => {
    pool.getConnection(function(err, connection) {
        if(err) throw err;
        console.log("Connnected to DB");
        connection.query('SELECT * FROM resume', function(error, results, fields) {
            connection.release();
            if(error) callback(error);
            else callback(null, results);
            console.log(results);
        });
    });
};

pool.getConnection(function(err, connection) {
    if(err) throw err;
    console.log("Connected to DB");
    connection.query('SELECT * FROM resume')
})



console.connect(function(err){
    if(err) throw err;
    
    var sql = "UPDATE resume SET skills = ?, experience = ?, education = ?, activities = ?,  projects = ? WHERE resumeID = ?";
    var query = connection.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result.affectedRows + " record's updated");
    });
});
