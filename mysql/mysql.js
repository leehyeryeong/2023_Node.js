const mysql = require('mysql2');
const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '.env')
});

//mysql 시스템 정보
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
});

pool.query("SELECT * FROM player")
  .then(([results]) => {
    for(const r of results) {
      console.log(r);
    }
  });

// pool.query("SELECT * FROM player", (err, results) => {
//   for(const r of results) {
//     console.log(r);
//   }
// });