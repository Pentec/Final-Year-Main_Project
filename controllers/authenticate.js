/**
 * Created by Ruth on 2015-08-15.
 */
var passport = require('passport'),
    BasicStrategy = require('passport-http').BasicStrategy;
    LocalStrategy = require('passport-local').Strategy;

var userModel = require('../models/userModel.js');
var User = userModel.user;

passport.serializeUser(function(user, done){
   done(err, user.id);
});

//takes the id stored in the session and we use that id to retrieve our user
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(null, user.id);
    });
});


passport.use('login', new LocalStrategy({
    passReqToCallback : true
},
    function(req, username, password, done){
        User.findOne({'username' : username},
        function(err, user){
            if(err)
                return done(err);

            if(!user){
                console.log('User: ' + username + ' not found');
                return done(null, false, req.flash('message', 'Invalid Username or Password'));
            }

            if(!passwordValid(user, password)){
                console.log('pswd invalid');
                return done(null, false, req.flash('message', 'Invalid Username or Password'));
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



//will have to change it to add better pswd check function
var passwordValid = function(user, password){
    return true;
}

//module.exports.isAuthenticated = passport.authenticate('basic', {session: false});
module.exports.userAuthenticated = userAuthenticated;