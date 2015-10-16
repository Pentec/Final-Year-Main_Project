var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var userModel = require('../models/userModel.js');
var User = userModel.user;


passport.serializeUser(function(user, done){
   done(null, user.id);
});

//takes the id stored in the session and we use that id to retrieve our user
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err) {
            done(new Error('User ' + id + ' does not exist'));
        }
        else {
            done(null, user);
        }

    });
});



passport.use(new LocalStrategy({
        username: 'username',
        password: 'password'
        //passReqToCallback: true
    },
    function(username, password, done){
        User.findOne({'username' : username},
        function(err, user){
            if(err)
                return done(err);

            if(!user){
                console.log('User: ' + username + ' not found');
                return done(null, false, {message: 'User doesnot exist'});
            }

            if(passwordValid(user, password) == false){
                console.log('pswd invalid');
                return done(null, false, {message: 'Invalid Username or Password'});
            }

            return done(null, user);

        });
    }
));




var userAuthenticated = function userAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/login');
};

/**
 *
 * @param user
 * @param password
 */
//will have to change it to add better pswd check function
var passwordValid = function(user, password){
    User.findOne({'password' : user.password},
        function(err, user){
            if(err)
                return err;

            if(user){
                return true;
            }
            else {
                return false;
            }
        });

};





//module.exports.userAuthenticated = userAuthenticated;
module.exports = {
    userAuthenticated: userAuthenticated
    //generateInitVector: generateInitVector,
    //encrypt: encrypt,
    //decrypt: decrypt

}