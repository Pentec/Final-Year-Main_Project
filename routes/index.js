var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('countdown', { title: 'Kalafong PIMS: Coming Soon' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'PIMS Login Page' });
});

/* Add New User page */
router.get('/add', function(req, res, next) {
    res.render('add', { title: 'Kalafong PIMS - Add New User' });
});

/*Countdown Page*/
router.get("/dashboard", function(req, res, next){
    res.render('index', { title : 'PIMS Dashboard'});
});


module.exports = router;