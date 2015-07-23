var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
/*mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');*/

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
	
        G1: {type: Boolean, title: 'G1'}, 
	G2: {type: Boolean, title: 'G2'}, 
	G3: {type: Boolean, title: 'G3'}, 
	ONC: {type: Boolean, title: 'ONC'},
	
	Oncology: {type: Boolean, title: 'Oncology'}, 
	GeneralGynae: {type: Boolean, title: 'General Gynaecology'},
	Infertility: {type: Boolean, title: 'Infertility'}, 
	Urologynaecology: {type: Boolean, title: 'Urologynaecology'},
	
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



var GS = mongoose.model('gynaecologySurgery', GynaecologySurgery);

router.post('/', function(req, res, next) {
console.log(req.body);

   var Form = new GS({
   
	ProcedureDate: req.body.ProcedureDate,
	HospitalNumber: req.body.HospitalNumber,
	Age: req.body.Age,
	Name: req.body.Name,
        Surname: req.body.Surname,
	
	P: req.body.P,
	G: req.body.G, 
	M: req.body.M, 
	E: req.body.E,
        HIVStatus: req.body.HIVStatus,
	
	CD4: req.body.CD4,
	
        ProcedureType: req.body.ProcedureType,
	
        G1:req.body.G1, 
	G2: req.body.G2,
	G3: req.body.G3,
	ONC: req.body.ONC,
	
	Oncology: req.body.Oncology,
	GeneralGynae: req.body.GeneralGynae,
	Infertility: req.body.Infertility,
	Urologynaecology: req.body.Urologynaecology,
	
       OpenAbdomen: req.body.OpenAbdomen,
       Endoscopy: req.body.Endoscopy,
       Vaginal: req.body.Vaginal,
        PreOperICD10Codes: req.body.PreOperICD10Codes,
	
	Consultant: req.body.Consultant,
	Fellow: req.body.Fellow,
	Registrar: req.body.Registrar,
	Intern: req.body.Intern,
       
	DygnosisNotOnICD10List: req.body.DygnosisNotOnICD10List,
	
	ProPerformedCode: req.body.ProPerformedCode,
	
	None: req.body.None,
	BladderInjury: req.body.BladderInjury,
	BowelInjury: req.body.BowelInjury,
	BRUBT: req.body.BRUBT, 
	ProcedureNotCompleted: req.body.ProcedureNotCompleted,
	
	OtherComplications: req.body.OtherComplications,
   });
   

Form.save(function(err){
    if(err) {
   /* throw err;*/
    console.log('An error occurred while trying to add data');
    }
    else{console.log('The data has been saved.');
    }
});


});


  
  
  
module.exports = router;