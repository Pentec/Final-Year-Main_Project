var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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


module.exports = router;