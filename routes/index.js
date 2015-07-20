var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Schema   = mongoose.Schema;
mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');


var Form = new Schema({
    form_name			: String,
    data			: String,
    is_deleted			: Boolean
});

var Users = new Schema({
    username				: String,
    surname				: String,
    email				: String,
    profile_pic				: String,
    user_rights				: Number,
    password				: String,
    department				: String,
    staff_type				: String
});

mongoose.model('users', Users);
mongoose.model('forms', Form);
var Form = mongoose.model('forms');
var User = mongoose.model('users');
var login = require('pims-login');



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

/* Settings page */
router.get('/editProfile', function(req, res, next) {
    res.render('editProfile', { title: 'Kalafong PIMS - Edit Profile' });
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
 
});

router.post('/formsave', function(req, res) {
    var object = JSON.stringify(req.body);
    console.log(object);

    new Form({form_name : "new form",data : object ,is_deleted : false})
        .save(function(err, forms) {
            console.log("New form added");
            res.redirect('formBuild');

        });

});

/*View Stats */
router.get('/stats', function(req, res, next) {
    res.render('stats', { title: 'viewStats' });
});

/******************************* STATS NAV**********************************************/
router.get('/pro', function(req, res, next) {
    res.render('pro', { title: 'viewProcedure' });
});

/*View patient stats */
router.get('/pat', function(req, res, next) {
    res.render('pat', { title: 'viewPatient' });
});

/*View patient stats */
router.get('/res', function(req, res, next) {
    res.render('res', { title: 'viewResources' });
});

/*View patient stats */
router.get('/doc', function(req, res, next) {
    res.render('doc', { title: 'viewDoctor' });
});

/*View patient stats */
router.get('/pred', function(req, res, next) {
    res.render('pred', { title: 'Predictions' });
});

/*View patient stats */
router.get('/forms', function(req, res, next) {
    res.render('forms', { title: 'FormSelect' });
});


module.exports = router;
