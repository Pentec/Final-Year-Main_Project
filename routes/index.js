var express = require('express');
var router = express.Router();
var models = require('pims-database');
<<<<<<< HEAD
var Form = models.forms;
var User = models.users;
var GS = models.gynaecologySurgery;

=======
>>>>>>> 48f20ecbd11fa145af37bc68882bd71a3155d292
var login = require('pims-login');
var notification = require('pims-notification');

var userModel = require('../models/userModel.js');
var User = userModel.user;
var Form = models.forms;
var GS = models.gynaecologySurgery;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
};


/* GET splash page. */
router.get('/splash', function(req, res, next) {
    sess=req.session;
  res.render('splash', { title: 'Kalafong PIMS' });
});

router.get('/', function(req, res, next){
    sess=req.session;

    sess.username;
    sess.password;
    res.render('countdown', { title: 'Kalafong Pims: Coming Soon!'})
});

/*Get myAdminSpace page */
router.get('/myAdminSpace', function(req, res, next) {
    res.render('pims_space/myAdminSpace', { title: 'My PIMS Space' });
});

/*Get mySpace page */
router.get('/mySpace', function(req, res, next) {
    res.render('pims_space/mySpace', { title: 'My PIMS Space' });
});

/* GET home page. */
var sess;
router.get('/home', function(req, res, next) {
    sess = req.session;
    res.render('index', { title: 'Kalafong PIMS' });
});



/* GET login page  , userAuthentication.userAuthenticated,*/
router.get('/login', function(req, res, next) {
    var sendData = {found: "hello"};
    res.render('login', {
        title: 'PIMS Login Page',
        message: '',
        errors: {},
        send: sendData
    });
    //res.render('login', { title: 'PIMS Login Page' });
    sess = req.session;

});



/*POST login page*/
router.post('/login', function(req, res, next) {
    sess = req.session;
    var username = req.body.username;
    var password = req.body.password;
    var sendData = "";

    if(username == '' || password == '')
    {
        var pageErrors = "User name or password is empty.";

        res.render('login', {
            title: 'Kalafong PIMS',
            message: pageErrors,
            errors: {},
            send: sendData

        });
        return;
    }


    login.authenticate(username, password, function(found) {
        if(found)
        {
            sess.username = req.body.username;
            sess.password = req.body.password;

            login.checkAdmin(username, password, function(isAdmin)
            {
                console.log("after admin");
                if(sess.username && sess.password)
                {
                    if(isAdmin)
                    {
                        res.redirect('editProfile');
                    }
                    else
                    {
                        res.redirect('mySpace');
                        //res.send(403);
                    }
                }
                else
                {
                    res.redirect('login');
                }


            });

        }
        else
        {
            //sess.reset();
            //res.redirect('login');
            req.session.destroy(function(err){
                if(err){
                    console.log(err);
                }
                else
                {
                    var pageErrors = "User name or password is incorrect.";
                    sendData = "";

                    res.render('login', {
                        title: 'Kalafong PIMS',
                        message: pageErrors,
                        errors: {},
                        send: sendData

                    });
                    return;
                }
            });

            /*var pageErrors = "User name or password is incorrect.";
            sendData = "";

            res.render('login', {
                title: 'Kalafong PIMS',
                message: pageErrors,
                errors: {},
                send: sendData

            });
            return;*/
        }
    });

});


router.get('/logout',function(req,res){

    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else
        {
            res.redirect('/');
        }
    });

    /*req.logout();
    res.redirect('/');*/
});

/* Add New User page */
router.get('/addUser', function(req, res, next) {
    sess=req.session;

    if(sess.username)
    {
        res.render('addUser', { title: 'Kalafong PIMS - Add New User' });
    }
    else{
        res.redirect('/login');
    }

});

/* Settings page */
router.get('/editProfile', function(req, res, next) {
    sess=req.session;

    if(sess.username)
    {
        User.find({username:"Leon"},function(err, users){
            res.render(
                'editProfile',
                {title : 'Edit Your Profile', user : users[0]}
            );
        });
    }
    else
    {
        res.redirect('/login');
    }



});

