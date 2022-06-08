var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Poprost@22",
    database: "stu_dent"
});
connection.connect((err) => {
    if (!err) {
        console.log("Connected to Database Successfully!!!")
    } else {
        console.log("Connection Failed" + JSON.stringify(err, undefined, 2));
    }
});

module.exports = connection;