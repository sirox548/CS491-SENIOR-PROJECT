/* master script with all backend functions */

var mysql = require('mysql');

var command;

//connecting to DB
var con = mysql.createConnection({
	host: "sql.njit.edu",
	port: 3306,
	user: "ndl25",
	password: "",
	database: "ndl25"
});

/*con.connect(function(err) {
	if(!err) {
		console.log("Connected!");
	}
	else {
		throw err;
	}
});
*/

if(command.search("insert") == 0) {
	con.connect(function(err) {
	if(!err) {
		console.log("Connected!");
		var sql = "INSERT INTO LOGIN (FirstName, LastName, Username, Password, Email, UserType) VALUES ('Mary', 'Smith', 'msmith', '1234', 'msmith@gmail.com', 'jobseeker')";
		con.query(sql, function(err, result) {
			if(!err) {
				console.log("1 record inserted");
			}
			else {
				throw err;
			}
		});
	}
	});
}

else if(command.search("select") == 0) {
	con.connect(function(err) {
	if(!err) {
		con.query("SELECT * FROM LOGIN", function(err, result, fields) {
			if(err) throw err;
			console.log(result);
		});
	}
	else {
		throw err;
	}
	});
}

else {
	console.log("no proper command given");
}




