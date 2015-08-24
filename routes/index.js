var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userAuthentication = require('../controllers/authenticate.js');

/**
 * A variable in the global namespace called 'models'.
 * It is for the PIMS login functionality
 * @type {*|exports|module.exports}
 */
var models = require('pims-database');

/**
 * A variable in the global namespace called 'login'.
 * It is for the PIMS login functionality
 * @type {exports|module.exports}
 */
var login = require('pims-login');

/**
 * A variable in the global namespace called 'notification'.
 * It is for the PIMS notification functionality
 * @type {exports|module.exports}
 */
var notification = require('pims-notification');
var https = require('https');

/**
 * A variable in the global namespace called 'userModel'.
 * It is for the PIMS User schema and has all the details pertaining to users of the system.
 * @type {exports|module.exports}
 */
var userModel = require('../models/userModel.js');
var User = userModel.user;
var Form = models.forms;
var GS = models.gynaecologySurgery;

/**
 * A variable in the global namespace called 'sess'.
 * It is used for all session related operations.
 * @type {Session}
 */
var sess;


/**
 * A variable in the global namespace called 'SECRET'.
 * It captures the secret key for Google reCAPTCHA
 * @type {string}
 */
var SECRET = "6Lc9mAsTAAAAAOyPr1IUrfH30n-YoT1m_f4u0KIf";


/**
 * @function verifyRecaptcha
 * This function verifies the two keys pertaining to the Google reCAPTCHA add-on
 * @param secretKey
 * @param callback
 */
var verifyRecaptcha = function (secretKey, callback){
    https.get("https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET + "&response=" + secretKey, function(res){
        var data = "";
        res.on('data', function(text){
            data += text.toString();
        });

        res.on('end', function(){
            try {
                var jsonData = JSON.parse(data);
                callback(jsonData.success);
            } catch(e) {
                callback(false);

            }
        });
    });
};



/**
 * @function isLoggedIn
 * This helper function verifies if a user is logged in whilst accessing
 * the url endpoints of the system. If a user is authenticated, they are
 * allowed to proceed to the next page, otherwise they are requested
 * to login and thus redirected to the login page.
 * @param req
 * @param res
 * @param next
 * @returns {next()}
 */
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    if (!req.isAuthenticated())
    {
        req.session.messages = "You need to login to view this page";
        res.redirect('/login');
    }
    next();


};


/**
 * @function postLogin
 * This helper function handles the authentication of the Login form post.
 * It makes use of the Passport.js Local Strategy in order to authenticate
 * a users credentials. The req.logIn function used here is provided by
 * Passport.js and authenticates the user. A local function 'checkAdmin',
 * provided by the pims-login private module checks for a users access
 * rights and depending on that, they are redirected to a particular page.
 * @param req
 * @param res
 * @param next
 */

function postLogin(req, res, next)
{
    passport.authenticate('local', function(err, user, info){
        if(err){
            return next(err);
        }

        if(!user){
            sess.messages = info.message;
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                sess.messages = "Error";
                return next(err);
            }

            sess.messages = "Login Success!!";
            sess.username = req.body.username;
            sess.password = req.body.password;

            login.checkAdmin(req.body.username, req.body.password, function(isAdmin)
            {
                console.log("after admin");
                if(sess.username && sess.password)
                {
                    if(isAdmin)
                    {
                        /*verifyRecaptcha(req.body['g-recaptcha-response'], function(success){
                         if(success){
                         res.end("Recaptchaed!!!");
                         res.redirect('/editProfile');
                         }
                         else
                         {
                         res.end("Captcha failed sorry");
                         res.redirect('/login');
                         }
                         });*/

                        res.redirect('/editProfile');
                    }
                    else
                    {
                        /*verifyRecaptcha(req.body['g-recaptcha-response'], function(success){
                         if(success){
                         res.end("Recaptchaed!!!");
                         res.redirect('/mySpace');
                         }
                         else
                         {
                         res.end("Captcha failed sorry");
                         res.redirect('/login');
                         }
                         });*/


                        res.redirect('/mySpace');
                    }
                }
                else
                {
                    res.redirect('/login');
                }


            });

        })

    })(req, res, next);

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


/* GET home page. */
router.get('/home', isLoggedIn, function(req, res, next) {
    sess = req.session;
    res.render('index', { title: 'Kalafong PIMS' });
});



/*Get myAdminSpace page */
router.get('/myAdminSpace', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('pims_space/myAdminSpace', { title: 'My PIMS Space' });
    }
    else{
        res.redirect('/login');
    }

});

/*Get mySpace page */
router.get('/mySpace', isLoggedIn, function(req, res, next) {
    sess=req.session;

    if(req.user)
    {
        res.render('pims_space/mySpace', { title: 'My PIMS Space' });
    }
    else{
        res.redirect('/login');
    }
});


