var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var Form = new Schema({  
	form_name			: String,
	data				: String,
	is_deleted			: Boolean,
	data				: String
});

var Users = new Schema({          
	username				: String,
	surname					: String,
	email					: String,
	profile_pic				: String,
	user_rights				: Number,
	password				: String,
	department				: String,
	staff_type				: String
});

var Patient = new Schema({          
	patient_name			: String,
	patient_surname			: String,
	contact_number			: Number,
	email_address			: String,
	physical_address		: String
});

var Statistics = new Schema({          
	patient_id				: String,
	patient_name			: String,
	doctor_name				: String,
	procedure_name			: String,
	demographics			: String
});


var form = mongoose.model('forms', Form);
var patient = mongoose.model('patient', Patient);
var stats = mongoose.model('statistics', Statistics);
var user = mongoose.model('users', Users);
var success = false;

//-------------------------------------------------------------------------------------------------------------
//Adding new users
var newUser = new user(
		{
			username				: "Leon",
			surname					: "Snyman",
			email					: "pentecpims@gmail.com",
			profile_pic				: "snyman.jpg",
			user_rights				: 1,
			password				: "lsny",
			department				: "Department of Obstetrics and Gynaecology",
			staff_type				: "Doctor"
			
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

		var newUser = new user(
		{
			username				: "Mary",
			surname					: "Poppins",
			email					: "marypoppins@gmail.com",
			profile_pic				: "mary.jpg",
			user_rights				: 2,
			password				: "mary",
			department				: "Department of Obstetrics and Gynaecology",
			staff_type				: "Intern"
			
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
//-------------------------------------------------------------------------------------------------------------
if (success)
		{
			return "Test data added successfully";
		}
		else 
		{
			return "Error: Could not add test data";
		}

mongoose.connect('mongodb://127.0.0.1:27017/db');

