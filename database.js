var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var Form = new Schema({  
	form_name			: String,
	data				: String,
	is_deleted			: Boolean
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


mongoose.model('forms', Form);
mongoose.model('patient', Patient);
mongoose.model('users', Users);

mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');

