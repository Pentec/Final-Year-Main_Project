/**
 * Created by Ruth on 2015-08-15.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema   = mongoose.Schema;

var userController = require('../controllers/userAuthControl.js');


var Users = new Schema({
	username : {
		type: String,
		unique: true,
		required: true
	},
	surname	: String,
	email : {
        type: String,
        unique: true
    },
	profile_pic	: String,
	user_rights	: {
        type: Number,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    passwordSalt : {
        type: String,
        required: true
    },
    passwordHash : {
        type: String,
        required: true
    },
	department : String,
	staff_type : String

});



//Before saving, check if password has been modified, else return a call back
//if modified, then salt and hash password

Users.pre('save', function(callback){
   var user = this;

	console.log('pre saving');
    //password not modified, no need to rehash (for editing user information)
    if(!user.isModified('passwordHash')){
        callback();
    }
    else{

        //password has changed, rehash it
        userController.saltHashGen(false, "", user.username, user.passwordSalt, function(hashed){
            if(hashed != null){
                user.passwordSalt = hashed.sendSalt;
                user.passwordHash = hashed.sendHash;
                callback();
            }

        });

    }

});


/*verify password, compares hash with plain text value
Users.methods.passwordValid = function(password, callback){
	bcrypt.compare(password, this.password, function(err, isMatch){
        if(err)
            return callback(err);

        callback(null, isMatch);
    });//
};*/

module.exports.user = mongoose.model('users', Users);