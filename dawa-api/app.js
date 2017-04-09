var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var offers = require('./routes/offers');
var medications = require('./routes/medications');
var db = require('./services/db');

var error_handler = require('./middle_ware/error_handlers');

var app = express();

app.use(cors({origin: '*'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/offers', offers);
app.use('/medications', medications);

db.connect('mongodb://localhost:27017/dawa');

error_handler.register_error_handlers(app);


error_handler.register_not_found(app);

app.options('*', cors());


module.exports = app;
