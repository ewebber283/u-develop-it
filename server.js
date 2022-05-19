const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '#Wrestling126',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

/*db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
}); */

db.query(`SELECT * FROM candidates WHERE id=1`, (err, rows) => {
  if(err) {
    console.log(err)
  }
  console.log(rows)
});

/*db.query(`DELETE FROM candidates WHERE id=?`, 1, (err, rows) => {
  if(err) {
    console.log(err)
  }
  console.log(rows)
}); */

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
//create 
const sql = `INSERT INTO candidates(id, first_name, last_name, industry_connected)
  values(?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1]

db.query(sql, params, (err, result) => {
  if(err) {
    console.log(err)
  }
  console.log(result)
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});