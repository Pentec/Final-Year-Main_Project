var express = require('express');
var models = require('pims-database');
var AD = models.addmissionDischarge;
var GS = models.gynaecologySurgery;
var CC = models.cervicalCancer;

var submitAdmissionDischarge = function(formData) {

    var success = false;
    var jsonString = JSON.stringify(formData.body);
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
            success = false;
        }
        else{
            success = true;
        }
    });

    return success;
};


var submitGynaecologySurgery = function(formData) {

    var jsonString = JSON.stringify(formData.body);
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
            Elective: changedString.typeOfProcedureElective,
            Emergency: changedString.typeOfProcedureEmergency
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


   var success = Form.save(function(err){
        if(err) {
            return false;
        }
        else{
            return true;
        }
    });

    return success ;
};


var submitCervicalCancer = function(formData) {

    var success = false;
    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new CC({
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

        HIV:{
            HIVStatus: changedString.HIVHIVStatus,
            CD4: changedString.HIVCD4
        },

        figoStage: {
            Ia1: changedString.figoStageIa1,
            Ia2: changedString.figoStageIa2,
            Ib1: changedString.figoStagIb1,
            Ib2: changedString.figoStageIb2,
            IIa1: changedString.figoStageIIa1,
            IIa2: changedString.figoStageIIa2,
            IIb : changedString.figoStageIIb,
            IIIa : changedString.figoStageIIIa,
            IIIb :changedString.figoStageIIIb,
            IVa : changedString.figoStageIVa,
            IVb : changedString.figoStageIVb,
            Unknown: changedString.figoStageUnknown
        },

        tumor: {
            tumorSize:{
                lessThan4: changedString.tumortumorSizelessThan4,
                greaterThan4: changedString.tumortumorSizegreaterThan4,
                Unknown: changedString.tumortumorSizeUnknown
            },

            depthOfInvasion: changedString.tumordepthOfInvasion
        },


        imaging:{

            useOfImagingDiagnosticTools: {

                Yes: changedString.imaginguseOfImagingDiagnosticToolsYes,
                No: changedString.imaginguseOfImagingDiagnosticToolsNo,
                Unknown: changedString.imaginguseOfImagingDiagnosticToolsUnknown
            },

            ifYes:{
                MRI: changedString.imagingifYesMRI,
                CT: changedString.imagingifYesCT,
                Ultrasound: changedString.imagingifYesUltrasound,
                PET: changedString.imagingifYesPET,
                Other: changedString.imagingifYesOther,
                Unknown: changedString.imagingifYesUnknown
            }
        },

        siteOfDistantMetastase: {
            Nil: changedString.siteOfDistantMetastaseNil,
            Lung: changedString.siteOfDistantMetastaseLung,
            Liver: changedString.siteOfDistantMetastaseLiver,
            Bowel: changedString.siteOfDistantMetastaseBowel,
            Bone: changedString.siteOfDistantMetastaseBone,
            Brain: changedString.siteOfDistantMetastaseBrain,
            Other : changedString.siteOfDistantMetastaseOther,
            Unknown : changedString.siteOfDistantMetastaseUnknown
        },

        Histology: {
            Squamous: changedString.HistologySquamous,
            Adeno: changedString.HistologyAdeno,
            Adenosquamous: changedString.HistologyAdenosquamous,
            Clearcell: changedString.HistologyClearcell,
            Other: changedString.HistologyOther,
            Unknown : changedString.HistologyUnknown
        },

        Differentiation: {
            Well: changedString.DifferentiationWell,
            Moderately: changedString.DifferentiationModerately,
            Poorly: changedString.DifferentiationPoorly
        },

        lymphovascularSpaceInvolvement: {
            Absent: changedString.lymphovascularSpaceInvolvementAbsent,
            Present: changedString.lymphovascularSpaceInvolvementPresent,
            Unknown: changedString.lymphovascularSpaceInvolvementUnknown
        },

        primaryTreatment: {

            Nil: changedString.primaryTreatmentNil,
            SurgeryAlone: changedString.primaryTreatmentSurgeryAlone,
            RTAlone: changedString.primaryTreatmentRTAlone,
            NeoAdjuvantCTSurgery: changedString.primaryTreatmentNeoAdjuvantCTSurgery,
            SurgeryAdjuvantRTCRT: changedString.primaryTreatmentSurgeryAdjuvantRTCRT,
            SurgeryAdjuvantCT: changedString.primaryTreatmentSurgeryAdjuvantCT,
            Chemoradiation: changedString.primaryTreatmentChemoradiation,
            CTAlone : changedString.primaryTreatmentCTAlone,
            Other : changedString.primaryTreatmentOther,
            Unknown : changedString.primaryTreatmentUnknown,
            DateofTreatment: changedString.primaryTreatmentDateofTreatment
        },

        typeOfSurgery: {
            Conization: changedString.typeOfSurgeryConization,
            AmputationOfCervix: changedString.typeOfSurgeryAmputationOfCervix,
            RTNoLND: changedString.typeOfSurgeryRTNoLND,
            RTwithLND: changedString.typeOfSurgeryRTwithLND,
            TAHnoLND: changedString.typeOfSurgeryTAHnoLND,
            TAHwithLND: changedString.typeOfSurgeryTAHwithLND,
            VHnoLND : changedString.typeOfSurgeryVHnoLND,
            VHwithLND : changedString.typeOfSurgeryVHwithLND,
            RHnoLND : changedString.typeOfSurgeryRHnoLND,
            RHwithLND : changedString.typeOfSurgeryRHwithLND,
            RadVHnoLND : changedString.typeOfSurgeryRadVHnoLND,
            RadVHwithLND: changedString.typeOfSurgeryRadVHwithLND,
            AnyKindOfExenteration: changedString.typeOfSurgeryAnyKindOfExenteration,
            Unknown: changedString.typeOfSurgeryUnknown,
            Other: changedString.typeOfSurgeryOther,
            DateofSurgery : changedString.typeOfSurgeryDateofSurgery
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

        responseToTreatment: {
            Complete: changedString.responseToTreatmentComplete,
            Partial: changedString.responseToTreatmentPartial,
            StableDisease: changedString.responseToTreatmentStableDisease,
            ProgressiveDisease: changedString.responseToTreatmentProgressiveDisease,
            NotAssessable: changedString.responseToTreatmentNotAssessable,
            Unknown: changedString.responseToTreatmentUnknown,
            Dateofassessment: changedString.responseToTreatmentDateofassessment
        },

        surgicalPathologicalEvaluation :{
            tumorSize: {
                lessThan4:changedString.surgicalPathologicalEvaluationtumorSizelessThan4,
                greaterThan4: changedString.surgicalPathologicalEvaluationtumorSizegreaterThan4,
                Unknown: changedString.surgicalPathologicalEvaluationtumorSizeUnknown
            }
        },

        lymphnodeInvolvementAtSurgery: {
            Notevaluated: changedString.lymphnodeInvolvementAtSurgeryNotevaluated,
            Posnodes: changedString.lymphnodeInvolvementAtSurgeryPosnodes,
            Negnodes: changedString.lymphnodeInvolvementAtSurgeryNegnodes,
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

        numberOfNodesPositive: {
            Pelvic: changedString.numberOfNodesPositivePelvic,
            Paraortic: changedString.numberOfNodesPositiveParaortic
        },

        Relapse: {
            Yes:changedString.RelapseYes,
            No: changedString.RelapseNo,
            Unknown: changedString.RelapseUnknown,
            DateOfRelapseDiagnosis:changedString.RelapseDateOfRelapseDiagnosis
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

        causeOfDeath : {
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
            success = false;
        }
        else{
            success = true;
        }
    });

    return success;
};

module.exports = {
    submitGynaecologySurgery: submitGynaecologySurgery,
    submitAdmissionDischarge: submitAdmissionDischarge,
    submitCervicalCancer: submitCervicalCancer
};