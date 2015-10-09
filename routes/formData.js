var express = require('express');
var router = express.Router();

var GynaecologySurgery = new Schema({

        ProcedureDate: {type: Date, require: true, title: 'Procedure Date' },
        HospitalNumber: {type: String, require: true, title: 'Hospital Number'},
        Age: {type: Number, require: true, title: 'Age'},
        Name: {type: String, require: true, title: 'Name'},
        Surname: {type: String, require: true, title: 'Surname'},
	P: {type: Boolean, title: 'P'}, 
	G: {type: Boolean, title: 'G'}, 
	M: {type: Boolean, title: 'M'}, 
	E: {type: Boolean, title: 'E'},
        HIVStatus: {type: String, title: 'HIV Status'}, 
	CD4: {type: Number, title: 'CD4'}, 
        ProcedureType: {Properties: {Elective: {type: Boolean, title: 'Elective'}, Emergency: {type: Boolean, title: 'Emergency'}}},
        Firm: {Properties: {G1: {type: Boolean, title: 'G1'}, G2: {type: Boolean, title: 'G2'}, G3: {type: Boolean, title: 'G3'}, ONC: {type: Boolean, title: 'ONC'}}},
	
	Oncology: {type: Boolean, title: 'Oncology'}, 
	GeneralGynae: {type: Boolean, title: 'General Gynaecology'},
	Infertility: {type: Boolean, title: 'Infertility'}, 
	Urologynaecology: {type: Boolean, title: 'Urologynaecology'}},
	
       OpenAbdomen: {type: Boolean, title: 'Open Abdomen'},
       Endoscopy: {type: Boolean, title: 'Endoscopy'}, 
       Vaginal: {type: Boolean, title: 'Vaginal'},
        PreOperICD10Codes: [{type: String, title: 'Pre-Operative Diagnosis ICD Code:'}],
	
	Consultant: {type: Boolean, title: 'Consultant'}, 
	Fellow: {type: Boolean, title: 'Fellow'}, 
	Registrar: {type: Boolean, title: 'Registrar'},
	Intern: {type: Boolean, title: 'Intern'},
       
	DygnosisNotOnICD10List: [{type: String, title: 'Diagnosis if not on ICD 10 list'}],
	
	ProPerformedCode: [{type: String, title: 'Procedure(s) Performed(Code) :'}],
	
	None: {type: Boolean, title: 'None'},
	BladderInjury: {type: Boolean, title: 'Bladder Injury'}, 
	BowelInjury: {type: Boolean, title: 'Bowel Injury'}, 
	BRUBT: {type: Boolean, title: 'BRUBT'}, 
	ProcedureNotCompleted: {type: Boolean, title: 'Procedure Not Completed'},
	
	OtherComplications: {type: String, title : 'Other Complications'}
});


mongoose.model('gynaecologySurgery', GynaecologySurgery);

router.post('/', function(req, res, next) {
	
    console.log(req.body);
});
module.exports = router;