router.get('/login', function(req, res) {
    sess = req.session;
    //user not logged in
    if(!req.user){

        var sendData = {found: "hello"};
        res.render('login', {
            title: 'PIMS Login Page',
            user: req.user,
            message: sess.messages,
            errors: {},
            send: sendData
        });
        sess.messages = null;

    }
    else if(req.user) {//user already logged in, may help sessions
        login.checkAdmin(req.user.username, req.user.password, function(isAdmin)
        {
                if(isAdmin)
                {
                    res.redirect('/editProfile');
                }
                else
                {
                    res.redirect('/mySpace');
                }

        });

    }

});




/*POST login page*/
router.post('/login', postLogin, function(req, res, next) {
    sess = req.session;
    //checks if login fields are empty
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

    //fields are not empty, authenticate credentials



/*
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




    login.authenticateUser(username, password, function(found) {
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
                        /*verifyRecaptcha(req.body['g-recaptcha-response'], function(success){
                            if(success){
                                res.end("Recaptchaed!!!");
                                res.redirect('/editProfile');
                            }
                            else
                            {
                                res.end("Captcha failed sorry");
                                res.redirect('/login');
                            }
                        });//

                        res.redirect('/editProfile');
                    }
                    else
                    {
                        /*verifyRecaptcha(req.body['g-recaptcha-response'], function(success){
                            if(success){
                                res.end("Recaptchaed!!!");
                                res.redirect('/mySpace');
                            }
                            else
                            {
                                res.end("Captcha failed sorry");
                                res.redirect('/login');
                            }
                        });//


                        res.redirect('/mySpace');
                        //res.send(403);
                    }
                }
                else
                {
                    res.redirect('/login');
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
            return;//
        }
    });*/



});


router.get('/logout', function(req,res){

    if(req.isAuthenticated()){
        req.logout();
        req.session.messages = "Log out successful";

    }
    res.redirect('/splash');

    /*req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else
        {
            res.redirect('/splash');
        }
    });*/
});

/* Add New User page */
router.get('/addUser', isLoggedIn, function(req, res, next) {
    sess=req.session;

    if(req.user)
    {
        res.render('addUser', { title: 'Kalafong PIMS - Add New User' });
    }
    else{
        res.redirect('/login');
    }

});

/* Settings page */
router.get('/editProfile', isLoggedIn, function(req, res, next) {
    sess=req.session;

    if(req.user)
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
router.post('/updateProfile', isLoggedIn, function(req, res) {

    sess=req.session;

    if(req.user)
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
router.post('/create', isLoggedIn, function(req, res) {

    sess=req.session;

    if(req.user)
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
router.get('/viewForms', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('viewForms', { title: 'Select Forms' });
    }
    else
    {
        res.redirect('/login');
    }

 
});

/* GET form builder page page. */
router.get('/form', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('formBuild', { title: 'Form Builder' });
    }
    else
    {
        res.redirect('/login');
    }

});

/* Save the form obj into the database. */
router.post('/formsave', isLoggedIn, function(req, res) {

    sess=req.session;

    if(req.user)
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
router.get('/stats', isLoggedIn, function(req, res, next) {
    sess=req.session;

    if(req.user)
    {
        var EmergencyCount;
        var ElectiveCount;
        //Check the stats for Emergency
        GS.count({"typeOfProcedure.Emergency": true},function(err, EmergencyCount) {
            console.log("There are " + EmergencyCount + " Emergency records.");

            //Check the stats for Elective

            GS.count({"typeOfProcedure.Elective": true},function(err, ElectiveCount) {
                console.log("There are " + ElectiveCount + " Elective records.");

                res.render('stats',{title : 'Edit Your Profile', elective : ElectiveCount, emergency : EmergencyCount });
            });
        });
    }
    else
    {
        res.redirect('/login');
    }

});

/******************************* STATS NAV**********************************************/
router.get('/pro', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('pro', { title: 'viewProcedure' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*View patient stats */
router.get('/pat', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
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

    if(req.user)
    {
        res.render('res', { title: 'viewResources' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*View patient stats */
router.get('/doc', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('doc', { title: 'viewDoctor' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*View patient stats */
router.get('/pred', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('pred', { title: 'Predictions' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*View patient stats */
router.get('/forms', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('forms', { title: 'FormSelect' });
    }
    else
    {
        res.redirect('/login');
    }
});

/*//*///////////FORM*/////////////////////*/
router.get('/forms', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('forms', { title: 'FormSelect' });
    }
    else
    {
        res.redirect('/login');
    }

});




/* GET patient page*/
router.get('/findPatient', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
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
router.post('/findPatient/sendNotification', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        console.log('Yaaaaay ' + req.user);
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

router.post('/findPatient/sendEmail', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
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
