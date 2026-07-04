const mysql = require("mysql2");

const myDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gowthaman@28",
  database: "green_harvest",
});

myDB.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
    console.log(err);
  } else {
    console.log("MySQL Connected Successfully");
  }
});

module.exports = myDB;