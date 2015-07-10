var express = require('express');
var router = express.Router();


/*var browserify = require('browserify');
//var formModule  = require('./pimsForm.js');*/
var formModule  = require('pimsForm');
//var b = browserify();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kalafong PIMS' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Kalafong PIMS Login Page' });

    //formModule.getJSON();
});

/* Add New User page */
router.get('/add', function(req, res, next) {
    res.render('add', { title: 'Kalafong PIMS - Add New User' });
});


/* GET form page. */
router.get('/form', function(req, res, next) {
    var cool = req;
    console.log("IN index \n ");
    console.log(cool);
    res.render('formBuild', { title: 'Form Builder'});


});




module.exports = router;