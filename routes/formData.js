var express = require('express');
var router = express.Router();
var models = require('pims-database');
var GS = models.gynaecologySurgery;
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
	
	Elective: req.body.Elective,
	Emergency: req.body.Emergency,
	
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


  /*router.get('/', function(req, res, next) {
 GS.find(function(err, data){
 console.log(' hello' + data );
  });
});

 GET form builder page page.
//router.get('/pat', function(req, res, next) {
	// GS.find(function(err, data){
	// console.log(' hello' + data );
 //  res.render('viewForms', { title: 'Select Forms' });
  //});

}); */
  
  
module.exports = router;