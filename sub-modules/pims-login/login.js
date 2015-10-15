//some stuff
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var https = require('https');
var logging = require('../../utils/logging.js').logger();
var meld = require('meld');

var userModel = require('../../models/userModel.js');
var User = userModel.user;
var userController = require('../../controllers/userAuthControl.js');



var authenticate = function(username, password, callback) {
    var foundUser = false;
    //var user = mongoose.model('users');
    User.findOne({username: username, password: password}, function(err, found){
        if(err) {
            console.log("DB error");
            callback(err);
        }

        if(found) {
            foundUser = true;
            return callback(foundUser);

        }
        else
        {
            foundUser = false;
            return callback(foundUser);
        }

    });

}

var saveUser = function(callback){
    var tester = new User({
        username: "justin",
        surname: "Liver",
        email: "liver@gmail.com",
        profile_pic: "",
        user_rights: 2,
        password: "",
        passwordSalt: "",
        passwordHash: "",
        department: "Obs",
        staff_type: "Intern"
    });

    tester.save(function(err){
        if(err){
            console.log ('Error on save!');
            return callback(err);
        }
        else{
            console.log('Saved!');
            return callback(true);
        }
    });

}

/**
 *
 * @param username
 * @param password
 * @param callback
 */
var checkAdmin = function(username, password, callback) {
    var isAdmin = false;

    //check if password is valid
    checkValidPassword(username, password, function(valid){
        console.log("just checkin "+ valid.passHash);
        if(valid.hashed == true) {
            //change to password hash
            console.log("correct pswd");
            User.findOne({username: username, passwordHash: valid.passHash}, function(err, found){
                if(err) {
                    console.log("DB error");
                    callback(err);
                }

                if(found) {
                    if(found.user_rights == 1)
                    {
                        isAdmin = true;
                        return callback(isAdmin);

                    }
                    else
                    {
                        isAdmin = false;
                        return callback(isAdmin);
                    }


                }

            });
        }
        else{
            console.log("invalid password");

        }

    });

}

checkAdmin = meld.before(checkAdmin, function() {
    if(arguments[0].user != null)
        logging.info("checkAdmin service request | for User: [" + arguments[0] +  "]");

});


/*
meld.afterReturning(checkAdmin, function(result) {
    logging.info("Just testing after meld //////////////////***** " + result);

});*/

/*
checkAdmin = meld.after(checkAdmin, function(result) {
    logging.info("checkAdmin service reponse | " + result.valueOf());
});*/





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



/*
router.param('userID', function(req, res, next, id){
    var query = User.findById(id);

    query.exec(function(err, userID){
        if(err){
            return next(err);
        }

        if(!userID){
            return next(new Error('Cant\'t find userID'));
        }

        req.userID = userID;
        return next();

    });
});*/

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

var isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated())
    {
        return next();
    }


    if (!req.isAuthenticated())
    {
        req.session.messages = "You need to login to view this page";
        res.redirect('/login');
    }
    next();


};


isLoggedIn = meld.before(isLoggedIn, function() {
    if(arguments[0].user != null)
        logging.info("isLoggedIn service request | User [" + arguments[0].user.username +  "] is logging in [" + arguments[0].isAuthenticated() + "] | "  + arguments[1]);

});



var isAdmin = function(req, res, next) {
    if (req.isAuthenticated() && req.user.user_rights == '1')
    {
        return next();
    }

    if (req.isAuthenticated() && req.user.user_rights != '1')
    {
        logging.error('isAdmin service request | Error: Access of restricted page /myAdminSpace');
        /*var err = new Error('You are not allowed to access this page');
        err.status = 400;
        return next(err);*/
        if(req.user.user_rights == '2')
        {
            res.redirect('/mySpace');
        }
    }

    if (!req.isAuthenticated())
    {
        req.session.messages = "You need to login to view this page";
        res.redirect('/login');
    }
    next();


};


isAdmin = meld.before(isAdmin, function() {
    if(arguments[0].user != null)
        logging.info("isAdmin service request | User["+ arguments[0].user.username +"] is admin [" + arguments[0].isAuthenticated() + "] | "  + arguments[1]);

});

/*
 meld.before(isAdmin, function(result) {
 if(result == err){
 logging.logger.error('You are not allowed to access this page');
 }
 else if(result == next){
 logging.logger.info('Admin logged into page');
 }

 });

 meld.after(isAdmin, function(result) {
 if(result == err){
 logging.logger.error('You are not allowed to access this page');
 }
 else if(result == next){
 logging.logger.info('Admin logged into page');
 }

 });*/

