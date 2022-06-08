const port = process.env.PORT || 8080;
var express = require('express');
var path = require('path');
var flash = require('express-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sql = require('mysql');

var connection = require('./lib/db');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/index');
var teacherRouter = require('./routes/teachers');
var countRouter = require('./routes/count')
var classRouter = require('./routes/classes')
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


//Session Settings
app.use(cookieParser());
app.use(cookieParser());
app.use(session({
    secret: '%^7893245',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 120000,
    }
}))


app.use(flash());
app.use('/', homeRouter)
app.use('/login', loginRouter);
app.use('/teacher', teacherRouter);
app.use('/count', countRouter);
app.use('/class', classRouter);

app.listen(port, () => console.log(`Listening on to port ${port}..`));

module.exports = app;