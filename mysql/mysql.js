const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'lck',
});

pool.query("SELECT * FROM player", (err, results) => {
  for(const r of results) {
    console.log(r);
  }
});