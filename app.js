var express = require('express');
var scribe = require('scribe-js')(),
    console = process.console;
var router = express.Router();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator =require('express-validator');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var routes = require('./routes/index');
var users = require('./routes/users'); 
var fetchDataFromDB = require('./routes/fetchDataFromDB');//stats route

//schemas
var gynaecology_surgery = require('./routes/forms/gynaecology_surgery');
var addmission_discharge = require('./routes/forms/addmission_discharge');
var cervical_cancer = require('./routes/forms/cervical_cancer');
var endometrial_cancer = require('./routes/forms/endometrial_cancer');
var fallopian_tube_cancer = require('./routes/forms/fallopian_tube_cancer');
var oncology_follow_up = require('./routes/forms/oncology_follow_up');
var critical_incident = require('./routes/forms/critical_incident');
var hysteroscopy = require('./routes/forms/hysteroscopy');
var gtn = require('./routes/forms/gtn');
var ovarian_cancer = require('./routes/forms/ovarian_cancer');
var vulva_cancer = require('./routes/forms/vulva_cancer');
var vaginal_cancer = require('./routes/forms/vaginal_cancer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());

app.use(session({
    cookieName: 'session',
    secret: 'ssshhhhh',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 100
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'html'))); //for html forms
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(path.join(__dirname + '/bower_components')));//for client-side dependencies


app.use('/', routes);
app.use('/users', users);
app.use('/formsave', routes);
app.use('/sendEmail', routes);
app.use('/findSelectedQuery', routes);
app.use('/create', routes);
app.use('/profile', routes);
app.use('/add', routes);
app.use('/fetchDataFromDB', fetchDataFromDB);  //for html rms

//Form Controllers
app.use('/gynaecology_surgery', gynaecology_surgery);
app.use('/addmission_discharge', addmission_discharge);
app.use('/cervical_cancer', cervical_cancer);
app.use('/endometrial_cancer',endometrial_cancer);
app.use('/fallopian_tube_cancer', fallopian_tube_cancer);
app.use('/oncology_follow_up',oncology_follow_up);

app.use('/critical_incident',critical_incident);
app.use('/hysteroscopy', hysteroscopy);
app.use('/gtn', gtn);
app.use('/ovarian_cancer',ovarian_cancer);
app.use('/vulva_cancer', vulva_cancer);
app.use('/vaginal_cancer',vaginal_cancer);

app.use(scribe.express.logger());
app.use('/logs', scribe.webPanel());
app.use('/dataNormalizer', routes);


//Make some logs
console.addLogger('debug', 'yellow');
console.addLogger('fun', 'red');

console.time().fun('hello world');
console.tag('This is a test').debug('A test');
console.tag('An object').log({
    a: 'b',
    c: [1, 2, 3]
});


//This code below, until the next comment, serves for static html forms.
var html_dir = './html/';
app.get('/gynae_surgery', function(req, res) {
    res.sendfile(html_dir + 'gynae_surgery.html');
});

app.get('/addmission_discharge', function(req, res) {
    res.sendfile(html_dir + 'addmission_discharge.html');
});

app.get('/cervical_cancer', function(req, res) {
    res.sendfile(html_dir + 'cervical_cancer.html');
});
app.get('/endometrial_cancer', function(req, res) {
    res.sendfile(html_dir + 'endometrial_cancer.html');
});
app.get('/fallopian_tube_cancer', function(req, res) {
    res.sendfile(html_dir + 'fallopian_tube_cancer.html');
});

app.get('oncology_follow_up', function(req, res) {
    res.sendfile(html_dir + 'oncology_follow_up.html');
});

app.get('/vaginal_cancer', function(req, res) {
    res.sendfile(html_dir + 'vaginal_cancer.html');
});

app.get('/critical_incidence', function(req, res) {
    res.sendfile(html_dir + 'critical_incidence.html');
});

app.get('/GTN', function(req, res) {
    res.sendfile(html_dir + 'GTN.html');
});

app.get('/Hysteroscopy', function(req, res) {
    res.sendfile(html_dir + 'Hysteroscopy.html');
});

app.get('/ovarian_cancer', function(req, res) {
    res.sendfile(html_dir + 'ovarian_cancer.html');
});

app.get('/vulva_cancer', function(req, res) {
    res.sendfile(html_dir + 'vulva_cancer.html');
});

//end of html routing


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
