var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	user_id             : String,          
    name                : String,           
    surname             : String,      
    department      	: String,         
	hospital			: String,
	email_address		: String, 			
	profile_pic		    : String			
											
});

module.exports = mongoose.model('users', UserSchema);
