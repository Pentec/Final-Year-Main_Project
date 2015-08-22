/**
 * Created by Ruth on 2015-08-15.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema   = mongoose.Schema;


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
	user_rights			: {
        type: Number,
        required: true
    },
	password : {
		type: String,
		required: true
	},
	department : String,
	staff_type : String
});

//Before saving, check if password has been modified, else return a call back
//if modified, then salt and hash pswd
/*
Users.pre('save', function(callback){
   var user = this;

	if(!user.isModified('password'))
		return callback();

	bcrypt.genSalt(5, function(err,salt){
	   if(err)
		   return callback(err);

		bcrypt.hash(user.password, salt, null, function(err, hash){
		   if(err)
			   return callback(err);

		   user.password = hash;
			callback;
		});
	});

});

//verify password, compares hash with plain text value
User.methods.verifyPassword = function(password, callback){
	bcrypt.compare(password, this.password, function(err, isMatch){
        if(err)
            return callback(err);

        callback(null, isMatch);
    });
};*/


/*methods*/


module.exports.user = mongoose.model('users', Users);