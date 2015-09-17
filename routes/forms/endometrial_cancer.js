var express = require('express');
var router = express.Router();
var submodules = "../../sub_modules/";
var models = require(submodules + 'pims-database/database');
var EC = models.endometrialCancer;

router.post('/', function(req, res, next) {

    var jsonString = JSON.stringify(req.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

   var Form = new EC({
    Name: changedString.Name,

    Surname: changedString.Surname,

    HospitalNumber: changedString.HospitalNumber,

    ID: changedString.ID,

    DateOfBirth: changedString.DateOfBirth,

    DateOfDiagnosis: changedString.DateOfDiagnosis,

    CellPhone:{
    First: changedString.CellPhoneFirst,
    Alternative: changedString.CellPhoneAlternative
    },

    HIVStatus:{
    Negative: changedString.HIVStatusNegative,
    Positive: changedString.HIVStatusPositive
	    },

    CD4:  changedString.CD4,

   figoStage: {
    Ia: changedString.figoStageIa,
    Ib: changedString.figoStageIb,
    Ic: changedString.figoStagIc,
    IIa: changedString.figoStageIIa,
    IIb: changedString.figoStageIIb,
    IIIa: changedString.figoStageIIIa,
    IIIb: changedString.figoStageIIIb,
    IIIc: changedString.figoStageIIIc,
    IVa:changedString.figoStageIVa ,
    IVb: changedString.figoStageIVb,
    SurgicalStageUnavailable:changedString.figoStageSurgicalStageUnavailable,
    Unknown: changedString.figoStageUnknown
    },

    Histology: {
        NilUnclassifiable: changedString.HistologyNilUnclassifiable,
        EndometrioidAdeno: changedString.HistologyEndometrioidAdeno,
        Adenosquamous: changedString.HistologyEndometrioidAdeno,
        Clearcell: changedString.Histology Clearcell,
        MucinousAdeno: changedString.HistologyMucinousAdeno,
        PapillarySerous: changedString.HistologyPapillarySerous,
	Squamous: changedString.HistologySquamous,
        Other: changedString.HistologyOther,
        Unknown : changedString.HistologyUnknown,
    },

   Differentiation: {
    Well: changedString.DifferentiationWell,
    Moderately: changedString.DifferentiationModerately,
    Poorly: changedString.DifferentiationPoorly,
    Unknown: changedString.DifferentiationUnknown
    },

    lymphovascularSpaceInvolvement: {
    Absent: changedString.lymphovascularSpaceInvolvementAbsent,
    Present: changedString.lymphovascularSpaceInvolvementPresent,
    Unknown: changedString.lymphovascularSpaceInvolvementUnkn

   primaryTreatment: {
    Nil: changedString.primaryTreatmentNil,
    SurgeryAlone: changedString.primaryTreatmentSurgeryAlone,
    SurgeryAdjuvantRT: changedString.primaryTreatmentSurgeryAdjuvantRT,
    SurgeryAdjuvantCT: changedString.primaryTreatmentSurgeryAdjuvantCT,
    AdjuvantHT: changedString.primaryTreatmentSurgeryAdjuvantHT,
    HormonalPrimaryTherapy : changedString.primaryTreatmentHormonalPrimaryTherapy,
    Other : changedString.primaryTreatmentOther,
    Unknown : changedString.primaryTreatmentUnknown,
    DateofTreatment: changedString.primaryTreatmentDateofTreatment
    },

    typeOfSurgery: {
    SimpleAbdHystNoLND: changedString.typeOfSurgerySimpleAbdHystNoLND,
    SimpleAbdHystWithLND: changedString.typeOfSurgerySimpleAbdHystWithLND,
    SimpleVagHystNoLND: changedString.typeOfSurgerySimpleVagHystNoLND,
    SimpleVagHystWithLND: changedString.typeOfSurgerySimpleVagHystWithLND,
    RadicalAbdHystNoLND: changedString.typeOfSurgeryRadicalAbdHystNoLND,
    RadicalAbdHystWithLND: changedString.typeOfSurgeryRadicalAbdHystWithLND,
    AnyKindOfexenteration : changedString.typeOfSurgeryAnyKindOfexenteration,
    Unknown: changedString.typeOfSurgeryUnknown,
    Other: changedString.typeOfSurgeryOther,
    DateofSurgery : changedString.typeOfSurgeryDateofSurgery
    },

   LymphovascularSpaceInvolvement: {
    Absent: changedString.LymphovascularSpaceInvolvementAbsent,
    Present: changedString.LymphovascularSpaceInvolvementPresent,
    Unknown: changedString.lymphnodeInvolvementAtSurgeryUnknown
    },

    nodesInvolved: {
    Onlypelvic: changedString.nodesInvolvedOnlypelvic,
    Pelvicparaortic:changedString.nodesInvolvedPelvicparaortic,
    Onlyparaortic: changedString.nodesInvolvedOnlyparaortic,
    Unknown: changedString.nodesInvolvedUnknown
    },

    numberOfNodesExamined : {
    Pelvic: changedString.numberOfNodesExaminedPelvic,
    Paraortic: changedString.numberOfNodesExaminedParaortic
    },

    /*---SURGICAL PATHOLOGICAL EVALUATION---*/

    Cytology: {
        NotAvailable: changedString.CytologyNotAvailable,
        Negative: changedString.CytologyNegative,
        Positive: changedString.CytologyPositive,
        Unknown : changedString.CytologyUnknown ,
    }

    Metastase: {
    Nil: changedString.MetastaseNil,
    UterineSerosa: changedString.MetastaseUterineSerosa,
    Vagina: changedString.MetastaseVagina,
    Adnexa: changedString.MetastaseAdnexa,
    BladdeBowelMucosa: changedString.MetastaseBladdeBowelMucosa,
    IntraAbdominal: changedString.MetastaseIntraAbdominal,
    InguinalNodes: changedString.MetastaseInguinalNodes,
    Distant : changedString.MetastaseDistant,
    Unknown : changedString.MetastaseUnknown
    },


    typeOfRadiotherapy: {
    Intracavitary: changedString.typeOfRadiotherapyIntracavitary,
    ExternalPelvicRT: changedString.typeOfRadiotherapyExternalPelvicRT,
    ExternalPelvicParaortic: changedString.typeOfRadiotherapyExternalPelvicParaortic,
    ExternalPelvicIntracavitary: changedString.typeOfRadiotherapyExternalPelvicIntracavitary,
    ExtpelvicParaortIntracavitary: changedString.typeOfRadiotherapyExtpelvicParaortIntracavitary,
    Unknown: changedString.typeOfRadiotherapyUnknown,
    DateStarted: changedString.typeOfRadiotherapyDateStarted,
    DateEnded: changedString.typeOfRadiotherapyDateEnded
    },

    typeOfChemotherapy:{
    Chemotherapy: changedString.typeOfChemotherapyChemotherapy,
    DateStarted: changedString.typeOfChemotherapyDateStarted,
    DateEnded: changedString.typeOfChemotherapyDateEnded
    },

 HormonalTreatment: {
        SingleDrug : changedString.tHormonalTreatmentSingleDrug,
        MultipleDrug : changedString.tHormonalTreatmentMultipleDrug,
        Unknown: changedString.tHormonalTreatmentUnknown,
        DateStarted: changedString.tHormonalTreatmentDateStarted,
        DateEnded: changedString.tHormonalTreatmentDateEnded
    },

    responseToTreatment: {
    Complete: changedString.responseToTreatmentComplete,
    Partial: changedString.responseToTreatmentPartial,
    StableDisease: changedString.responseToTreatmentStableDisease,
    ProgressiveDisease: changedString.responseToTreatmentProgressiveDisease,
    NotAssessable: changedString.responseToTreatmentNotAssessable,
    Unknown: changedString.responseToTreatmentUnknown,
    Dateofassessment: changedString.responseToTreatmentDateofassessment
    },
/*--------------------------------completed-------------------------------------------------*/

    Histology: {
        Squamous: changedString.HistologySquamous,
        Adeno: changedString.HistologyAdeno,
        Adenosquamous: changedString.HistologyAdenosquamous,
        Clearcell: changedString.HistologyClearcell,
        Other: changedString.HistologyOther,
        Unknown : changedString.HistologyUnknown
    },

    typeOfRadiotherapy: {
    Intracavitary: changedString.typeOfRadiotherapyIntracavitary,
    ExternalPelvicRT: changedString.typeOfRadiotherapyExternalPelvicRT,
    ExternalPelvicParaortic: changedString.typeOfRadiotherapyExternalPelvicParaortic,
    ExternalPelvicIntracavitary: changedString.typeOfRadiotherapyExternalPelvicIntracavitary,
    ExtpelvicParaortIntracavitary: changedString.typeOfRadiotherapyExtpelvicParaortIntracavitary,
    Unknown: changedString.typeOfRadiotherapyUnknown,
    DateStarted: changedString.typeOfRadiotherapyDateStarted,
    DateEnded: changedString.typeOfRadiotherapyDateEnded
    },



    surgicalPathologicalEvaluation :{
    tumorSize: {
    lessThan4:changedString.surgicalPathologicalEvaluationtumorSizelessThan4,
    greaterThan4: changedString.surgicalPathologicalEvaluationtumorSizegreaterThan4,
    Unknown: changedString.surgicalPathologicalEvaluationtumorSizeUnknown
    }
    },


    numberOfNodesPositive: {
    Pelvic: changedString.numberOfNodesPositivePelvic,
    Paraortic: changedString.numberOfNodesPositiveParaortic
    },


    SiteOfRelapse: {
    Local: changedString.SiteOfRelapseLocal,
    Metastatic: changedString.SiteOfRelapseMetastatic,
    Localandmetastatic:changedString.SiteOfRelapseLocalandmetastatic,
    Unknown: changedString.SiteOfRelapseUnknown
    },

    TreatmentAtRelapse: {
    Local: changedString.TreatmentAtRelapseLocal,
    Surgery: changedString.TreatmentAtRelapseSurgery,
    RT: changedString.TreatmentAtRelapseRT,
    CT: changedString.TreatmentAtRelapseCT,
    SurgeryRT: changedString.TreatmentAtRelapseSurgeryRT,
    CTRT: changedString.TreatmentAtRelapseCTRT,
    Other: changedString.TreatmentAtRelapseOther,
    Unknown: changedString.TreatmentAtRelapseUnknown
    },

    DateOfFolllowup: changedString.DateOfFolllowup,

    lastKnownVitalStatus: {
    AliveUnknownDiseaseStatus: changedString.lastKnownVitalStatusAliveUnknownDiseaseStatus,
    AliveAndNoEvidenceOfDisease:changedString.lastKnownVitalStatusAliveAndNoEvidenceOfDisease,
    AliveWithDisease: changedString.lastKnownVitalStatusAliveWithDisease,
    Dead: changedString.lastKnownVitalStatusDead
    },

    causeOfDeath :{
    CaCx: changedString.causeOfDeathCaCx,
    Otherprimarycancer: changedString.causeOfDeathOtherprimarycancer,
    Treatmentrelatedcause: changedString.causeOfDeathTreatmentrelatedcause,
    Intercurrentdisease: changedString.causeOfDeathIntercurrentdisease,
    Unknowncauses: changedString.causeOfDeathUnknowncauses,
    DateOfDeath: changedString.causeOfDeathDateOfDeath
    }

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