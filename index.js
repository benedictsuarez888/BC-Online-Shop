const express = require('express');
const app = express();
const morgan = require(morgan);
const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bc'
});
const port = 8000;

app.use(morgan('dev'));

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});
