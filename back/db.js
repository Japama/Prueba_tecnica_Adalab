// db.js
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "Juanba",
  password: "Adalab2023",
  database: "adalab"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = con;
 