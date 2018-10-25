const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const config = require('./config');
const dbOptions = {
  host:       config.database.host,
  user:       config.database.user,
  password:   config.database.password,
  port:       config.database.port, 
  database:   config.database.db
}
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./server/routes/indexRouter');
const productsRouter = require('./server/routes/productsRouter');
const port = 8000;

app.use(myConnection(mysql, dbOptions, 'pool'));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.use((req, res, next) => {
  req.viewModel = {
    title: 'BC Online Shop'
  };
  next();
});

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/api/products', productsRouter);

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});
