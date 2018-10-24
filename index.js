const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bc'
});

// Start of MySQL Connection sample
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
});

connection.end();
// End of MySQL Connection sample
