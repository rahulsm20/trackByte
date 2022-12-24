const mysql=require('mysql2')
require('dotenv').config()
const db = mysql.createConnection({
    user: "root",
    host: "containers-us-west-146.railway.app",
    password: (process.env.mysqlPass),
    database: "playlist",
    port:5969
  });

module.exports = db