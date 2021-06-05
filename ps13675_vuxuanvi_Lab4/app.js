var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var apisRouter = require('./routes/api');
var mongoose = require('mongoose');
var app = express();
require('./models/categoryModels')
require('./models/productsModels')

//connect db
mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('DB Connected!'))
.catch(err => console.log('DB error',err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var hbs = require('hbs');
hbs.registerHelper('soSanh', function(a, b, t){
  return a.toString() == b.toString();
});

hbs.registerHelper('formatDate', function(a, t){
  let date = new Date(a)
  let m = date.getMonth() + 1 
  let d = date.getDate() 
  let year = date.getFullYear()
  let month = m.toString().length == 1? '0' + m : m 
  let day = d.toString().length == 1? '0' + d : d 
  return year + '-' + month + '-' + day
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.JWT_KEY, 
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api', apisRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
