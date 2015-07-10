var express = require('express');
var router = express.Router();

/* GET splash page. */
router.get('/', function(req, res, next) {
  res.render('splash', { title: 'Kalafong PIMS' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Kalafong PIMS' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'PIMS Login Page' });
});

/* Add New User page */
router.get('/add', function(req, res, next) {
    res.render('add', { title: 'Kalafong PIMS - Add New User' });
});

/* GET login page. */
router.get('/form', function(req, res, next) {
    res.render('formBuild', { title: 'Form Builder' });
	
});
module.exports = router;