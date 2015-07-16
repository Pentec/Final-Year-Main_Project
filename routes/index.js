var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('users');

/* GET splash page. */
router.get('/', function(req, res, next) {
  res.render('splash', { title: 'Kalafong PIMS' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Kalafong PIMS' });
});

/*******************************LOGIN BELOW**********************************************/

/* GET login page */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'PIMS Login Page' });
});

 /*POST login page.*/
router.post('/login', function(req, res, next) {
    var username = req.body.userid;
    var password = req.body.pswd;
    console.log("Hello \n" + req.body.userid);
    console.log("Hello Again \n" + req.body.pswd);

    login.authenticate(username, password, function(found) {
        console.log('Finished calling authenticate. \n' + found);
         if(found)
         {
             console.log("its true");
             res.redirect('home');
         }
         else
         {
             console.log("its false");
             res.redirect('login');
         }
    });

});
/*******************************LOGIN ABOVE**********************************************/

/* Add New User page */
router.get('/add', function(req, res, next) {
    res.render('add', { title: 'Kalafong PIMS - Add New User' });
});


/* Add New User to database */
router.post('/create', function(req, res) {
  new User({username : req.body.username,surname : req.body.surname,email : req.body.email,user_rights : req.body.user_rights,password : req.body.password,department : req.body.department,staff_type : req.body.staff_type })
  .save(function(err, users) {
  console.log("New user added");
    res.redirect('add');
	
  });
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
