const mysql=require('mysql2')
require('dotenv').config()
const db = mysql.createConnection({
    user: "sql6638600",
    // host: "containers-us-west-23.railway.app",
    host:"sql6.freemysqlhosting.net",
    password: (process.env.mysqlPass),
    database: "sql6638600",
    port:3306
  });

module.exports = db