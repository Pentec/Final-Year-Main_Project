//some stuff
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var https = require('https');

var authenticate = function(username, password, callback) {
    var foundUser = false;

    var user = mongoose.model('users');
    user.findOne({username: username, password: password}, function(err, found){
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


var checkAdmin = function(username, password, callback) {
    var isAdmin = false;

    var user = mongoose.model('users');
    user.findOne({username: username, password: password}, function(err, found){
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
 * @function
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



var isAdmin = function(req, res, next) {
    if (req.isAuthenticated() && req.user.user_rights == '1')
    {
        return next();
    }

    if (req.isAuthenticated() && req.user.user_rights != '1')
    {
        var err = new Error('You are not allowed to access this page');
        err.status = 400;
        return next(err);
    }

    if (!req.isAuthenticated())
    {
        req.session.messages = "You need to login to view this page";
        res.redirect('/login');
    }
    next();


};



var isNotAdmin = function(req, res, next) {
    if (req.isAuthenticated() && req.user.user_rights == '2')
    {
        return next();
    }

    if (req.isAuthenticated() && req.user.user_rights != '2')
    {
        var err = new Error('You are not allowed to access this page');
        err.status = 400;
        return next(err);
    }

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

module.exports = {
    authenticate: authenticate,
    checkAdmin: checkAdmin,
    isLoggedIn: isLoggedIn,
    postLogin: postLogin,
    isNotAdmin: isNotAdmin,
    isAdmin: isAdmin,
    verifyRecaptcha: verifyRecaptcha
}
