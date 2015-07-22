var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('users');
var Form = mongoose.model('forms');
var Patient = mongoose.model('patients');
var login = require('pims-login');
var notification = require('pims-notification');

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



/*******************************FIND PATIENT BELOW**********************************************/
/* GET patient page */
router.get('/findPatient', function(req, res, next) {
    var sendEmail = {found: "hello"};
    res.render('findPatient', {
        title: 'PIMS Notification Page',
        message: '',
        errors: {},
        send: sendEmail
    });

    /*new Patient({patient_name : "sue",patient_surname : "heck" ,contact_number : 0123456789,
        email_address : "pentecpims@gmail.com",physical_address : "585 Venter Street"})
        .save(function(err, forms) {
            console.log("New patient");

        });*/
});

/*POST patient page.*/
router.post('/sendNotification', function(req, res, next) {
    var patientid = req.body.patientid;
    console.log(patientid);

    /*req.assert('patientid', 'Search is required').notEmpty();

    var errors = req.validationError();*/



    notification.findPatient(patientid, function(found) {
        if(found != "")
        {
            var sendEmail = {found: found, patient: patientid};
            //res.render('sendNotification', {title: 'PIMS Notification Page', send: sendEmail});
            res.render('sendNotification', {
                title: 'PIMS Notification Page',
                message: '',
                errors: {},
                send: sendEmail
            });
        }
        else
        {
            var pageErrors = "Sorry, an email address does not exist for the patient.\n Please enter in a different patient ID";
            console.log("its false");
            /*res.render('findPatient', {
                pageErrors: pageErrors,
                userName: patientid
            });*/
            //redirect to page with a message that says patient not found or email doesn't exist
            var sendEmail = "";

            res.render('findPatient', {
                title: 'PIMS Notification Page',
                message: pageErrors,
                errors: {},
                send: sendEmail

            });
        }
    });

});

router.post('/sendEmail', function(req, res, next) {
    console.log("its 5555555");
    var recipientAdr =JSON.stringify(req.body.forMailing.recipient);
    var emailMsg =JSON.stringify(req.body.forMailing.message);
    var patientid =JSON.stringify(req.body.forMailing.name);
    notification.sendEmail(recipientAdr, emailMsg, patientid);


});
/*******************************FIND PATIENT ABOVE**********************************************/


module.exports = router;
