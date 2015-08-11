var express = require('express');
var router = express.Router();
var models = require('pims-database');
var GS = models.gynaecologySurgery;

router.post('/', function(req, res, next) {
    var jsonString = JSON.stringify(req.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);
   var Form = new GS({
   
	ProcedureDate: changedString.ProcedureDate,
	HospitalNumber: changedString.HospitalNumber,
	Age: changedString.Age,
	Name: changedString.Name,
    Surname: changedString.Surname,
	
	P: changedString.P,
	G: changedString.G,
	M: changedString.M,
	E: changedString.E,

   HIV: {HIVStatus: changedString.HIVHIVStatus,
       CD4: changedString.HIVCD4
   },

   typeOfProcedure: {
       Elective: changedString.Elective,
       Emergency: changedString.Emergency
   },

    firm: {
        G1: changedString.firmG1,
        G2: changedString.firmG2,
        G3: changedString.firmG3,
        ONC: changedString.firmONC
    },

       categoryOfProcedure: {
           Oncology: changedString.categoryOfProcedureOncology,
           GeneralGynae: changedString.categoryOfProcedureGeneralGynae,
           Infertility: changedString.categoryOfProcedureInfertility,
           Urologynaecology: changedString.categoryOfProcedureUrologynaecology
       },

       typeOfAccess: {
           OpenAbdomen: changedString.typeOfAccessOpenAbdomen,
           Endoscopy: changedString.typeOfAccessEndoscopy,
           Vaginal: changedString.typeOfAccessVaginal
       },


        preOperICD10Codes: changedString.preOperICD10Codes,

       performedBy:{
           Consultant: changedString.performedByConsultant,
           Fellow: changedString.performedByFellow,
           Registrar: changedString.performedByRegistrar,
           Intern: changedString.performedByIntern
       },
       
	DygnosisNotOnICD10List: changedString.DygnosisNotOnICD10List,
	
	ProPerformedCode: changedString.ProPerformedCode,

   IntraOperativeComplications: {
       None: changedString.IntraOperativeComplicationsNone,
       BladderInjury: changedString.IntraOperativeComplicationsBladderInjury,
       BowelInjury:changedString.IntraOperativeComplicationsBowelInjury,
       BRUBT: changedString.IntraOperativeComplicationsBRUBT,
       ProcedureNotCompleted: changedString.IntraOperativeComplicationsProcedureNotCompleted
   },
	
	OtherComplications: changedString.OtherComplications
   });
   

Form.save(function(err){
    if(err) {
    throw err;
    console.log('An error occurred while trying to add data');
    }
    else{console.log('The data has been saved.');
    }
});

});
  
module.exports = router;