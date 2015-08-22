/**
 * Created by Ruth on 2015-08-15.
 */
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema   = mongoose.Schema;
/*
var Users = new Schema({
	username				: String,
	surname				: String,
	email				: String,
	profile_pic				: String,
	user_rights				: Number,
	password				: String,
	department				: String,
	staff_type				: String
});*/



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

Users.plugin(passportLocalMongoose);

/*
var u = new Users({username : "l", surname : "m", email : "lm@gmail.com",user_rights : 1,password : "n", department : "Obstetrics", staff_type : "Doctor" })
    .save(function(err, users) {
        console.log("New user added");
    });*/

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

User.methods.verifyPassword = function(password, callback){
	bcrypt.compare(password, this.password, function(err, isMatch){
        if(err)
            return callback(err);

        callback(null, isMatch);
    });
};*/


module.exports.user = mongoose.model('users', Users);