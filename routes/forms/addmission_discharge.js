var express = require('express');
var router = express.Router();
var models = require('pims-database');
var AD = models.addmissionDischarge;

router.post('/', function(req, res, next) {

    var jsonString = JSON.stringify(req.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

   var Form = new AD({
       HospitalNumber: changedString.HospitalNumber,

       DateOfBirth:  changedString.DateOfBirth,

       Age: changedString.Age,

       Name: changedString.Name,

       Surname: changedString.Surname,

       DateofAdmission: changedString.DateofAdmission,


       firm:{
           G1: changedString.firmG1,
           G2: changedString.firmG2,
           G3: changedString.firmG3,
           ONC: changedString.firmONC
       },

       Admission:{
           Emergency: changedString.AdmissionEmergency,
           ElectiveSurgery: changedString.AdmissionElectiveSurgery,
           ElectiveOther: changedString.AdmissionElectiveOther
       },

       P: changedString.P,
       G: changedString.G,
       M: changedString.M,
       E: changedString.E,


       HIV: {
           HIVStatus: changedString.HIVHIVStatus,
           CD4: changedString.HIVCD4
       },

       DateofDischarge: changedString.DateofDischarge,

       TotalNumberOfDaysHospital: changedString. TotalNumberOfDaysHospital,

       DaysInWard: changedString.DaysInWard,

       DaysInICU: changedString.DaysInICU,

       DaysInHighCare: changedString.DaysInHighCare,

       FinalDiagnosisOnDischarge: changedString.FinalDiagnosisOnDischarge,

       Miscarriage:{
           Threatening: changedString.MiscarriageThreatening,
           Complete: changedString.MiscarriageComplete,
           Incomplete: changedString.MiscarriageIncomplete,
           Septic: changedString.MiscarriageSeptic
       },
       Salpingitis:{
           ASOI: changedString.SalpingitisASOI,
           ASOII: changedString.SalpingitisASOII,
           ASOIII: changedString.SalpingitisASOIII,
           ASOIV: changedString.SalpingitisASOIV
       },
       Ectopic:{
           Ruptured: changedString.EctopicRuptured,
           Unruptured: changedString.EctopicUnruptured
       },
       BBA: changedString.BBA,
       OtherDiagnosis:changedString.OtherDiagnosis,
       Oncology:{
           Cervix: changedString.OncologyCervix,
           Endometrium: changedString.OncologyEndometrium,
           Ovarian: changedString.OncologyOvarian,
           Vulva: changedString.OncologyVulva,
           Vagina: changedString.OncologyVagina,
           ChorioGTD: changedString.ChorioGTD
       },

       PostOperativeComplications: {
           None: changedString.PostOperativeComplicationsNone,
           BladderInjury: changedString.PostOperativeComplicationsBladderInjury,
           BowelInjury: changedString.PostOperativeComplicationsBowelInjury,
           UretericInjury: changedString.PostOperativeComplicationsUretericInjury,
           AnaestheticComplication: changedString.PostOperativeComplicationsAnaestheticComplication,
           ProcedureNotCompleted: changedString.PostOperativeComplicationsProcedureNotCompleted,
           BRUBT: changedString.PostOperativeComplicationsBRUBT,
           VascularInjury: changedString.PostOperativeComplicationsVascularInjury
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