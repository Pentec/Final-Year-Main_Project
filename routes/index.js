var express = require('express');
var router = express.Router();
var database = require('pims-database');

var mongoose = require('mongoose');

var Schema   = mongoose.Schema;
mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');


var Form = new Schema({
    form_name			: String,
    data				: String,
    is_deleted			: Boolean
});

var Users = new Schema({
    username				: String,
    surname				: String,
    email					: String,
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
var notification = require('pims-notification');



/* GET splash page. */
router.get('/', function(req, res, next) {
    res.render('splash', { title: 'Kalafong PIMS' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Kalafong PIMS' });
});


/* GET login page */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'PIMS Login Page' });
});

/*POST login page.*/
router.post('/login', function(req, res, next) {
    var username = req.body.userid;
    var password = req.body.pswd;

    login.authenticate(username, password, function(found) {
        if(found)
        {
            login.checkAdmin(username, password, function(isAdmin)
            {
                if(isAdmin)
                {
                    res.redirect('editProfile');
                }
                else
                {
                    res.redirect('home');
                }

            });

        }
        else
        {
            res.redirect('login');
        }
    });

});


/* Add New User page */
router.get('/add', function(req, res, next) {
    res.render('add', { title: 'Kalafong PIMS - Add New User' });
});

/* Settings page */
router.get('/editProfile', function(req, res, next) {
    User.find({username:"Leon"},function(err, users){
        res.render(
            'editProfile',
            {title : 'Edit Your Profile', user : users[0]}
        );
    });

});

/* Add New User to database from add user page */
router.post('/updateProfile', function(req, res) {

    User.findOne({username: req.body.username}, function(err, contact) {
        if(!err) {
            contact.username = req.body.username;
            contact.email = req.body.email;
            contact.surname = req.body.surname;
            contact.department = req.body.department;
            if(req.body.password == req.body.confirmpassword && req.body.password != "")
            {
                contact.password = req.body.confirmpassword;
            }
            contact.save(function(err) {
                //res.redirect('editProfile');
                if(!err)
                {
                    res.render('editProfile', { title: 'Profile has been updated' });
                }else
                {
                    res.render('editProfile', { title: 'There were problems updating your profile' });
                }
            });
        }
    });

  User.findOne({username: req.body.username}, function(err, contact) {
    if(!err) {
        contact.username = req.body.username;
        contact.email = req.body.email;
		contact.surname = req.body.surname;
        contact.department = req.body.department;
		if(req.body.password == req.body.confirmpassword && req.body.password != "")
		{
			contact.password = req.body.confirmpassword;
		}
        contact.save(function(err) {res.redirect('editProfile');});
    }
});


});


/* Add New User to database from add user page */
router.post('/create', function(req, res) {
    new User({username : req.body.username,surname : req.body.surname,email : req.body.email,user_rights : req.body.user_rights,password : req.body.password,department : req.body.department,staff_type : req.body.staff_type })
        .save(function(err, users) {
            console.log("New user added");
            res.redirect('add');
        });
});

/* GET form builder page page. */
router.get('/form', function(req, res, next) {
    res.render('formBuild', { title: 'Form Builder' });

});

/* Save the form obj into the database. */
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

/*//*///////////FORM*/////////////////////*/
router.get('/forms', function(req, res, next) {
    res.render('forms', { title: 'FormSelect' });
});


/* GET patient page */
router.get('/findPatient', function(req, res, next) {
    var sendEmail = {found: "hello"};
    res.render('findPatient', {
        title: 'PIMS Notification Page',
        message: '',
        errors: {},
        send: sendEmail
    });
});

/*POST patient page.*/
router.post('/sendNotification', function(req, res, next) {
    var patientid = req.body.patientid;

    notification.findPatient(patientid, function(found) {
        if(found != "")
        {
            var sendEmail = {found: found, patient: patientid};
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
    console.log('sendEmail');
    var recipientAdr =JSON.stringify(req.body.forMailing.recipient);
    var emailMsg =JSON.stringify(req.body.forMailing.message);
    var patientid =JSON.stringify(req.body.forMailing.name);
    notification.sendEmail(recipientAdr, emailMsg, patientid);
});


module.exports = router;
