var mongoose = require('mongoose');
mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims'); // connect to database


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) 
{
	console.log("Connection Open");
});

var FormSchema = mongoose.Schema({
    form_id             : String,           
    form_name           : String,          
    is_deleted          : Boolean,
	data				: String
    
});
var UserSchema = mongoose.Schema({
	user_id             : String,          
    name                : String,           
    surname             : String,      
    department      	: String,         
	hospital			: String,
	email_address		: String, 			
	profile_pic		    : String			
											
});

var user = mongoose.model('users', UserSchema);
var form = mongoose.model("form", FormSchema);

	var success = true;
	/****************************************************ADDING TEST USER DATA************************************************************************************/

	var newUser = new user(
		{
			user_id				: "leon11",
			username            : "Leon",           
			surname             : "Snyman",      
			department      	: "Obstetrics and Gynaecology",          
			hospital			: "Kalafong",
			email_address		: "pentecpims@gmail.com", 			
			profile_pic		    : "synman.jpg"			
		});
		newUser.save(function(err,newUser)
		{
			if (err) 
			{
				success = false;
				console.log("Error Adding New User");
			}
			else 
			{
				success = true;
			}
		});
	/***************************************************************************************************************************************************************/
	/****************************************************ADDING TEST FORM DATA************************************************************************************/
		
		var newForm = new form(
		{
			form_id	        	: 1,
			form_name           : "Cervical form",
			is_deleted			: false,
			data				: "obj"
			
		});
		newForm.save(function(err,newForm)
		{
			if (err) 
			{
				success = false;
				console.log("Error Adding Form");
			}
			else 
			{
				success = true;
			}
		});
		
	/********************************************************************************************************************************************************************/
		if (success)
		{
			return "Test data added successfully";
		}
		else 
		{
			return "Error: Could not add test data";
		}