var isNotAdmin = function(req, res, next) {
    if (req.isAuthenticated() && req.user.user_rights == '2')
    {
        return next();
    }

    if (req.isAuthenticated() && req.user.user_rights != '2')
    {

        logging.error('isNotAdmin service request | Error: Access of restricted page /mySpace');
        /*var err = new Error('Page Not Found');
        err.status = 404;*/
        if(req.user.user_rights == '1')
        {
            res.redirect('/myAdminSpace');
        }
        //return next(err);
    }

    if (!req.isAuthenticated())
    {
        req.session.messages = "You need to login to view this page";
        res.redirect('/login');
    }
    next();


};


isNotAdmin = meld.before(isNotAdmin, function() {
    if(arguments[0].user != null)
        logging.info("isNotAdmin service request | User ["+ arguments[0].user.username +"] is not admin [" + arguments[0].isAuthenticated() + " | " + arguments[0].user.user_rights + "] | "  + arguments[1]);

});



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

var postLogin = function(req, res, next)
{
    //checks if login fields are empty
    var username = req.body.username;
    var password = req.body.password;
    var sendData = "";

    if(username == '' || password == '')
    {
        var pageErrors = "You have to fill in both Username and Password fields to login";
        res.render('login', {
            title: 'Kalafong PIMS',
            message: pageErrors,
            errors: {},
            send: sendData

        });
        return next();
    }


    passport.authenticate('local', function(err, user, info){
        if(err){
            return next(err);
        }

        if(!user){
            //sess.messages = info.message;
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                //sess.messages = "Error";
                var err = new Error('Unable to login in user');
                err.status = 400;
                return next(err);
            }

            /*sess.messages = "Login Success!!";
            sess.username = req.body.username;
            sess.password = req.body.password;*/


            checkAdmin(req.body.username, req.body.password, function(isAdmin)
            {
                if(req.user.username && req.user.password)
                {
                    if(isAdmin)
                    {
                        verifyRecaptcha(req.body['g-recaptcha-response'], function(success){
                            if(success){
                                res.redirect('/myAdminSpace');
                                res.end("Recaptchaed!!!");
                            }
                            else
                            {
                                res.redirect('/login');
                                res.end("Captcha failed sorry");

                            }
                        });
                    }
                    else
                    {
                        verifyRecaptcha(req.body['g-recaptcha-response'], function(success){
                            if(success){
                                res.redirect('/mySpace');
                                res.end("Recaptchaed!!!");
                            }
                            else
                            {
                                res.redirect('/login');
                                res.end("Captcha failed sorry");
                            }
                        });
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

/*
postLogin = meld.before(postLogin, function() {

    logging.info("postLogin service request | "+ arguments[0].user.username +" is logging in  with Access Rights [" + arguments[0].user.user_rights + "] | "  + arguments[1]);

});*/
var runUser = function() {

        userController.saltHashGen(username, password, function(hashed){
            console.log("hashing and salting " + hashed.sendSalt + "  " + hashed.sendHash);

            //update data
            /*User.update({username: "a"}, {passwordSalt : hashed.sendSalt }, {passwordHash : hashed.sendHash }, {multi:true}, function(err, numberAffected){
             console.log("update " + numberAffected);
             });*/
            found.passwordSalt = hashed.sendSalt;
            found.passwordHash = hashed.sendHash;
            count = 0;
            found.save();
        });

}


var checkValidPassword = function(username, password, callback){

    //hashing password from UI
    console.log("in checkValidPassword");

    User.findOne({username: username}, function(err, found){
        if(err){
            console.log("DB Error: "+ err);
            return callback(err);
        }

        if(found){
            console.log("found User");
            userController.saltHashGen(true, found.passwordSalt, username, password, function(hashed){
                if(hashed != null){
                    if(hashed.sendHash == found.passwordHash){
                        var send = {
                            hashed: true,
                            passHash: found.passwordHash
                        }
                        return callback(send); //and password hash value
                    }
                    else{
                        var send = {
                            hashed: false,
                            passHash: null
                        }

                        return callback(send);
                    }

                }
                else{
                    console.log("hashed is null");
                }
            });
        }
        else{
            console.log("no such person");
            var send = {
                hashed: false,
                passHash: null
            }

            return callback(send);
        }


    });



}



module.exports = {
    authenticate: authenticate,
    checkAdmin: checkAdmin,
    isLoggedIn: isLoggedIn,
    postLogin: postLogin,
    isNotAdmin: isNotAdmin,
    isAdmin: isAdmin,
    verifyRecaptcha: verifyRecaptcha

}
