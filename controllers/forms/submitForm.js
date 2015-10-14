var express = require('express');
var submodules = "../../sub-modules/"
var models = require(submodules + 'pims-database/database');
var AD = models.addmissionDischarge;
var GS = models.gynaecologySurgery;
var CC = models.cervicalCancer;
var EC = models.endometrialCancer;
var FP = models.fallopianTubeCancer;
var OC = models.oncologyFollowUpVisit;
var VagC = models.vaginalCancer;
var VulC = models.vulvaCancer;
var OvaC = models.overianCancer;
var GTN = models.gTNCancer;
var Hyst = models.hysteroscopyDataSheet;
var CritInd = models.gynaeCritical_Incident_DataCollection;

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


var submitGynaecologySurgery = function(formData) {

    var success = false;

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

var submitEndometrialCancer = function(formData){

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new EC({
        Name:changedString.Name ,

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
            Negative:changedString.HIVStatusNegative,
            Positive: changedString.HIVStatusPositive
        },

        CD4: changedString.CD4,

        figoStage: {
            Ia: changedString.figoStageIa,
            Ib: changedString.figoStageIb,
            Ic: changedString.figoStageIc,
            IIa: changedString.figoStageIIa,
            IIb: changedString.figoStageIIb,
            IIIa: changedString.figoStageIIIa,
            IIIb: changedString.figoStageIIIb,
            IIIc: changedString.figoStageIIIc,
            IVa : changedString.figoStageIVa,
            IVb : changedString.figoStageIVb,
            Unknown: changedString.figoStageUnknown,
            StageUnavailable: changedString.figoStageStageUnavailable
        },

        Histology: {
            NilUnclassifiable: changedString.HistologyNilUnclassifiable,
            EndometrioidAdeno: changedString.HistologyEndometrioidAdeno,
            Adenosquamous: changedString.HistologyAdenosquamous,
            Clearcell: changedString.HistologyClearcell,
            MucinousAdeno: changedString.HistologyMucinousAdeno,
            PapillarySerous: changedString.HistologyPapillarySerous,
            Squamous: changedString.HistologySquamous,
            Other: changedString.HistologyOther,
            Unknown : changedString.HistologyUnknown
        },

        Differentiation: {
            Well: changedString.DifferentiationWell,
            Moderately: changedString.DifferentiationModerately,
            Poorly: changedString.DifferentiationPoorly,
            Unknown : changedString.DifferentiationUnknown
        },

        LymphovascularSpaceInvolvement: {
            Absent: changedString.LymphovascularSpaceInvolvementAbsent,
            Present: changedString.LymphovascularSpaceInvolvementPresent,
            Unknown: changedString.LymphovascularSpaceInvolvementUnknown
        },


        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation HT = Hormonal treatment)---*/
        primaryTreatmentPerformed : {
            Nil: changedString.primaryTreatmentPerformedNil,
            SurgeryAlone: changedString.primaryTreatmentPerformedSurgeryAlone,
            SurgeryAdjuvantRT: changedString.primaryTreatmentPerformedSurgeryAdjuvantRT,
            SurgeryAdjuvantCT: changedString.primaryTreatmentPerformedSurgeryAdjuvantCT,
            AdjuvantHT: changedString.primaryTreatmentPerformedAdjuvantHT,
            HormonalPrimaryTherapy: changedString.primaryTreatmentPerformedHormonalPrimaryTherapy,
            Other : changedString.primaryTreatmentPerformedOther,
            Unknown : changedString.primaryTreatmentPerformedUnknown,
            DateofTreatment : changedString.primaryTreatmentPerformedDateofTreatment
        },


        /*--(RH= Radical hysterectomy; LND= pelvic/paraortic lymphadenectomy)--*/
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


        nodesInvolved: {
            Onlypelvic: changedString.nodesInvolvedOnlypelvic,
            Pelvicparaortic: changedString.nodesInvolvedPelvicparaortic,
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

        /*---SURGICAL PATHOLOGICAL EVALUATION---*/

        Cytology: {
            NotAvailable : changedString.CytologyNotAvailable,
            Negative: changedString.CytologyNegative,
            Positive: changedString.CytologyPositive,
            Unknown : changedString.CytologyUnknown
        },

        Metastase: {
            Nil: changedString.MetastaseNil,
            UterineSerosa: changedString.MetastaseUterineSerosa,
            Vagina: changedString.MetastaseVagina,
            Adnexa: changedString.MetastaseAdnexa,
            BladdeBowelMucosa: changedString.MetastaseBladdeBowelMucosa,
            IntraAbdominal: changedString.MetastaseIntraAbdominal,
            InguinalNodes: changedString.MetastaseInguinalNodes,
            Distant: changedString.MetastaseDistant,
            Unknown : changedString.MetastaseUnknown
        },

        typeOfRadiotherapy: {
            Intracavitary: changedString.typeOfRadiotherapyIntracavitary,
            ExternalPelvicRT: changedString.typeOfRadiotherapyExternalPelvicRT,
            ExternalPelvicParaortic: changedString.typeOfRadiotherapyExternalPelvicParaortic,
            ExternalPelvicIntracavitary:changedString.typeOfRadiotherapyExternalPelvicIntracavitary,
            ExtpelvicParaortIntracavitary: changedString.typeOfRadiotherapyExtpelvicParaortIntracavitary,
            Unknown: changedString.typeOfRadiotherapyUnknown,
            DateStarted: changedString.typeOfRadiotherapyDateStarted,
            DateEnded: changedString.typeOfRadiotherapyDateEnded
        },

        typeOfChemotherapy:{
            Chemotherapy: changedString.typeOfChemotherapyChemotherapy,
            DateStarted:changedString.typeOfChemotherapyDateStarted,
            DateEnded: changedString.typeOfChemotherapyDateEnded
        },

        HormonalTreatment: {
            SingleDrug : changedString.HormonalTreatmentSingleDrug,
            MultipleDrug : changedString.HormonalTreatmentMultipleDrug,
            Unknown: changedString.HormonalTreatmentUnknown,
            DateStarted: changedString.HormonalTreatmentDateStarted,
            DateEnded: changedString.HormonalTreatmentDateEnded
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

        Relapse: {
            Yes: changedString.RelapseYes,
            No: changedString.RelapseNo,
            Unknown: changedString.RelapseUnknown,
            DateOfRelapseDiagnosis: changedString.RelapseDateOfRelapseDiagnosis
        },

        siteOfDistantMetastase: {
            Local: changedString.siteOfDistantMetastaseLocal,
            Metastatic: changedString.siteOfDistantMetastaseMetastatic,
            LocalAndMetastatic: changedString.siteOfDistantMetastaseLocalAndMetastatic,
            Unknown : changedString.siteOfDistantMetastaseUnknown
        },


        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/
        TreatmentAtRelapse: {
            Nil:changedString.TreatmentAtRelapseNil,
            Surgery: changedString.TreatmentAtRelapseSurgery,
            RT: changedString.TreatmentAtRelapseRT,
            CT: changedString.TreatmentAtRelapseCT,
            SurgeryRT: changedString.TreatmentAtRelapseSurgeryRT,
            CTRT: changedString.TreatmentAtRelapseCTRT,
            HT: changedString.TreatmentAtRelapseHT,
            Other: changedString.TreatmentAtRelapseOther,
            Unknown: changedString.TreatmentAtRelapseUnknown
        },

        DateOfFolllowup: changedString.DateOfFolllowup,

        LastKnownVitalStatus: {
            AliveUnknownDiseaseStatus: changedString.LastKnownVitalStatusAliveUnknownDiseaseStatus,
            AliveAndNoEvidenceOfDisease: changedString.LastKnownVitalStatusAliveAndNoEvidenceOfDisease,
            AliveWithDisease: changedString.LastKnownVitalStatusAliveWithDisease,
            Dead: changedString.LastKnownVitalStatusDead
        },


        causeOfDeath :{
            EndometrialCa: changedString.causeOfDeathEndometrialCa,
            Otherprimarycancer: changedString.causeOfDeathOtherprimarycancer,
            Treatmentrelatedcause: changedString.causeOfDeathTreatmentrelatedcause,
            Intercurrentdisease: changedString.causeOfDeathIntercurrentdisease,
            Unknowncauses: changedString.causeOfDeathUnknowncauses,
            DateOfDeath: changedString.causeOfDeathDateOfDeath
        }
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

var submitFallopianTubeCancer = function(formData){

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new FP({

        HospitalNumber: changedString.HospitalNumber,

        DateOfBirth: changedString.DateOfBirth,

        Age: changedString.Age,

        ID: changedString.ID,

        Name: changedString.Name,

        Surname: changedString.Surname,

        DateOfDiagnosis: changedString.DateOfDiagnosis,

        HIVStatus: changedString.HIVStatus,

        CD4: changedString.CD4,

        figoStage: {
            Ia: changedString.figoStageIa,
            Ib: changedString.figoStageIb,
            Ic: changedString.figoStageIc,
            IIa: changedString.figoStageIIa,
            IIb: changedString.figoStageIIb,
            IIc: changedString.figoStageIIc,
            IIIa: changedString.figoStageIIIa,
            IIIb: changedString.figoStageIIIb,
            IIIc: changedString.figoStageIIIc,
            IV: changedString.figoStageIV,
            Unknown: changedString.figoStageUnknown
        },

        //Site of distant matastases (when appropriate)
        SiteOfDistantMatastases:{
            PleuralEffusion: changedString.SiteOfDistantMatastasesPleuralEffusion,
            Liver: changedString.SiteOfDistantMatastasesLiver,
            Brain: changedString.SiteOfDistantMatastasesBrain,
            Othersite: changedString.SiteOfDistantMatastasesOthersite,
            Unknown: changedString.SiteOfDistantMatastasesUnknown
        },


        //Histology
        Histology: {
            Nohistology: changedString.HistologyNohistology,
            Serousadenocarcinoma: changedString.HistologySerousadenocarcinoma,
            Mucinousadenocarcinoma: changedString.HistologyMucinousadenocarcinoma,
            Endometroidadenocarcinoma: changedString.HistologyEndometroidadenocarcinoma,
            Clearcelladenocarcinoma: changedString.HistologyClearcelladenocarcinoma,
            Adenoacanthoma : changedString.HistologyAdenoacanthoma,
            Adenosquamous : changedString.HistologyAdenosquamous,
            Undifferentiatedcarcinoma : changedString.HistologyUndifferentiatedcarcinoma,
            Unknown : changedString.HistologyUnknown
        },


        //Differentiation
        Differentiation: {
            Well:changedString.DifferentiationWell,
            Moderately: changedString.DifferentiationModerately,
            Poorly: changedString.DifferentiationPoorly
        },

        //Treatments performed (RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation)
        TreatmentPerformed:{
            Nil: changedString.TreatmentPerformedNil,
            SurgeryAlone: changedString.TreatmentPerformedSurgeryAlone,
            RTAlone: changedString.TreatmentPerformedRTAlone,
            NeoAdjuvantCTSurgery: changedString.TreatmentPerformedNeoAdjuvantCTSurgery,
            SurgeryAdjuvantRT: changedString.TreatmentPerformedSurgeryAdjuvantRT,
            SurgeryAdjuvantCT: changedString.TreatmentPerformedSurgeryAdjuvantCT,
            OtherNonStandardTreatments: changedString.TreatmentPerformedOtherNonStandardTreatments,
            Unknown : changedString.TreatmentPerformedUnknown,
            DateOfTreatment  : changedString.TreatmentPerformedDateOfTreatment
        },


        //Type of surgery (LND: pelvic/paraortic l/node dissection; USO: Unilateral salping-oopherectomy; BSO: bilateral salpingo-oopherectomy)
        TypeOfSurgery: {
            USOwithoutLND: changedString.TypeOfSurgeryUSOwithoutLND,
            USOwithLND: changedString.TypeOfSurgeryUSOwithLND,
            BSOwithoutLND: changedString.TypeOfSurgeryBSOwithoutLND,
            BSOwithLND: changedString.TypeOfSurgeryBSOwithLND,
            TAHBSOOmentectomymultiplebiopsiesnoLND: changedString.TypeOfSurgeryTAHBSOOmentectomymultiplebiopsiesnoLND,
            TAHBSOomentectomymultiplebiopsieswithLND: changedString.TypeOfSurgeryTAHBSOomentectomymultiplebiopsieswithLND,
            ExplorativeLaparotomylaparoscopy : changedString.TypeOfSurgeryExplorativeLaparotomylaparoscopy,
            Othertypeofsurgery :changedString.TypeOfSurgeryOthertypeofsurgery,
            Unknown:changedString.TypeOfSurgeryUnknown,
            Other: changedString.TypeOfSurgeryOther,
            DateofSurgery : changedString.TypeOfSurgeryDateofSurgery
        },


        //Type of Radiotherapy
        TypeofRadiotherapy: {
            Intracavitary: changedString.TypeofRadiotherapyIntracavitary,
            ExternalpelvicRT: changedString.TypeofRadiotherapyExternalpelvicRT,
            Externalpelvicparaortic: changedString.TypeofRadiotherapyExternalpelvicparaortic,
            Externalpelvicintracavitary: changedString.TypeofRadiotherapyExternalpelvicintracavitary,
            Extpelvicparaorticintracavitary: changedString.TypeofRadiotherapyExtpelvicparaorticintracavitary,
            Intraperitonealradioisotopes: changedString.TypeofRadiotherapyIntraperitonealradioisotopes,
            Other: changedString.TypeofRadiotherapyOther,
            Unknown: changedString.TypeofRadiotherapyUnknown,
            DateStarted: changedString.TypeofRadiotherapyDateStarted,
            DateEnded: changedString.TypeofRadiotherapyDateEnded
        },


        //Type of Chemotherapy (CT = Chemotherapy, PC = platinum compound, Completed / uncompleted refers to full course)
        TypeofChemotherapy: {
            Type1: changedString.TypeofChemotherapyType1,
            Type2: changedString.TypeofChemotherapyType2,
            Type3: changedString.TypeofChemotherapyType3,
            Type4: changedString.TypeofChemotherapyType4,
            Type5: changedString.TypeofChemotherapyType5,
            Type6: changedString.TypeofChemotherapyType6,
            Type7: changedString.TypeofChemotherapyType7,
            Type8: changedString.TypeofChemotherapyType8,
            Type9: changedString.TypeofChemotherapyType9,
            Type10: changedString.TypeofChemotherapyType10,
            Type11: changedString.TypeofChemotherapyType11,
            Type12: changedString.TypeofChemotherapyType12,
            Type13: changedString.TypeofChemotherapyType13,
            Type14: changedString.TypeofChemotherapyType14,
            Type15: changedString.TypeofChemotherapyType15,
            Type16: changedString.TypeofChemotherapyType16,
            Unknown: changedString.TypeofChemotherapyUnknown,
            DateStarted: changedString.TypeofChemotherapyDateStarted,
            DateEnded: changedString.TypeofChemotherapyDateEnded
        },


        //Response to treatment
        ResponseToTreatment: {
            Complete: changedString.ResponseToTreatmentComplete,
            Partial: changedString.ResponseToTreatmentPartial,
            StableDisease: changedString.ResponseToTreatmentStableDisease,
            ProgressiveDisease: changedString.ResponseToTreatmentProgressiveDisease,
            NotAssessable: changedString.ResponseToTreatmentNotAssessable,
            Unknown: changedString.ResponseToTreatmentUnknown,
            DateOfAssessment: changedString.ResponseToTreatmentDateOfAssessment
        },


        //Surgical pathological evaluation
        //Size of tumor outside Fallopian tube at opening of abdomen
        SPETumorSize: {
            NoMacroscopicDisease: changedString.SPETumorSizeNoMacroscopicDisease,
            BTEThan2: changedString.SPETumorSizeBTEThan2,
            Between2And10: changedString.SPETumorSizeBetween2And10,
            BT10: changedString.SPETumorSizeBT10,
            Unknown: changedString.SPETumorSizeUnknown
        },


        //Diameter of residual implants (after surgery)
        SPEtumorsizeAS: {
            NoMacroscopicResDisease: changedString.SPEtumorsizeASNoMacroscopicResDisease,
            LT05: changedString.SPEtumorsizeASLT05,
            Between05And1: changedString.SPEtumorsizeASBetween05And1,
            Between1and2: changedString.SPEtumorsizeASBetween1and2,
            BT2: changedString.SPEtumorsizeASBT2,
            Unknown: changedString.SPEtumorsizeASUnknown
        },


        //Lymph node involvement in upfront surgery (histologically)
        LymphNodeInvolvementAtSurgery: {
            Notevaluated: changedString.LymphNodeInvolvementAtSurgeryNotevaluated,
            PosNodes: changedString.LymphNodeInvolvementAtSurgeryPosNodes,
            NegNodes: changedString.LymphNodeInvolvementAtSurgeryNegNodes,
            Unknown: changedString.LymphNodeInvolvementAtSurgeryUnknown
        },


        //Nodes involved
        Nodesinvolved: {
            Onlypelvic: changedString.NodesinvolvedOnlypelvic,
            PelvicParaorticInguinal: changedString.NodesinvolvedPelvicParaorticInguinal,
            OnlyInguinal: changedString.NodesinvolvedOnlyInguinal,
            Unknown: changedString.NodesinvolvedUnknown
        },


        //Number of nodes examined
        NumberOfNodesExamined: {
            Pelvic: changedString.NumberOfNodesExaminedPelvic,
            PelvicParaortic: changedString.NumberOfNodesExaminedPelvicParaortic
        },


        //Number of nodes positive
        NumberOfNodesPositive : {
            Pelvic: changedString.NumberOfNodesPositivePelvic,
            PelvicParaortic: changedString.NumberOfNodesPositivePelvicParaortic
        },


        //Cytology (Presence of malignant cells)
        Cytology: {
            NotEvaluated: changedString.CytologyNotEvaluated,
            Positive: changedString.CytologyPositive,
            Negative: changedString.CytologyNegative,
            Unknown: changedString.CytologyUnknown
        },

        //Second surgery
        SecondSurgery: {
            IntervalDebulking: changedString.SecondSurgeryIntervalDebulking,
            SecondLook: changedString.SecondSurgerySecondLook,
            SecondSurgicalEffort: changedString.SecondSurgerySecondSurgicalEffort,
            Unknown: changedString.SecondSurgeryUnknown,
            DateOfSecondSurgery: changedString.SecondSurgeryDateOfSecondSurgery
        },


        //Status at second surgery
        StatusAtSecondSurgery: {
            CompleteRemission: changedString.StatusAtSecondSurgeryCompleteRemission,
            MicroscopicDisease: changedString.StatusAtSecondSurgeryMicroscopicDisease,
            NoSingleImplant: changedString.StatusAtSecondSurgeryNoSingleImplant,
            ImplantsBT1: changedString.StatusAtSecondSurgeryImplantsBT1,
            PosRetroperNodes: changedString.StatusAtSecondSurgeryPosRetroperNodes,
            Unknown: changedString.StatusAtSecondSurgeryUnknown
        },


        //Status after second surgery
        StatusAfterSecondSurgery: {
            NoMacroscopicDiseaseLeft: changedString.StatusAfterSecondSurgeryNoMacroscopicDiseaseLeft,
            MacroscopicDiseaseLT1:changedString.StatusAfterSecondSurgeryMacroscopicDiseaseLT1,
            MacroscopicDiseaseBT1: changedString.StatusAfterSecondSurgeryMacroscopicDiseaseBT1,
            Unknown: changedString.StatusAfterSecondSurgeryUnknown
        },


        //Relapse
        Relapse: {
            Yes: changedString.RelapseYes,
            No: changedString.RelapseNo,
            Unknown: changedString.RelapseUnknown,
            DateOfRelapseDiagnosis: changedString.RelapseDateOfRelapseDiagnosis
        },


        //Site of relapse
        SiteOfRelapse:
        {
            Local: changedString.SiteOfRelapseLocal,
            Metastatic: changedString.SiteOfRelapseMetastatic,
            LocalAndmetastatic: changedString.SiteOfRelapseLocalAndmetastatic,
            Unknown: changedString.SiteOfRelapseUnknown
        },


        //Treatment at relapse (RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy )
        TreatmentAtRelapse: {
            Local: changedString.TreatmentAtRelapseLocal,
            Surgery: changedString.TreatmentAtRelapseSurgery,
            RT: changedString.TreatmentAtRelapseRT,
            CT: changedString.TreatmentAtRelapseCT,
            HT: changedString.TreatmentAtRelapseHT,
            SurgeryRT: changedString.TreatmentAtRelapseSurgeryRT,
            CTRT: changedString.TreatmentAtRelapseCTRT,
            Other: changedString.TreatmentAtRelapseOther,
            Unknown: changedString.TreatmentAtRelapseUnknown
        },


        //Follow-up
        DateOfFolllowup: changedString.DateOfFolllowup,

        LastKnownVitalStatus: {
            AliveUnknownDiseaseStatus: changedString.LastKnownVitalStatusAliveUnknownDiseaseStatus,
            AliveAndNoEvidenceOfDisease: changedString.LastKnownVitalStatusAliveAndNoEvidenceOfDisease,
            AliveWithDisease: changedString.LastKnownVitalStatusAliveWithDisease,
            Dead: changedString.LastKnownVitalStatusDead
        },

        //Death
        CauseOfDeath: {
            FallTubeCa: changedString.CauseOfDeathFallTubeCa,
            OtherPrimaryCancer: changedString.CauseOfDeathOtherPrimaryCancer,
            Treatmentrelatedcause: changedString.CauseOfDeathTreatmentrelatedcause,
            IntercurrentDisease: changedString.CauseOfDeathIntercurrentDisease,
            UnknownCauses: changedString.CauseOfDeathUnknownCauses,
            DateOfDeath:changedString.CauseOfDeathDateOfDeath
        }

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


var submitOncologyFollowUp = function(formData) {

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new OC({

        Name: changedString.Name,

        HospitalNumber:changedString.HospitalNumber,

        DateOfVisit: changedString.DateOfVisit,

        ExaminedByDr: changedString.ExaminedByDr,

        InitialDiagnosisAndStage: changedString.InitialDiagnosisAndStage,

        DateDiagnosed: changedString.DateDiagnosed,

        Complaints: changedString.Complaints,

        ClinicalFindings : changedString.ClinicalFindings,

        AdditionalNotes :changedString.AdditionalNotes ,

        Plan:{
            SpecialInvestigations:changedString.PlanSpecialInvestigations,
            Referral:changedString.PlanReferral,
            Treatment: changedString.PlanTreatment
        },

        NextFollowUpVisit : changedString.NextFollowUpVisit ,

        /*----Please complete after examination---*/

        TimeFromPrimaryTreatment:{
            months: changedString.TimeFromPrimaryTreatmentmonths,
            years:changedString.TimeFromPrimaryTreatmentyears
        },

        LastKnownVitalStatusOfPatient:{
            AliveUnknownDiseaseStatus: changedString.LastKnownVitalStatusOfPatientAliveUnknownDiseaseStatus ,
            AliveNoEvidenceOfDisease: changedString.LastKnownVitalStatusOfPatientAliveNoEvidenceOfDisease ,
            AliveWithDisease: changedString.LastKnownVitalStatusOfPatientAliveWithDisease,
            Dead:changedString.LastKnownVitalStatusOfPatientDead
        },

        Relapse:{
            Yes: changedString.RelapseYes,
            No: changedString.RelapseNo,
            Unknown: changedString.RelapseUnknown
        },

        SiteOfRelapse:{
            Local: changedString.SiteOfRelapseLocal,
            Metastatic: changedString.SiteOfRelapseMetastatic,
            LocalAndMetastatic: changedString.SiteOfRelapseLocalAndMetastatic,
            Unknown: changedString.SiteOfRelapseUnknown
        },

        DateOfRelapseDiagnosis: changedString.DateOfRelapseDiagnosis,


        /*--RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)--*/
        TreatmentAtRelapse:{
            Nil: changedString.TreatmentAtRelapseNil,
            Surgery: changedString.TreatmentAtRelapseSurgery,
            Radiotherapy : changedString.TreatmentAtRelapseRadiotherapy,
            Chemotherapy: changedString.TreatmentAtRelapseChemotherapy,
            HT: changedString.TreatmentAtRelapseHT,
            Surgery_RT : changedString.TreatmentAtRelapseSurgery_RT,
            CT_RT: changedString.TreatmentAtRelapseCT_RT,
            Other: changedString.TreatmentAtRelapseOther,
            Unknown:changedString.TreatmentAtRelapseUnknown
        }

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

var submitCriticalIncident = function(formData){ //CritInd

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new CritInd({

        /*PatName: changedString.PatName,

        Age: changedString.Age,

        HospitalNum: changedString.HospitalNum,

        DateOfIncident:changedString.DateOfIncident,

        Firm:changedString.Firm,

        HIVStatus: changedString.HIVStatus,

        Parity:changedString.Parity,

        Grav: changedString.Grav,

        Admission:
        {
            Elective:changedString.AdmissionElective,
            Emergency:changedString.AdmissionElective,
            Oncology:changedString.AdmissionElective
        },

        Hospital:
        {
            Kalafong:changedString.HospitalKalafong,
            PAH: changedString.HospitalPAH
        },

        /*IntentionOfTreatmentOnAdmission*/
        /*IntentionOfTreatmentOnAdmission:
        {
            Surgical: changedString.IntentionOfTreatmentOnAdmissionSurgical,
            Medical: changedString.IntentionOfTreatmentOnAdmissionMedical,
            Palliative:changedString.IntentionOfTreatmentOnAdmissionPalliative
        },*/

        /*Problems, diagnosis and stages */
       /* PrimaryGynaecologialProblems: changedString.PrimaryGynaecologialProblems,
        Oncology: changedString.Oncology,

        AssociatedMedProblems:changedString.AssociatedMedProblems,
        Oncology: changedString.Oncology,

        SurgicalProceduresAndDatesDone: changedString.SurgicalProceduresAndDatesDone,
        Oncology: changedString.Oncology*/


        /*CRITICAL INCIDENT*/
       /* Event:{
            Death: {
                TickBlock:changedString.AssociatedMedProblems,
                Details:changedString.AssociatedMedProblems},

            ICUadmission: {
                TickBlock: {type: Boolean, title: 'ICU admission'},
                Details: {type: String, title: 'Specify details'}},

            PulmonarymbolismDVT: {
                TickBlock: {type: Boolean, title: 'Pulmonary embolism/DVT'},
                Details: {type: String, title: 'Specify details'}},

            RepeatLap: {
                TickBlock: {type: Boolean, title: 'Repeat laparotomies(specify reason)'},
                Details: {type: String, title: 'Specify details'}},

            UnplannedSurgery: {
                TickBlock: {type: Boolean, title: 'Unplanned surgery'},
                Details: {type: String, title: 'Specify details'}},

            BloodTransfusion: {
                TickBlock: {type: Boolean, title: 'Blood transfusion > 4 units'},
                Details: {type: String, title: 'Specify details'}},

            OrganDysfunction: {
                TickBlock: {type: Boolean, title: 'Organ dysfunction post surgery'},
                Details: {type: String, title: 'Specify details'}},

            Fistula: {Properties:{
                TickBlock: {type: Boolean, title: 'Fistula and other organ damage'},
                Details: {type: String, title: 'Specify details'}}},

            DelayedDiagnosis: {
                TickBlock: {type: Boolean, title: 'Delayed diagnosis'},
                Details: {type: String, title: 'Specify details'}},

            Death: {
                TickBlock: {type: Boolean, title: 'Tick block'},
                Details: {type: String, title: 'Specify details'}},

            OmissionOfProcedure: {
                TickBlock: {type: Boolean, title: 'Omission of procedure'},
                Details: {type: String, title: 'Specify details'}},

            EmergencyHysterec: {
                TickBlock: {type: Boolean, title: 'Emergency hysterectomy'},
                Details: {type: String, title: 'Specify details'}},

            PostOp: {
                TickBlock: {type: Boolean, title: 'Post-op complications requiring surgery'},
                Details: {type: String, title: 'Specify details'}},

            WoundSepsis: {
                TickBlock: {type: Boolean, title: 'Wound sepsis post-op requireing surgery'},
                Details: {type: String, title: 'Specify details'}},

            AnaestheticComplications: {
                TickBlock: {type: Boolean, title: 'Anaesthetic complications'},
                Details: {type: String, title: 'Specify details'}}
        },*/

        /*MODIFIABLE FACTORS*/
        /*---Modifiable Factors (tick type and leave where problem occured)----*/
        /*PatientOrientatedProblems*/
       /* PatientOrientatedProblems:
        {
            LackOfInfo: {type: Boolean, title: 'Lack of information'},
            NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
        },*/

        /*--If either of the above opetions has been selected, do not complete bellow---*/
      /*  IfNoneSelected:
        {
            DelayInSeeingHelp: {type: Boolean, title: 'Delay in seeking medical help'},
            UnsafeAbortion: {type: Boolean, title: 'Unsafe abortion'},
            FamilyProblem: {type: Boolean, title: 'Family problem'},
            CoumminityProblem: {type: Boolean, title: 'Community problem'},
            Other: {type: String, title: 'Other(specify)'}
        },*/

        /*---Emergency Care Problem: (tick type and level where problem occured)---*/
       /* PatientAgeGroup:
        {
            PregnancyRelated: {type: Boolean, title: 'Pregnancy related'},
            ReproductiveYears: {type: Boolean, title: 'Reproductive years'},
            PeriMenopausal: {type: Boolean, title: 'Peri -menopausal'},
            PostMenopausal: {type: Boolean, title: 'Post-menopausaal'}
        },

        Resuscitation:
        {
            LackOfInfo :{type: Boolean, title: 'Lack of information'},
            NoAvoidableFactor: {type: Boolean, title: 'no avoidable factor'}
        },*/

        /*---If either of the above options has been selected, do not complete bellow--*/
        /*DoNotCompleteIfAboveSelected:
        {
            AirwaysProblem: {type: Boolean, title: 'Airways problem'},
            BreathingProblem: {type: Boolean, title: 'Breathing problem'},
            CirculationProblem: {type: Boolean, title: 'Circulation problem'},
            DrugProblem: {type: Boolean, title: 'Drug problem'},
            InvestigationProblem: {type: Boolean, title: 'Investigation problem'},
            MonitoringProblem: {type: Boolean, title: 'Monitoring problem'}
        },*/

        /*--OncologyRelated--*/
      /*  OncologyRelated:
        {
            DelayInDiagnosis_a:
            {
                PatientRelated: {type: Boolean, title: 'Patient related'},
                Screening: {type: Boolean, title: 'Screening / Diagnostic test not'},
                Perfomed: {type: Boolean, title: 'Perfomed'},
                DelayInReferral: {type: Boolean, title: 'Delay in referral to tertiary institute'}
            },

            InappropriateFacility_b:
            {
                PalliativeCare: {type: Boolean, title: 'Palliative care in 2°/3° hosp'}
            }
        },*/

        /*--LevelOfSurgeryPerformed--*/
       /* LevelOfSurgeryPerformed:
        {
            Registrar: {type: Boolean, title: 'Registrar'},
            Consultant: {type: Boolean, title: 'Consultant'},
            Intern: {type: Boolean, title: 'Intern'},
            Midwife: {type: Boolean, title: 'Midwife (mwa)'}
        },*/

        /*AdministrativeProblems*/
       /* AdministrativeProblems:
        {
            LackOfInfo: {type: Boolean, title: 'Lack of information'},
            NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
        },*/

        /*---If either of the above options has been selected, do not complete bellow---*/
       /* TransportProblemsHome_Institut:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        TransportProblemsInstitut_Institut:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        BarriersToEntry:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        LackOfAccessibility:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        LackOfHealCareFacilities_ICUBeds:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        LackOfHealthCareFacilities_EquipmentDrugsBlood:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        LackOfPersonnel:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        LackOfAppropriatelyTrainedStaff:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        TheatreEquipNotAvailable:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        CommunicationProblem:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        OtherAdministrativeProblems:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        Specify:
        {
            Primary: {type: String, title: 'Specify'}
        },*/

        /*--Medical Care--*/
       /* MedicalCare:
        {
            LackOfInfo: {type: Boolean, title: 'Lack of information'},
            NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
        },*/

        /*---If either of the above options has been selected, do not complete bellow---*/
        /*InitialAssessment:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        ProblemReconitiaon_dx:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        DelayInReferringPt:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        MxAtInappropriateLevel:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        IncorrectMx:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        SubStandardMx_CorrectDx:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        MonitoringProblem_NotInfrequentlyDone:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        MonitoringProblem_ProlongedABN_OBS_WithNoAction:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        SurgicalComplications:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        AnaestheticProblem_ProOptEValuationNotSufficient:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        Treatment_MedicationNotGiven:
        {
            Primary: {type: Boolean, title: 'Primary'},
            Secondary: {type: Boolean, title: 'Secondary'},
            Tertiary: {type: Boolean, title: 'Tertiary'}
        },

        Summary: {type: String, title: 'Patient name'},

        NameOfRegistrar_print: {type: String, title: 'Patient name'}*/

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

var submitGTN = function (formData) { // GTN

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new GTN({
        Name: changedString.Name,

        Surname:changedString.Surname,

        HospitalNumber:changedString.HospitalNumber,

        ID: changedString.ID,

        DateOfBirth: changedString.DateOfBirth,

        CellPhone:{
            First: changedString.CellPhoneFirst,
            Alternative: changedString.CellPhoneAlternative
        },

        DateOfDiagnosis: changedString.DateOfDiagnosis,

        HIVStatus:{
            Negative: changedString.HIVStatusNegative,
            Positive: changedString.HIVStatusPositive,
            CD4:changedString.HIVStatusCD4
        },

        figoStage: {
            I:changedString.figoStageI,
            II: changedString.figoStageII,
            III:changedString.figoStageIII,
            IV: changedString.figoStageIV,
            Unknown:changedString.figoStageUnknown
        },

        SiteOfDistantMetastase: {
            Nil: changedString.SiteOfDistantMetastaseNil,
            Skin: changedString.SiteOfDistantMetastaseSkin,
            Bone: changedString.SiteOfDistantMetastaseBone,
            Lungs: changedString.SiteOfDistantMetastaseLungs,
            Liver: changedString.SiteOfDistantMetastaseLiver,
            Brain: changedString.SiteOfDistantMetastaseBrain,
            LymphNodesOtherThanFemoralAndInguinal: changedString.SiteOfDistantMetastaseLymphNodesOtherThanFemoralAndInguinal,
            Other: changedString.SiteOfDistantMetastaseOther,
            Unknown: changedString.SiteOfDistantMetastaseUnknown
        },

        RiskFactors:{
            Age:{
                LT40 :changedString.RiskFactorsAgeLT40,
                GTE40:changedString.RiskFactorsAgeGTE40,
                Unknown:changedString.RiskFactorsAgeUnknown
            },

            AntecedentPregnancy:{
                Mole :changedString.RiskFactorsAntecedentPregnancyMole,
                Abortion:changedString.RiskFactorsAntecedentPregnancyAbortion,
                Term:changedString.RiskFactorsAntecedentPregnancyTerm,
                Unknown:changedString.RiskFactorsAntecedentPregnancyUnknown
            },

            IntervalMonthsFromIndexPregnancy:{
                GT4 :changedString.RiskFactorsIntervalMonthsFromIndexPregnancyGT4,
                FourTo6:changedString.RiskFactorsIntervalMonthsFromIndexPregnancyFourTo6,
                SevenTo12:changedString.RiskFactorsIntervalMonthsFromIndexPregnancySevenTo12,
                GTE13:changedString.RiskFactorsIntervalMonthsFromIndexPregnancyGTE13,
                Unknown:changedString.RiskFactorsIntervalMonthsFromIndexPregnancyUnknown
            },

            PretreatmentSerumHCG:{
                GT10expo3:changedString.RiskFactorsPretreatmentSerumHCGGT10expo3,
                Tenexpo3ToGT10expo4:changedString.RiskFactorsPretreatmentSerumHCGTenexpo3ToGT10expo4,
                Tenexpo4ToGT10expo5:changedString.RiskFactorsPretreatmentSerumHCGTenexpo4ToGT10expo5,
                GTE10expo5:changedString.RiskFactorsPretreatmentSerumHCGGTE10expo5,
                Unknown:changedString.RiskFactorsPretreatmentSerumHCGUnknown
            },


            LargestTumorSizeIncludingUterusCm:{
                LT3:changedString.RiskFactorsLargestTumorSizeIncludingUterusCmLT3,
                ThreeToLT5:changedString.RiskFactorsLargestTumorSizeIncludingUterusCmThreeToLT5,
                GTE25:changedString.RiskFactorsLargestTumorSizeIncludingUterusCmGTE25,
                Unknown:changedString.RiskFactorsLargestTumorSizeIncludingUterusCmUnknown
            },


            SiteOfMetastases:{
                NoneLung :changedString.RiskFactorsSiteOfMetastasesNoneLung,
                SpleenKidney:changedString.RiskFactorsSiteOfMetastasesSpleenKidney,
                GastroIntestinal:changedString.RiskFactorsSiteOfMetastasesGastroIntestinal,
                LiverBrain:changedString.RiskFactorsSiteOfMetastasesLiverBrain,
                Unknown:changedString.RiskFactorsSiteOfMetastasesUnknown
            },


            NumberOfMetastases:{
                Nil :changedString.RiskFactorsNumberOfMetastasesNil,
                OneTo4:changedString.RiskFactorsNumberOfMetastasesOneTo4,
                FiveTo8:changedString.RiskFactorsNumberOfMetastasesFiveTo8,
                Unknown:changedString.RiskFactorsNumberOfMetastasesUnknown
            },


            PreviousFailedChemotherapy:{
                NoPreviousFailed :changedString.RiskFactorsPreviousFailedChemotherapyNoPreviousFailed,
                SingleDrug:changedString.RiskFactorsPreviousFailedChemotherapySingleDrug,
                Unknown:changedString.RiskFactorsPreviousFailedChemotherapyUnknown
            }

        },


        Histology: {
            NoHistology:changedString.HistologyNoHistology,
            CompleteHydatiformMole: changedString.HistologyCompleteHydatiformMole,
            PartialHydatiformMole: changedString.HistologyPartialHydatiformMole,
            Choriocarcinoma:changedString.HistologyChoriocarcinoma,
            EpithelioidTrtophoblasticTumor:changedString.HistologyEpithelioidTrtophoblasticTumor,
            PlacentalSiterophoblasticTumor: changedString.HistologyPlacentalSiterophoblasticTumor,
            UnclassifiedTrophoblasticLesion:changedString.HistologyUnclassifiedTrophoblasticLesion,
            Unknown :changedString.HistologyUnknown
        },


        /*(applicable to trophoblastic tumors arising in ectopic sites)*/
        PrimarySite : {
            Trophoblastic:changedString.PrimarySiteTrophoblastic,
            OvarianMole:changedString.PrimarySiteOvarianMole,
            Tube: changedString.PrimarySiteTube,
            Abdominal:changedString.PrimarySiteAbdominal,
            OtherSite:changedString.PrimarySiteOtherSite,
            Unknown : changedString.PrimarySiteUnknown
        },


        /*for known GTN*/
        PreviousChemotherapy  : {
            NoPriorChemotherapy: changedString.PreviousChemotherapyNoPriorChemotherapy,
            SingleAgentChemotherapy:changedString.PreviousChemotherapySingleAgentChemotherapy,
            MultipleAgentChemotherapy: changedString.PreviousChemotherapyMultipleAgentChemotherapy,
            Unknown : changedString.PreviousChemotherapyUnknown
        },

        /*(RT = Radiotherapy, CT = Chemotherapy)*/
        PrimaryTreatmentsPerformed  : {
            Nil:changedString.PrimaryTreatmentsPerformedNil,
            Chemotherapy:changedString.PrimaryTreatmentsPerformedChemotherapy,
            SurgeryOnly:changedString.PrimaryTreatmentsPerformedSurgeryOnly,
            ChemotherapySurgery:changedString.PrimaryTreatmentsPerformedChemotherapySurgery,
            Unknown :changedString.PrimaryTreatmentsPerformedUnknown,
            DateOfTreatment: changedString.PrimaryTreatmentsPerformedDateOfTreatment
        },


        /*--(LND = lymp hadenectomy)--*/
        typeOfSurgery: {
            AbdominalAndElvicSurgeryhysterectomyDebulkingEexcludingDAndC: changedString.typeOfSurgeryAbdominalAndElvicSurgeryhysterectomyDebulkingEexcludingDAndC,
            LobectomyLung:changedString.typeOfSurgeryLobectomyLung,
            Craniotomy:changedString.typeOfSurgeryCraniotomy,
            Other:changedString.typeOfSurgeryOther,
            DateOfSurgery:changedString.typeOfSurgeryDateOfSurgery
        },

        /*--CT = Chemotherapy--*/
        typeOfChemotherapy:{
            OneCourseSingleAgentCT: changedString.typeOfChemotherapyOneCourseSingleAgentCT,
            TwoOrMoreCoursesSingleAgentCT:changedString.typeOfChemotherapyTwoOrMoreCoursesSingleAgentCT,
            OneCourseMultipleAgentCT:changedString.typeOfChemotherapyOneCourseMultipleAgentCT,
            TwoOrMoreCoursesMultipleAgentCT: changedString.typeOfChemotherapyTwoOrMoreCoursesMultipleAgentCT,
            Unknown:changedString.typeOfChemotherapyUnknown,
            DateStarted:changedString.typeOfChemotherapyDateStarted,
            DateEnded:changedString.typeOfChemotherapyDateEnded
        },


        ResponseToTreatment: {
            Complete:changedString.ResponseToTreatmentComplete,
            Partial:changedString.ResponseToTreatmentPartial,
            StableDisease:changedString.ResponseToTreatmentStableDisease,
            ProgressiveDisease:changedString.ResponseToTreatmentProgressiveDisease,
            Unknown: changedString.ResponseToTreatmentUnknown,
            DateOfAssessment:changedString.ResponseToTreatmentDateOfAssessment
        },


        Relapse: {
            Yes:changedString.RelapseYes,
            No:changedString.RelapseNo,
            Unknown :changedString.RelapseUnknown,
            DateOfRelapseDiagnosis:changedString.RelapseDateOfRelapseDiagnosis
        },


        SiteOfRelapse:{
            Local:changedString.SiteOfRelapseLocal,
            Metastatic:changedString.SiteOfRelapseMetastatic,
            LocalAndMetastatic:changedString.SiteOfRelapseLocalAndMetastatic,
            Unknown:changedString.SiteOfRelapseUnknown
        },

        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/
        TreatmentAtRelapse: {
            Nil:changedString.TreatmentAtRelapseNil,
            Surgery:changedString.TreatmentAtRelapseSurgery,
            RT:changedString.TreatmentAtRelapseRT,
            CT:changedString.TreatmentAtRelapseCT,
            HT:changedString.TreatmentAtRelapseHT,
            SurgeryRT:changedString.TreatmentAtRelapseSurgeryRT,
            CTRT:changedString.TreatmentAtRelapseCTRT,
            Other:changedString.TreatmentAtRelapseOther,
            Unknown:changedString.TreatmentAtRelapseUnknown
        },


        /*Follow up*/
        DateOfFolllowup: changedString.DateOfFolllowup,

        LastKnownVitalStatus: {
            AliveUnknownDiseaseStatus: changedString.LastKnownVitalStatusAliveUnknownDiseaseStatus,
            AliveAndNoEvidenceOfDisease:changedString.LastKnownVitalStatusAliveAndNoEvidenceOfDisease,
            AliveWithDisease:changedString.LastKnownVitalStatusAliveWithDisease,
            Dead:changedString.LastKnownVitalStatusDead
        },

        /*Death*/
        causeOfDeath :{
            OtherPrimaryCancera:changedString.causeOfDeathOtherPrimaryCancera,
            Otherprimarycancer: changedString.causeOfDeathOtherprimarycancer,
            Treatmentrelatedcause:changedString.causeOfDeathTreatmentrelatedcause,
            IntercurrentDisease: changedString.causeOfDeathIntercurrentDisease,
            UnknownCauses:changedString.causeOfDeathUnknownCauses,
            DateOfDeath:changedString.causeOfDeathDateOfDeath
        }
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

var submitHysteroscopy = function(formData){ //Hyst

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new Hyst({
        DateOfVisit: changedString.DateOfVisit,

        HospitalNumber: changedString.HospitalNumber,

        Age:changedString.Age,

        Name:changedString.Name,

        Surname: changedString.Surname,

        P:changedString.P,
        G:changedString.G,
        M:changedString.M,
        E:changedString.E,

        HIV:{
            Negative: changedString.HIVNegative,
            Positive: changedString.HIVPositive,
            Decline:changedString.HIVDecline,
            Unknown:changedString.HIVUnknown,
            CD4:changedString.HIVCD4
        },

        CoMorbidities : {
            Hypertension: changedString.CoMorbiditiesHypertension,
            IDDM: changedString.CoMorbiditiesIDDM,
            NIDDM: changedString.CoMorbiditiesNIDDM,
            IHD: changedString.CoMorbiditiesIHD,
            Obesity:changedString.CoMorbiditiesObesity
        },

        /*FINDINGS AT HYSTEROSCOPY*/

        EndocervicalCanal : {
            Normal: changedString.EndocervicalCanalNormal,
            Stenotic :changedString.EndocervicalCanalNormal,
            Polyps:changedString.EndocervicalCanalNormal,
            SuspiciousLesion:changedString.EndocervicalCanalNormal
        },

        UterineCavity : {
            Normal: changedString.UterineCavityNormal,
            Adhesions : changedString.UterineCavityAdhesions,
            Polyps:changedString.UterineCavityPolyps,
            Atrophy:changedString.UterineCavityAtrophy,
            Hyperplasia:changedString.UterineCavityHyperplasia,
            Fibroid: changedString.UterineCavityFibroid,
            Suspicious:changedString.UterineCavitySuspicious,
            Septum:changedString.UterineCavitySeptum
        },

        Fibroid:{
            Position:changedString.FibroidPosition,
            Size:changedString.FibroidSize
        },

        Polyp:{
            Position:changedString.PolypPosition,
            Size:changedString.PolypSize
        },

        ProceduresPerformedAtTimeOfOfficeHysteroscopy: {
            Nil:changedString.ProceduresPerformedAtTimeOfOfficeHysteroscopyNil,
            RemovalIUCD :changedString.ProceduresPerformedAtTimeOfOfficeHysteroscopyRemovalIUCD,
            Biopsy:changedString.ProceduresPerformedAtTimeOfOfficeHysteroscopyBiopsy,
            Polypectomy: changedString.ProceduresPerformedAtTimeOfOfficeHysteroscopyPolypectomy,
            Myomectomy :changedString.ProceduresPerformedAtTimeOfOfficeHysteroscopyMyomectomy,
            Essure:changedString.ProceduresPerformedAtTimeOfOfficeHysteroscopyEssure,
            EndometrialAblation: changedString.ProceduresPerformedAtTimeOfOfficeHysteroscopyEndometrialAblation,
            Other:changedString.ProceduresPerformedAtTimeOfOfficeHysteroscopyOther
        },

        DiagnosisMadeAfterHysteroscopy: changedString.DiagnosisMadeAfterHysteroscopy,

        /*PLANNED MANAGEMENT*/

        NoFurtherTreatment:{
            NoTreatmentRequired:changedString.NoFurtherTreatmentNoTreatmentRequired,
            TreatedAtTimeOfOfficeHysteroscopy: changedString.NoFurtherTreatmentTreatedAtTimeOfOfficeHysteroscopy
        },

        ReferralFor: {
            OperativeHysteroscopyUnderGA:changedString.ReferralForOperativeHysteroscopyUnderGA,
            Hysterectomy :changedString.ReferralForHysterectomy,
            Mirena:changedString.ReferralForMirena,
            DiagnosticHysterectomy:changedString.ReferralForDiagnosticHysterectomy,
            EndometrialAblation:changedString.ReferralForEndometrialAblation
        },

        DurationOfProcedure:changedString.DurationOfProcedure,

        PainScoreOutOf10:changedString.PainScoreOutOf10,

        Comments:changedString.Comments
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

var submitOvarianCancer = function(formData){//OvaC

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new OvaC({

        Name: changedString.Name,

        Surname:changedString.Surname,

        HospitalNumber: changedString.HospitalNumber,

        ID: changedString.ID,

        DateOfBirth: changedString.DateOfBirth,

        DateOfDiagnosis:changedString.DateOfDiagnosis,

        CellPhone:{
            First:changedString.CellPhoneFirst,
            Alternative:changedString.CellPhoneAlternative
        },

        HIVStatus:{
            Negative:changedString.HIVStatusNegative,
            Positive:changedString.HIVStatusPositive,
            CD4:changedString.HIVStatusCD4
        },

        figoStage: {
            Ia: changedString.figoStageIa,
            Ib: changedString.figoStageIb,
            Ic: changedString.figoStageIc,
            IIa: changedString.figoStageIIa,
            IIb: changedString.figoStageIIb,
            IIc:changedString.figoStageIIc,
            IIIa: changedString.figoStageIIIa,
            IIIb:changedString.figoStageIIIb,
            IIIc:changedString.figoStageIIIc,
            IV :changedString.figoStageIV,
            SurgicalStageUnavailable:changedString.figoStageSurgicalStageUnavailable,
            Unknown:changedString.figoStageUnknown
        },

        /*(when appropriate)*/
        SiteOfDistantMetastases : {
            PleuralEffusion: changedString.SiteOfDistantMetastasesPleuralEffusion,
            Liver: changedString.SiteOfDistantMetastasesLiver,
            Brain: changedString.SiteOfDistantMetastasesBrain,
            OtherSite:changedString.SiteOfDistantMetastasesOtherSite,
            Unknown :changedString.SiteOfDistantMetastasesUnknown
        },

        Histology: {
            NoHystologyUnclassifiable:changedString.HistologyNoHystologyUnclassifiable,
            BorderlineSerousCystadenoma:changedString.HistologyBorderlineSerousCystadenoma,
            BorderlineMusinousCystadenoma: changedString.HistologyBorderlineMusinousCystadenoma,
            BorderlineEndometroidCystadenoma:changedString.HistologyBorderlineEndometroidCystadenoma,
            UndifferentiatedCarcinoma: changedString.HistologyUndifferentiatedCarcinoma,
            MixedEpithelialTumor: changedString.HistologyMixedEpithelialTumor,
            EndometroidCystadenocarcinoma:changedString.HistologyEndometroidCystadenocarcinoma,
            ClearCellCystadenocarcinoma:changedString.HistologyClearCellCystadenocarcinoma,
            SerousCystadenocarcinoma :changedString.HistologySerousCystadenocarcinoma,
            MucinousCystadenocarcinoma :changedString.HistologyMucinousCystadenocarcinoma,
            Unknown :changedString.HistologyUnknown
        },

        Differentiation: {
            Well: changedString.DifferentiationWell,
            Moderately:changedString.DifferentiationModerately,
            Poorly:changedString.DifferentiationPoorly,
            Unknown :changedString.DifferentiationUnknown
        },

        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation )---*/
        TreatmentPerformed : {
            Nil:changedString.TreatmentPerformedNil,
            SurgeryAlone:changedString.TreatmentPerformedSurgeryAlone,
            RTAlone:changedString.TreatmentPerformedRTAlone,
            NeoAdjuvantCTAndSurgery:changedString.TreatmentPerformedNeoAdjuvantCTAndSurgery,
            SurgeryAdjuvantRT:changedString.TreatmentPerformedSurgeryAdjuvantRT,
            SurgeryAdjuvantCT:changedString.TreatmentPerformedSurgeryAdjuvantCT,
            Other :changedString.TreatmentPerformedOther,
            Unknown : changedString.TreatmentPerformedUnknown,
            DateofTreatment : changedString.TreatmentPerformedDateofTreatment
        },

        /*--(LND = pelvic/paraortic lymphnode dissection; USO: Unilateral oopherectomy; BSO Bilateral oopherectomy)--*/
        typeOfSurgery: {
            USONoLND: changedString.typeOfSurgeryUSONoLND,
            USOWithLND:changedString.typeOfSurgeryUSOWithLND,
            BSONoLND:changedString.typeOfSurgeryBSONoLND,
            BSOWithLND:changedString.typeOfSurgeryBSOWithLND,
            multipleBiopsiesNoLND:changedString.typeOfSurgerymultipleBiopsiesNoLND,
            multipleBiopsiesWithLND:changedString.typeOfSurgerymultipleBiopsiesWithLND,
            ExplorativeLaparotomy :changedString.typeOfSurgeryExplorativeLaparotomy,
            Other :changedString.typeOfSurgeryOther,
            Unknown:changedString.typeOfSurgeryUnknown,
            DateofSurgery : changedString.typeOfSurgeryDateofSurgery
        },

        typeOfRadiotherapy: {
            Intracavitary: changedString.typeOfRadiotherapyIntracavitary,
            ExternalPelvicRT: changedString.typeOfRadiotherapyExternalPelvicRT,
            ExternalPelvicParaortic:changedString.typeOfRadiotherapyExternalPelvicParaortic,
            ExternalPelvicIntracavitary: changedString.typeOfRadiotherapyExternalPelvicIntracavitary,
            ExtpelvicParaortIntracavitary: changedString.typeOfRadiotherapyExtpelvicParaortIntracavitary,
            IntraperitonealRadioisotopes:changedString.typeOfRadiotherapyIntraperitonealRadioisotopes,
            Unknown:changedString.typeOfRadiotherapyUnknown,
            Other:changedString.typeOfRadiotherapyOther,
            DateStarted:changedString.typeOfRadiotherapyDateStarted,
            DateEnded:changedString.typeOfRadiotherapyDateEnded
        },


        /*--(CT = Chemotherapy, PC = platinum compound, Completed / uncompleted refers to full course)--*/
        typeOfChemotherapy:{
            SingleDrugCTUncompleted: changedString.typeOfChemotherapySingleDrugCTUncompleted,
            SingleDrugCTCompleted:changedString.typeOfChemotherapySingleDrugCTCompleted,
            SingleDrugCTPlusePCUncompleted:changedString.typeOfChemotherapySingleDrugCTPlusePCUncompleted,
            SingleDrugCTPlusPCCompleted:changedString.typeOfChemotherapySingleDrugCTPlusPCCompleted,
            SingleDrugCTNoPCUncompleted: changedString.typeOfChemotherapySingleDrugCTNoPCUncompleted,
            SingleDrugCTNoPCCompleted: changedString.typeOfChemotherapySingleDrugCTNoPCCompleted,
            MultipleDrugCTUncompleted:changedString.typeOfChemotherapyMultipleDrugCTUncompleted,
            MultipleDrugCTCompleted: changedString.typeOfChemotherapyMultipleDrugCTCompleted,
            MultipleDrugCTPCTaxaneUncompleted:changedString.typeOfChemotherapyMultipleDrugCTPCTaxaneUncompleted,
            MultipleDrugCTPCTaxaneCompleted:changedString.typeOfChemotherapyMultipleDrugCTPCTaxaneCompleted,
            MultipleDrugCTNoPCWithTaxaneUncompleted: changedString.typeOfChemotherapyMultipleDrugCTNoPCWithTaxaneUncompleted,
            MultipleDrugCTNoPCWithTaxaneCompleted: changedString.typeOfChemotherapyMultipleDrugCTNoPCWithTaxaneCompleted,
            MultipleDrugCTPCWithoutTaxaneUncompleted:changedString.typeOfChemotherapyMultipleDrugCTPCWithoutTaxaneUncompleted,
            MultipleDrugCTPCWithoutTaxaneCompleted:changedString.typeOfChemotherapyMultipleDrugCTPCWithoutTaxaneCompleted,
            MultipleDrugCTNoPCNoTaxaneUncompleted: changedString.typeOfChemotherapyMultipleDrugCTNoPCNoTaxaneUncompleted,
            MultipleDrugCTNoPCNoTaxaneCompleted: changedString.typeOfChemotherapyMultipleDrugCTNoPCNoTaxaneCompleted,
            Unknown: changedString.typeOfChemotherapyUnknown,
            DateStarted: changedString.typeOfChemotherapyDateStarted,
            DateEnded: changedString.typeOfChemotherapyDateEnded
        },

        responseToTreatment: {
            Complete:changedString.responseToTreatmentComplete,
            Partial:changedString.responseToTreatmentPartial,
            StableDisease:changedString.responseToTreatmentStableDisease,
            ProgressiveDisease:changedString.responseToTreatmentProgressiveDisease,
            NotAssessable:changedString.responseToTreatmentNotAssessable,
            Unknown:changedString.responseToTreatmentUnknown,
            DateOfAssessment: changedString.responseToTreatmentDateOfAssessment
        },

        /*Surgical Pathological Evaluation*/
        SizeOfTumorOutsideOvaryAtOpeningOfAbdomen: {
            NoMacroscopicDisease: changedString.SizeOfTumorOutsideOvaryAtOpeningOfAbdomenNoMacroscopicDisease,
            LTE2cm:changedString.SizeOfTumorOutsideOvaryAtOpeningOfAbdomenLTE2cm,
            Between2And10 :changedString.SizeOfTumorOutsideOvaryAtOpeningOfAbdomenBetween2And10,
            GTE10cm:changedString.SizeOfTumorOutsideOvaryAtOpeningOfAbdomenGTE10cm,
            Unknown:changedString.SizeOfTumorOutsideOvaryAtOpeningOfAbdomenUnknown
        },

        DiameterOfResidualImplantsAfterSurgery: {
            NoMicroscopicResidualDisease: {
                LT0_5cm: changedString.DiameterOfResidualImplantsAfterSurgeryNoMicroscopicResidualDiseaseLT0_5cm,
                GTE0_5cmLTE1cm: changedString.DiameterOfResidualImplantsAfterSurgeryNoMicroscopicResidualDiseaseGTE0_5cmLTE1cm
            },
            NoMacroscopicResidualDisease: {
                GT1cmLTE2cm: changedString.DiameterOfResidualImplantsAfterSurgeryNoMacroscopicResidualDiseaseGT1cmLTE2cm,
                GT2cm:changedString.DiameterOfResidualImplantsAfterSurgeryNoMacroscopicResidualDiseaseGT2cm
            },
            Unknown: changedString.DiameterOfResidualImplantsAfterSurgeryUnknown
        },

        LymphNodeInvolvementInUpfrontSurgery_histologically: {
            NotEvaluated: changedString.LymphNodeInvolvementInUpfrontSurgery_histologicallyNotEvaluated,
            PosNodes: changedString.LymphNodeInvolvementInUpfrontSurgery_histologicallyPosNodes,
            NegNodes : changedString.LymphNodeInvolvementInUpfrontSurgery_histologicallyNegNodes,
            Unknown:changedString.LymphNodeInvolvementInUpfrontSurgery_histologicallyUnknown
        },

        NodesInvolved: {
            OnlyPelvic:changedString.NodesInvolvedOnlyPelvic,
            PelvicParaortic:changedString.NodesInvolvedPelvicParaortic,
            OnlyParaortic:changedString.NodesInvolvedOnlyParaortic,
            Unknown: changedString.NodesInvolvedUnknown
        },


        NumberOfNodesExamined : {
            Pelvic :changedString.NumberOfNodesExaminedPelvic,
            Paraortic:changedString.NumberOfNodesExaminedParaortic
        },

        NumberOfNodesPositive : {
            Pelvic :changedString.NumberOfNodesPositivePelvic,
            Paraortic:changedString.NumberOfNodesPositiveParaortic
        },

        /*(presence of malignant cells) */
        Cytology: {
            Positive:changedString.CytologyPositive,
            Negative:changedString.CytologyNegative,
            Unknown:changedString.CytologyUnknown
        },

        SecondSurgery: {
            DateOf2ndSurgery:changedString.SecondSurgeryDateOf2ndSurgery,
            IntervalDebulking:changedString.SecondSurgeryIntervalDebulking,
            SecondLook:changedString.SecondSurgerySecondLook,
            SecondSurgicalEffort:changedString.SecondSurgerySecondSurgicalEffort,
            Unknown:changedString.SecondSurgeryUnknown
        },


        StatusAtSecondSurgery: {
            CompleteRemission:changedString.StatusAtSecondSurgeryCompleteRemission,
            MicroscopicDisease: changedString.StatusAtSecondSurgeryMicroscopicDisease,
            NoSingleImplantGrearterThan1cm:changedString.StatusAtSecondSurgeryNoSingleImplantGrearterThan1cm,
            ImplantsGreaterThan1cm:changedString.StatusAtSecondSurgeryNoSingleImplantGrearterThan1cm,
            PosRetroperitonealNodes :changedString.StatusAtSecondSurgeryPosRetroperitonealNodes,
            Unknown:changedString.StatusAtSecondSurgeryUnknown
        },

        StatusAfterSecondSurgery: {
            NoMicroscopicDiseaseLeftAfterSurg: changedString.StatusAfterSecondSurgeryNoMicroscopicDiseaseLeftAfterSurg,
            MicroscopicDiseaseLeftBG1cm:changedString.StatusAfterSecondSurgeryMicroscopicDiseaseLeftBG1cm,
            MicroscopicDiseaseLeftLT1cm: changedString.StatusAfterSecondSurgeryMicroscopicDiseaseLeftLT1cm,
            Unknown: changedString.StatusAfterSecondSurgeryUnknown
        },


        Relapse: {
            Yes:changedString.RelapseYes,
            No:changedString.RelapseNo,
            Unknown:changedString.RelapseUnknown,
            DateOfRelapseDiagnosis: changedString.RelapseDateOfRelapseDiagnosis
        },

        SiteOfRelapse:{
            Local:changedString.SiteOfRelapseLocal,
            Metastatic:changedString.SiteOfRelapseMetastatic,
            LocalAndMetastatic:changedString.SiteOfRelapseLocalAndMetastatic,
            Unknown:changedString.SiteOfRelapseUnknown
        },

        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy RT = Radiotherapy)---*/
        TreatmentAtRelapse: {
            Nil:changedString.TreatmentAtRelapseNil,
            Surgery: changedString.TreatmentAtRelapseSurgery,
            RT:changedString.TreatmentAtRelapseRT,
            CT: changedString.TreatmentAtRelapseCT,
            HT:changedString.TreatmentAtRelapseHT,
            SurgeryRT:changedString.TreatmentAtRelapseSurgeryRT,
            CTRT: changedString.TreatmentAtRelapseCTRT,
            Other: changedString.TreatmentAtRelapseOther,
            Unknown:changedString.TreatmentAtRelapseUnknown
        },

        DateOfFolllowup:changedString.DateOfFolllowup,

        LastKnownVitalStatus: {
            AliveUnknownDiseaseStatus: changedString.LastKnownVitalStatusAliveUnknownDiseaseStatus,
            AliveAndNoEvidenceOfDisease:changedString.LastKnownVitalStatusAliveAndNoEvidenceOfDisease,
            AliveWithDisease:changedString.LastKnownVitalStatusAliveWithDisease,
            Dead:changedString.LastKnownVitalStatusDead
        },


        causeOfDeath :{
            OvarianCa:changedString.causeOfDeathOvarianCa,
            Otherprimarycancer: changedString.causeOfDeathOtherprimarycancer,
            Treatmentrelatedcause: changedString.causeOfDeathTreatmentrelatedcause,
            IntercurrentDisease:changedString.causeOfDeathIntercurrentDisease,
            UnknownCauses:changedString.causeOfDeathUnknownCauses,
            DateOfDeath:changedString.causeOfDeathDateOfDeath
        }
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

var submitVaginalCancer = function(formData){//VagC

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new VagC({
        Name:changedString.Name,

        Surname: changedString.Surname,

        HospitalNumber: changedString.HospitalNumber,

        ID:changedString.ID,

        DateOfBirth: changedString.DateOfBirth,

        CellPhone:{
            First:changedString.CellPhoneFirst,
            Alternative:changedString.CellPhoneAlternative
        },

        DateOfDiagnosis: changedString.DateOfDiagnosis,

        HIVStatus:{
            Negative: changedString.HIVStatusNegative,
            Positive: changedString.HIVStatusPositive,
            CD4: changedString.HIVStatusCD4
        },

        figoStage:{
            I: changedString.figoStageI,
            II: changedString.figoStageII,
            III: changedString.figoStageIII,
            IVa: changedString.figoStageIVa,
            IVb: changedString.figoStageIVb,
            Unknown: changedString.figoStageUnknown
        },

        /*(whatever clinically assessed)*/
        TumorSizeB4: {
            NotAssessed: changedString.TumorSizeB4NotAssessed,
            LTE2cm: changedString.TumorSizeB4LTE2cm,
            GT2cm: changedString.TumorSizeB4GT2cm,
            Unknown: changedString.TumorSizeB4Unknown
        },

        InvolvedVaginalSites:{
            UpperThird:changedString.InvolvedVaginalSitesUpperThird,
            MiddleThird:changedString.InvolvedVaginalSitesMiddleThird,
            LowerThird:changedString.InvolvedVaginalSitesLowerThird,
            Unknown: changedString.InvolvedVaginalSitesUnknown
        },


        SiteOfDistantMetastase: {
            Nil: changedString.SiteOfDistantMetastaseNil,
            Lung: changedString.SiteOfDistantMetastaseLung,
            Liver: changedString.SiteOfDistantMetastaseLiver,
            Bowel: changedString.SiteOfDistantMetastaseBowel,
            Bone: changedString.SiteOfDistantMetastaseBone,
            Brain:changedString.SiteOfDistantMetastaseBrain,
            Other: changedString.SiteOfDistantMetastaseOther,
            Unknown : changedString.SiteOfDistantMetastaseUnknown
        },

        Histology: {
            NoBiopsy: changedString.HistologyNoBiopsy,
            Squamous: changedString.HistologySquamous,
            Adeno: changedString.HistologyAdeno,
            AdenoColumnar:changedString.HistologyAdenoColumnar,
            Endometroid:changedString.HistologyEndometroid,
            ClearCell: changedString.HistologyClearCell,
            Undifferentiated: changedString.HistologyUndifferentiated,
            Other: changedString.HistologyOther,
            Unknown:changedString.HistologyUnknown
        },

        Differentiation: {
            Well: changedString.DifferentiationWell ,
            Moderately: changedString.DifferentiationModerately ,
            Poorly:changedString.DifferentiationPoorly ,
            Unknown :changedString.DifferentiationUnknown
        },



        LymphovascularSpaceInvolvement:{
            Absent:changedString.LymphovascularSpaceInvolvementAbsent ,
            Present:changedString.LymphovascularSpaceInvolvementPresent,
            Unknown:changedString.LymphovascularSpaceInvolvementUnknown
        },


        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation)--*/
        PrimaryTreatmentPerformed : {
            Nil: changedString.PrimaryTreatmentPerformedNil,
            SurgeryAlone:changedString.PrimaryTreatmentPerformedSurgeryAlone ,
            RTAlone: changedString.PrimaryTreatmentPerformedRTAlone ,
            RTFollowedBySurgeryWithin90Days: changedString.PrimaryTreatmentPerformedRTFollowedBySurgeryWithin90Days,
            NeoAdjuvantCTAndSurgery: changedString.PrimaryTreatmentPerformedNeoAdjuvantCTAndSurgery,
            SurgeryAdjuvantRTCRT: changedString.PrimaryTreatmentPerformedSurgeryAdjuvantRTCRT,
            SurgeryAdjuvantCT:changedString.PrimaryTreatmentPerformedSurgeryAdjuvantCT,
            Chemoradiation: changedString.PrimaryTreatmentPerformedChemoradiation,
            CTAlone : changedString.PrimaryTreatmentPerformedCTAlone,
            Other :changedString.PrimaryTreatmentPerformedOther,
            Unknown :changedString.PrimaryTreatmentPerformedUnknown,
            DateofTreatment : changedString.PrimaryTreatmentPerformedDateofTreatment
        },

        /*--( LND= inguinal/pelvic/paraortic lymphadenectomy)--*/
        typeOfSurgery: {
            LazerExcision: changedString.typeOfSurgeryLazerExcision,
            Electroresection: changedString.typeOfSurgeryElectroresection,
            LocalTumorResection: changedString.typeOfSurgeryLocalTumorResection,
            PartialVaginectomy:changedString.typeOfSurgeryPartialVaginectomy,
            CompleteVaginectomyWithLND: changedString.typeOfSurgeryCompleteVaginectomyWithLND,
            CompleteVaginectomyWithoutLND:changedString.typeOfSurgeryCompleteVaginectomyWithoutLND,
            TumorReducingProcedure:changedString.typeOfSurgeryTumorReducingProcedure,
            AnyKindOfExenteration:changedString.typeOfSurgeryAnyKindOfExenteration,
            Other:changedString.typeOfSurgeryOther,
            Unknown:changedString.typeOfSurgeryUnknown,
            DateofSurgery:changedString.typeOfSurgeryDateofSurgery
        },

        typeOfRadiotherapy: {
            Intracavitary: changedString.typeOfRadiotherapyIntracavitary ,
            ExternalPelvicRT:changedString.typeOfRadiotherapyExternalPelvicRT ,
            ExternalInguinalPelvicParaortic: changedString.typeOfRadiotherapyExternalInguinalPelvicParaortic  ,
            ExternalPelvicIntracavitary: changedString.typeOfRadiotherapyExternalPelvicIntracavitary  ,
            Other:changedString.typeOfRadiotherapyOther  ,
            Unknown: changedString.typeOfRadiotherapyUnknown  ,
            DateStarted:changedString.typeOfRadiotherapyDateStarted  ,
            DateEnded:changedString.typeOfRadiotherapyDateEnded
        },


        typeOfChemotherapy: {
            SpecifyTypeAndDrugs: changedString.typeOfChemotherapySpecifyTypeAndDrugs,
            DateStarted:changedString.typeOfChemotherapyDateStarted,
            DateEnded: changedString.typeOfChemotherapyDateEnded
        },

        ResponseToTreatment: {
            Complete:changedString.ResponseToTreatmentComplete,
            Partial:changedString.ResponseToTreatmentPartial,
            StableDisease: changedString.ResponseToTreatmentStableDisease,
            ProgressiveDisease: changedString.ResponseToTreatmentProgressiveDisease,
            NotAssessable: changedString.ResponseToTreatmentNotAssessable,
            Unknown: changedString.ResponseToTreatmentUnknown,
            DateOfAssessment: changedString.ResponseToTreatmentDateOfAssessment
        },

        /*Surgical pathological evaluation (patients treated with upfront surgery)*/
        TumorSize : {
            MaxTumorDiameter: changedString.TumorSizeMaxTumorDiameter ,
            MaxDepthOfInvasion: changedString.TumorSizeMaxTumorDiameter
        },

        /*(histologically proven) */
        LymphnodeInvolvementAtSurgery : {
            NNotEvaluated: changedString.LymphnodeInvolvementAtSurgeryNNotEvaluated,
            PosNodes: changedString.LymphnodeInvolvementAtSurgeryPosNodes,
            NegNodes: changedString.LymphnodeInvolvementAtSurgeryNegNodes,
            Unknown: changedString.LymphnodeInvolvementAtSurgeryUnknown,

            /*(paraortic = distant metastases)*/
            NodesInvolved: {
                OnlyPelvic:changedString.LymphnodeInvolvementAtSurgeryNodesInvolvedOnlyPelvic,
                InguinaPelelvic:changedString.LymphnodeInvolvementAtSurgeryNodesInvolvedInguinaPelelvic,
                OnlyInguinal:changedString.LymphnodeInvolvementAtSurgeryNodesInvolvednOnlyInguinal,
                Unknown:changedString.LymphnodeInvolvementAtSurgeryNodesInvolvedUnknown
            },

            NumberOffNodesExamined: {
                Pelvic:changedString.LymphnodeInvolvementAtSurgeryNumberOffNodesExaminedPelvic,
                Inguinal:changedString.LymphnodeInvolvementAtSurgeryNumberOffNodesExaminedInguinal
            },

            NumberOffNodesPositive: {
                Pelvic:changedString.LymphnodeInvolvementAtSurgeryNumberOffNodesPositivePelvic,
                Inguinal:changedString.LymphnodeInvolvementAtSurgeryNumberOffNodesPositiveInguinal
            }

        },

        Relapse: {
            Yes: changedString.RelapseYes,
            No: changedString.RelapseNo,
            Unknown: changedString.RelapseUnknown,
            DateOfRelapseDiagnosis:changedString.RelapseDateOfRelapseDiagnosis
        },

        SiteOfRelapse:{
            Local:changedString.SiteOfRelapseLocal,
            Metastatic:changedString.SiteOfRelapseMetastatic,
            LocalAndMetastatic:changedString.SiteOfRelapseLocalAndMetastatic,
            Unknown:changedString.SiteOfRelapseUnknown
        },


        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/
        TreatmentAtRelapse: {
            Nil:changedString.TreatmentAtRelapseNil ,
            Surgery:changedString.TreatmentAtRelapseSurgery ,
            RT:changedString.TreatmentAtRelapseRT ,
            CT:changedString.TreatmentAtRelapseCT ,
            HT:changedString.TreatmentAtRelapseHT ,
            SurgeryRT: changedString.TreatmentAtRelapseSurgeryRT,
            CTRT:changedString.TreatmentAtRelapseCTRT,
            Other: changedString.TreatmentAtRelapseOther,
            Unknown:changedString.TreatmentAtRelapseUnknown
        },


        /*Follow up*/
        DateOfFolllowup:changedString.DateOfFolllowup,

        LastKnownVitalStatus: {
            AliveUnknownDiseaseStatus: changedString.LastKnownVitalStatusLastKnownVitalStatusAliveUnknownDiseaseStatus,
            AliveAndNoEvidenceOfDisease:changedString.LastKnownVitalStatusAliveAndNoEvidenceOfDisease,
            AliveWithDisease: changedString.LastKnownVitalStatusAliveWithDisease,
            Dead:changedString.LastKnownVitalStatusDead
        },


        /*Death*/
        causeOfDeath :{
            VaginalCa: changedString.causeOfDeathVaginalCa ,
            Otherprimarycancer: changedString.causeOfDeathOtherprimarycancer ,
            Treatmentrelatedcause:changedString.causeOfDeathTreatmentrelatedcause ,
            IntercurrentDisease:changedString.causeOfDeathIntercurrentDisease ,
            UnknownCauses:changedString.causeOfDeathUnknownCauses,
            DateOfDeath:changedString.causeOfDeathDateOfDeath
        }
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




var submitVulvaCancer = function (formData) {//VulC

    var success = false;

    var jsonString = JSON.stringify(formData.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

    var changedString = JSON.parse(changedString);

    var Form = new VulC({

    Name:changedString.Name,

    Surname:changedString.Surname,

    HospitalNumber:changedString.HospitalNumber,

    ID: changedString.ID,

    DateOfBirth:changedString.DateOfBirth,
    
   CellPhone:{
        First: changedString.CellPhoneFirst,
        Alternative: changedString.CellPhoneAlternative
    },

    DateOfDiagnosis: changedString.DateOfDiagnosis,

    HIVStatus:{
        Negative: changedString.HIVStatusNegative,
        CD4: changedString.HIVStatusCD4
    },
    
    figoStage: {
        Ia: changedString.figoStageIa,
        Ib: changedString.figoStageIb,
        II: changedString.figoStageII,
        III: changedString.figoStageIII,
        IVa: changedString.figoStageIVa,
        IVb: changedString.figoStageIVb,
        Unknown: changedString.figoStageUnknown
    },

    SiteOfDistantMetastase: {
        Nil: changedString.SiteOfDistantMetastaseNil,
        Skin: changedString.SiteOfDistantMetastaseSkin,
        Bone: changedString.SiteOfDistantMetastaseBone,
        Lungs: changedString.SiteOfDistantMetastaseLungs,
        Liver: changedString.SiteOfDistantMetastaseLiver,
        Brain: changedString.SiteOfDistantMetastaseBrain,
        LymphNodesOtherThanFemoralAndInguinal:changedString.LymphNodesOtherThanFemoralAndInguinal,
        Other: changedString.SiteOfDistantMetastaseOther,
        Unknown:changedString.SiteOfDistantMetastaseUnknown
    },
    
    Histology: {
        NilUnclassifiable: changedString.HistologyNilUnclassifiable,
        SquamousInSitu:changedString.HistologySquamousInSitu,
        Verrucous: changedString.HistologyVerrucous,
        BasalCell: changedString.HistologyBasalCell,
        Squamous: changedString.HistologySquamous,
        BartholinGlandAdeno: changedString.HistologyBartholinGlandAdeno,
        Adenocarcinoma: changedString.HistologyAdenocarcinoma,
        Other: changedString.HistologyOther,
        Unknown : changedString.HistologyUnknown
    },
    
    Differentiation: {
        Well: changedString.DifferentiationWell,
        Moderately: changedString.DifferentiationModerately,
        Poorly: changedString.DifferentiationPoorly,
        Unknown : changedString.DifferentiationUnknown
    },
    
        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation)--*/    
    PrimaryTreatmentPerformed : {
        Nil: changedString.PrimaryTreatmentPerformedNil,
        SurgeryAlone: changedString.PrimaryTreatmentPerformedSurgeryAlone,
        RTAlone: changedString.PrimaryTreatmentPerformedRTAlone,
        RTFollowedBySurgeryWithin60Days: changedString.PrimaryTreatmentPerformedRTFollowedBySurgeryWithin60Days,
        NeoAdjuvantCTAndSurgery: changedString.PrimaryTreatmentPerformedNeoAdjuvantCTAndSurgery,
        SurgeryAdjuvantRT: changedString.PrimaryTreatmentPerformedSurgeryAdjuvantRT,
        SurgeryAdjuvantCT: changedString.PrimaryTreatmentPerformedSurgeryAdjuvantCT,
        Other : changedString.PrimaryTreatmentPerformedOther,
        CRT : changedString.PrimaryTreatmentPerformedCRT,
        Unknown : changedString.PrimaryTreatmentPerformedUnknown,
        DateofTreatment : changedString.PrimaryTreatmentPerformedDateofTreatment
    },
    
    
            /*--(LND = lymp hadenectomy)--*/
    typeOfSurgery: {
        WideLocalExcisionWithLND: changedString. typeOfSurgeryWideLocalExcisionWithLND,
        WideLocalExcisionNoLND: changedString.typeOfSurgeryWideLocalExcisionNoLND,
        SimpleVulvectomyWithLND: changedString.typeOfSurgerySimpleVulvectomyWithLND,
        SimpleVulvectmyNoLND: changedString.typeOfSurgerySimpleVulvectmyNoLND,
        RadicalVulvectomyNoLND: changedString.typeOfSurgeryRadicalVulvectomyNoLND,
        RadicalVulvectomyWithLND: changedString.typeOfSurgeryRadicalVulvectomyWithLND,
        AnyKindOfExenteration : changedString.typeOfSurgeryAnyKindOfExenteration,
        Other : changedString.typeOfSurgeryOther,
        Unknown: changedString.typeOfSurgeryUnknown,
        DateofSurgery : changedString.typeOfSurgeryDateofSurgery
    },

        typeOfRadiotherapy:{
        Intracavitary: changedString.typeOfRadiotherapyIntracavitary,
        ExternalRT: changedString.typeOfRadiotherapyExternalRT,
        ExternalIntracavitary: changedString.typeOfRadiotherapyExternalIntracavitary,
        Other: changedString.typeOfRadiotherapyOther,
        Unknown: changedString.typeOfRadiotherapyUnknown,
        DateStarted: changedString.typeOfRadiotherapyDateStarted,
        DateEnded: changedString.typeOfRadiotherapyDateEnded
    },
    
    typeOfChemotherapy:{
        SpecifyTypeAndDrugs: changedString.typeOfChemotherapySpecifyTypeAndDrugs,
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
        DateOfAssessment: changedString.responseToTreatmentDateOfAssessment
    },
    
    SurgicalPathologicalEvaluation:{
        MaximumTumorDiameterInMm :changedString.SurgicalPathologicalEvaluationMaximumTumorDiameterInMm,                                    
        MaximumDepthOfInvisionInMm :changedString.SurgicalPathologicalEvaluationMaximumDepthOfInvisionInMm
    },
    

AssociatedLesions: {
        None: changedString.AssociatedLesionsNone,
        VINIII: changedString.AssociatedLesionsVINIII,
        LichenSclerosis: changedString.AssociatedLesionsLichenSclerosis,
        VINIIILichenSclerosis: changedString.AssociatedLesionsVINIIILichenSclerosis,
        Other: changedString.AssociatedLesionsOther,
        Unknown: changedString.AssociatedLesionsUnknown
    },
    
    HPVTest: {
        NotTested:changedString.HPVTestNotTested,
        Pos:changedString.HPVTestPos,
        Neg:changedString.HPVTestNeg,
        Unknown:changedString.HPVTestUnknown
    },
    
    LymphnodeInvolvementAtSurgery:{
        SentinelNodeDetection:{
            NotPerformed:changedString.LymphnodeInvolvementAtSurgerySentinelNodeDetectionNotPerformed,
            NoPos:changedString.LymphnodeInvolvementAtSurgerySentinelNodeDetectionNoPos,
            YesNeg:changedString.LymphnodeInvolvementAtSurgerySentinelNodeDetectionYesNeg,
            Unknown:changedString.LymphnodeInvolvementAtSurgerySentinelNodeDetectionUnknown
            },
            
        HistologicallyProvenInvolvement :{
            NotEvaluated :changedString.LymphnodeInvolvementAtSurgeryHistologicallyProvenInvolvementNotEvaluated,
            PositiveNodes:changedString.LymphnodeInvolvementAtSurgeryHistologicallyProvenInvolvementPositiveNodes,
            NegativeNodes:changedString.LymphnodeInvolvementAtSurgeryHistologicallyProvenInvolvementNegativeNodes,
            Unknown:changedString.LymphnodeInvolvementAtSurgeryHistologicallyProvenInvolvementUnknown
            },
            
        NodesInvolved :{
            OnlyPelvic:changedString.LymphnodeInvolvementAtSurgeryNodesInvolvedOnlyPelvic,
            PelviInguinal:changedString.LymphnodeInvolvementAtSurgeryNodesInvolvedPelviInguinal,
            OnlyInguinal:changedString.LymphnodeInvolvementAtSurgeryNodesInvolvedOnlyInguinal,
            Unknown: changedString.LymphnodeInvolvementAtSurgeryNodesInvolvedUnknown
            },
            
        NumberOfNodesExamined : {
            Pelvic : changedString.LymphnodeInvolvementAtSurgeryNumberOfNodesExaminedPelvic,
            Paraortic: changedString.LymphnodeInvolvementAtSurgeryNumberOfNodesExaminedParaortic
        },
        
        NumberOfNodesPositive : {
            Pelvic: changedString.LymphnodeInvolvementAtSurgeryNumberOfNodesPositivePelvic,
            Inguinal: changedString.LymphnodeInvolvementAtSurgeryNumberOfNodesPositiveInguinal
        },
        
        InguinalNodes_involvementCharacteristics:{
            UnilateralIntracapsular:changedString.LymphnodeInvolvementAtSurgeryInguinalNodes_involvementCharacteristicsUnilateralIntracapsular,
                UnilateralExtracapsular
        :
            changedString.LymphnodeInvolvementAtSurgeryInguinalNodes_involvementCharacteristicsUnilateralExtracapsular,
                BilateralIntracapsular
        :
            changedString.LymphnodeInvolvementAtSurgeryInguinalNodes_involvementCharacteristicsBilateralIntracapsular,
                BilateralExtracapsular
        :
            changedString.LymphnodeInvolvementAtSurgeryInguinalNodes_involvementCharacteristicsBilateralExtracapsular,
                Unknown
        :
            changedString.LymphnodeInvolvementAtSurgeryInguinalNodes_involvementCharacteristicsUnknown
        }
    },
    
    Relapse: {
        Yes: changedString.RelapseYes,
        No: changedString.RelapseNo,
        Unknown: changedString.RelapseUnknown,
        DateOfRelapseDiagnosis: changedString.RelapseDateOfRelapseDiagnosis
    }, 
    
    SiteOfRelapse:{
        Local: changedString.SiteOfRelapseLocal,
        Metastatic:changedString.SiteOfRelapseMetastatic,
        LocalAndMetastatic:changedString.SiteOfRelapseLocalAndMetastatic,
        Unknown: changedString.SiteOfRelapseUnknown
    },
    
         /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/   
    TreatmentAtRelapse: {
        Nil: changedString.TreatmentAtRelapseNil,
        Surgery: changedString.TreatmentAtRelapseSurgery,
        RT: changedString.TreatmentAtRelapseRT,
        CT: changedString.TreatmentAtRelapseCT,
        SurgeryRT: changedString.TreatmentAtRelapseSurgeryRT,
        CTRT: changedString.TreatmentAtRelapseCTRT,
        Other: changedString.TreatmentAtRelapseOther,
        Unknown: changedString.TreatmentAtRelapseUnknown
    },

    /*Follow up*/
    
    DateOfFolllowup: changedString.DateOfFolllowup,
    
    LastKnownVitalStatus: {
        AliveUnknownDiseaseStatus: changedString.LastKnownVitalStatusAliveUnknownDiseaseStatus,
        AliveAndNoEvidenceOfDisease: changedString.LastKnownVitalStatusAliveAndNoEvidenceOfDisease,
        AliveWithDisease: changedString.LastKnownVitalStatusAliveWithDisease,
        Dead: changedString.LastKnownVitalStatusAliveUnknownDiseaseStatusDead
    },
        
    /*Death*/
    causeOfDeath :{
        VulvaCarcinoma: changedString.causeOfDeathVulvaCarcinoma,
        Otherprimarycancer: changedString.causeOfDeathOtherprimarycancer,
        Treatmentrelatedcause: changedString.causeOfDeathTreatmentrelatedcause,
        IntercurrentDisease: changedString.causeOfDeathIntercurrentDisease,
        UnknownCauses: changedString.causeOfDeathUnknownCauses,
        DateOfDeath: changedString.causeOfDeathDateOfDeath
    }
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

module.exports = {
    submitGynaecologySurgery: submitGynaecologySurgery,
    submitAdmissionDischarge: submitAdmissionDischarge,
    submitCervicalCancer: submitCervicalCancer,
    submitEndometrialCancer: submitEndometrialCancer,
    submitFallopianTubeCancer: submitFallopianTubeCancer,
    submitOncologyFollowUp: submitOncologyFollowUp,
    submitCriticalIncident: submitCriticalIncident,
    submitGTN: submitGTN,
    submitHysteroscopy: submitHysteroscopy,
    submitOvarianCancer: submitOvarianCancer,
    submitVaginalCancer: submitVaginalCancer,
    submitVulvaCancer: submitVulvaCancer
};