var express = require('express');
var submodules = "../../sub-modules/"
var models = require(submodules + 'pims-database/database');
var AD = models.addmissionDischarge;
var GS = models.gynaecologySurgery;
var CC = models.cervicalCancer;
var EC = models.endometrialCancer;
var FP = models.fallopianTubeCancer;
var OC = models.oncologyFollowUpVisit

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

var submitEndometrialCancer = function(formData){
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


    Form.save(function(err){
        if(err) {
            throw err;
            console.log('An error occurred while trying to add data');
        }
        else{console.log('The data has been saved.');
        }
    });
};

var submitFallopianTubeCancer = function(formData){
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


    Form.save(function(err){
        if(err) {
            throw err;
            console.log('An error occurred while trying to add data');
        }
        else{console.log('The data has been saved.');
        }
    });
};


var submitOncologyFollowUp = function(formData) {

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

    Form.save(function(err){
        if(err) {
            throw err;
            console.log('An error occurred while trying to add data');
        }
        else{console.log('The data has been saved.');
        }
    });

};


module.exports = {
    submitGynaecologySurgery: submitGynaecologySurgery,
    submitAdmissionDischarge: submitAdmissionDischarge,
    submitCervicalCancer: submitCervicalCancer,
    submitEndometrialCancer: submitEndometrialCancer,
    submitFallopianTubeCancer: submitFallopianTubeCancer,
    submitOncologyFollowUp: submitOncologyFollowUp
};