/* Add New User to database from add user page */
router.post('/updateProfile', function(req, res) {

    sess=req.session;

    if(sess.username)
    {
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
                    res.redirect('editProfile');

                });
            }
        });
    }
    else
    {
        res.redirect('/login');
    }


});


/* Add New User to database from add user page */
router.post('/create', function(req, res) {

    sess=req.session;

    if(sess.username)
    {
        new User({username : req.body.username,surname : req.body.surname,email : req.body.email,user_rights : req.body.user_rights,password : req.body.password,department : req.body.department,staff_type : req.body.staff_type })
            .save(function(err, users) {
                console.log("New user added");
                res.redirect('addUser');
            });
    }
    else
    {
        res.redirect('/login');
    }


});

/* GET form builder page page. */
router.get('/viewForms', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('viewForms', { title: 'Select Forms' });
    }
    else
    {
        res.redirect('/login');
    }

 
});

/* GET form builder page page. */
router.get('/form', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('formBuild', { title: 'Form Builder' });
    }
    else
    {
        res.redirect('/login');
    }

});

/* Save the form obj into the database. */
router.post('/formsave', function(req, res) {

    sess=req.session;

    if(sess.username)
    {
        var object = JSON.stringify(req.body);
        console.log(object);

        new Form({form_name : "new form",data : object ,is_deleted : false})
            .save(function(err, forms) {
                console.log("New form added");
                res.redirect('formBuild');

            });
    }
    else
    {
        res.redirect('/login');
    }


});


/*View Stats */
router.get('/stats', function(req, res, next) {
    sess=req.session;

    if(sess.username)
    {
        res.render('stats', { title: 'viewStats' });
    }
    else
    {
        res.redirect('/login');
    }

});
var EmergencyCount;
var ElectiveCount;
	//Check the stats for Emergency
<<<<<<< HEAD
=======

>>>>>>> 48f20ecbd11fa145af37bc68882bd71a3155d292
	 GS.count({"typeOfProcedure.Emergency": true},function(err, EmergencyCount) {
          console.log("There are " + EmergencyCount + " Emergency records.");
 
	//Check the stats for Elective
	
	 GS.count({"typeOfProcedure.Elective": true},function(err, ElectiveCount) {
          console.log("There are " + ElectiveCount + " Elective records.");
        
     res.render('stats',{title : 'Edit Your Profile', elective : ElectiveCount, emergency : EmergencyCount });
	  });
	});
/******************************* STATS NAV**********************************************/
router.get('/pro', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('pro', { title: 'viewProcedure' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*View patient stats */
router.get('/pat', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('pat', { title: 'viewPatient' });
    }
    else
    {
        res.redirect('/login');
    }

});

/*View patient stats */
router.get('/res', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('res', { title: 'viewResources' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*View patient stats */
router.get('/doc', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('doc', { title: 'viewDoctor' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*View patient stats */
router.get('/pred', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('pred', { title: 'Predictions' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*View patient stats */
router.get('/forms', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('forms', { title: 'FormSelect' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*//*///////////FORM*/////////////////////*/
router.get('/forms', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        res.render('forms', { title: 'FormSelect' });
    }
    else
    {
        res.redirect('/login');
    }

});




/* GET patient page*/
router.get('/findPatient', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        var sendEmail = {found: "hello"};
        res.render('findPatient', {
            title: 'PIMS Notification Page',
            message: '',
            errors: {},
            send: sendEmail
        });
    }
    else
    {
        res.redirect('/login');
    }

});


/*POST patient page.*/
router.post('/findPatient/sendNotification', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
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
    }
    else
    {
        res.redirect('/login');
    }


});

router.post('/findPatient/sendEmail', function(req, res, next) {

    sess=req.session;

    if(sess.username)
    {
        console.log('sendEmail');
        var recipientAdr =JSON.stringify(req.body.forMailing.recipient);
        var emailMsg =JSON.stringify(req.body.forMailing.message);
        var patientid =JSON.stringify(req.body.forMailing.name);
        notification.sendEmail(recipientAdr, emailMsg, patientid);
    }
    else
    {
        res.redirect('/login');
    }

});




module.exports = router;
