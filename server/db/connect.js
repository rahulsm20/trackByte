const mysql=require('mysql2')
require('dotenv').config()
const db = mysql.createConnection({
    user: "root",
    host: "containers-us-west-23.railway.app",
    password: (process.env.mysqlPass),
    database: "playlist",
    port:5776
  });

module.exports = db