var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Comment = mongoose.model('forms');

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
 
 //This is code to save something into our database
 /* 
 router.post('/', function(req, res) {
  new Form({ data : obj })
  .save(function(err, obj) {
   // console.log(obj + "My obj")
    res.redirect('form');
  });
});

 //This is code to retrieve something from our database
router.get('/', function(req, res) {
  Form.find(function(err, form){
    console.log(form)
    res.render(
      'form',
      {title : 'My funky form', comments : comments} //if you wan it to show on a page
    );
  });
});

*/

	
});
module.exports = router;
