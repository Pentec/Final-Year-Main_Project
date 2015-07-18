var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var Form = new Schema({  
	form_name			: String,
	data				: String,
	is_deleted			: Boolean
});

var Users = new Schema({          
	username				: String,
	surname				: String,
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

var GynaecologySurgery = new Schema({

        ProcedureDate: {type: Date, require: true, title: 'Procedure Date' },
        HospitalNumber: {type: String, require: true, title: 'Hospital Number'},
        Age: {type:Number, require: true, title: 'Age'},
        Name: {type: String, require: true, title: 'Name'},
        Surname: {type: String, require: true, title: 'Surname'},
	UnknownField: {Properties: {P: {type: Boolean, title: 'P'}, G: {type: Boolean, title: 'G'}, M: {type: Boolean, title: 'M'}, E: {type: Boolean, title: 'E'}}},
        HIV: {Status: {type: String, title: 'HIV Status'}, CD4: {type: Number, title: 'CD4'}},
        ProcedureType: {Properties: {Elective: {type: Boolean, title: 'Elective'}, Emergency: {type: Boolean, title: 'Emergency'}}},
        Firm: {Properties: {G1: {type: Boolean, title: 'G1'}, G2: {type: Boolean, title: 'G2'}, G3: {type: Boolean, title: 'G3'}, ONC: {type: Boolean, title: 'ONC'}}},
        ProcedureCat: {Properties: {Oncology: {type: Boolean, title: 'Oncology'}, GeneralGynae: {type: Boolean, title: 'General Gynaecology'}, Infertility: {type: Boolean, title: 'Infertility'}, Urologynaecology: {type: Boolean, title: 'Urologynaecology'}}},
        AccessType: {Properties: {OpenAbdomen: {type: Boolean, title: 'Open Abdomen'}, Endoscopy: {type: Boolean, title: 'Endoscopy'}, Vaginal: {type: Boolean, title: 'Vaginal'}}},
        PreOperICD10Codes: [{type: String, title: 'Pre-Operative Diagnosis ICD Code:'}],
        PerformedBy: {Properties: {Consultant: {type: Boolean, title: 'Consultant'}, Fellow: {type: Boolean, title: 'Fellow'}, Registrar: {type: Boolean, title: 'Registrar'}, Intern: {type: Boolean, title: 'Intern'}}},
	DygnosisNotOnICD10List: [{type: String, title: 'Diagnosis if not on ICD 10 list'}],
	ProPerformedCode: [{type: String, title: 'Procedure(s) Performed(Code) :'}],
	IOComplications: {Properties: {None: {type: Boolean, title: 'None'}, BladderInjury: {type: Boolean, title: 'Bladder Injury'}, BowelInjury: {type: Boolean, title: 'Bowel Injury'}, BRUBT: {type: Boolean, title: 'BRUBT'}, ProcedureNotCompleted: {type: Boolean, title: 'Procedure Not Completed'}}},
	OtherComplications: {type: String, title : 'Other Complications'}
    });

mongoose.model('forms', Form);
mongoose.model('patient', Patient);
mongoose.model('users', Users);
mongoose.model('gynaecologySurgery', GynaecologySurgery);

mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');

