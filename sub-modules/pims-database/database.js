var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');

mongoose.connection.on('error', function(err) {
	console.error('MongoDB error: %s', err);
});

mongoose.connection.once('open', function () {
	console.log('connected to database.');

});


var Form = new Schema({
	form_name			: String,
	data			: String,
	is_deleted			: Boolean
});


var Patient = new Schema({
	patient_name			: String,
	patient_surname			: String,
	contact_number			: Number,
	email_address			: String,
	physical_address			: String
});

var Statistics = new Schema({
	patient_id				: String,
	patient_name			: String,
	doctor_name				: String,
	procedure_name			: String,
	demographics			: String
});

var GynaecologySurgery = new Schema({

	ProcedureDate: {type: Date, require: true, title: 'Procedure Date' },

	HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

	Age: {type: Number, require: true, title: 'Age'},

	Name: {type: String, require: true, title: 'Name'},

	Surname: {type: String, require: true, title: 'Surname'},

	P: {type: Number , title: 'Parity'},
	G: {type: Number, title: 'Gravidity'},
	M: {type: Number, title: 'Miscarriage'},
	E: {type: Number, title: 'Ectopic pregnancy'},

	HIV:{
		HIVStatus: {type: String, title: 'HIV Status'},
		CD4: {type: Number, title: 'CD4'}
	},

	typeOfProcedure: {
		Elective: {type: Boolean, title: 'Elective'},
		Emergency: {type: Boolean, title: 'Emergency'}
	},

	firm:{
		G1: {type: Boolean, title: 'G1'},
		G2: {type: Boolean, title: 'G2'},
		G3: {type: Boolean, title: 'G3'},
		ONC: {type: Boolean, title: 'ONC'}
	},

	categoryOfProcedure:{
		Oncology: {type: Boolean, title: 'Oncology'},
		GeneralGynae: {type: Boolean, title: 'General Gynaecology'},
		Infertility: {type: Boolean, title: 'Infertility'},
		Urologynaecology: {type: Boolean, title: 'Urologynaecology'}
	},

	typeOfAccess:{
		OpenAbdomen: {type: Boolean, title: 'Open Abdomen'},
		Endoscopy: {type: Boolean, title: 'Endoscopy'},
		Vaginal: {type: Boolean, title: 'Vaginal'}
	},

	preOperICD10Codes: [{type: String, title: 'Pre-Operative Diagnosis ICD Code:'}],

	performedBy:{
		Consultant: {type: Boolean, title: 'Consultant'},
		Fellow: {type: Boolean, title: 'Fellow'},
		Registrar: {type: Boolean, title: 'Registrar'},
		Intern: {type: Boolean, title: 'Intern'}
	},

	DygnosisNotOnICD10List: [{type: String, title: 'Diagnosis if not on ICD 10 list'}],

	ProPerformedCode: [{type: String, title: 'Procedure(s) Performed(Code) :'}],

	IntraOperativeComplications:{
		None: {type: Boolean, title: 'None'},
		BladderInjury: {type: Boolean, title: 'Bladder Injury'},
		BowelInjury: {type: Boolean, title: 'Bowel Injury'},
		BRUBT: {type: Boolean, title: 'Bleeding requiring unplanned blood transfusion'},
		ProcedureNotCompleted: {type: Boolean, title: 'Procedure Not Completed'}
	},

	OtherComplications: {type: String, title : 'Other Complications'},

    isNotCompeleted: {type: Boolean, default: false, title : 'Complete form later?'},
    completedBy: {type: String}

});

var AdmissionDischarge = new Schema({

	HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

	DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },

	Age: {type: Number, require: true, title: 'Age'},

	Name: {type: String, require: true, title: 'Name'},

	Surname: {type: String, require: true, title: 'Surname'},

	DateofAdmission: {type: Date, require: true, title: 'Date of Admission' },


	firm:{
		G1: {type: Boolean, title: 'G1'},
		G2: {type: Boolean, title: 'G2'},
		G3: {type: Boolean, title: 'G3'},
		ONC: {type: Boolean, title: 'ONC'}
	},

	Admission:{
		Emergency: {type: Boolean, title: 'Emergency'},
		ElectiveSurgery: {type: Boolean, title: 'Elective Surgery'},
		ElectiveOther: {type: Boolean, title: 'Elective Other'}
	},

	P: {type: Number , title: 'Parity'},
	G: {type: Number, title: 'Gravidity'},
	M: {type: Number, title: 'Miscarriage'},
	E: {type: Number, title: 'Ectopic pregnancy'},


	HIV: {
		HIVStatus: {type: String, title: 'HIV Status'},
		CD4: {type: Number, title: 'CD4'}
	},

	DateofDischarge: {type: Date, require: true, title: 'Date of Discharge' },

	TotalNumberOfDaysHospital: {type: Number, require: true, title: 'Total Number of Days in Hospital'},

	DaysInWard: {type: Number, require: true, title: 'Days in Ward'},

	DaysInICU: {type: Number, require: true, title: 'Days in ICU'},

	DaysInHighCare: {type: Number, require: true, title: 'Days in High Care'},

	FinalDiagnosisOnDischarge: [{type: String, title: 'Final diagnosis on discharge (ICD 10)'}],

	Miscarriage:{
		Threatening: {type: Boolean, title: 'Threatening'},
		Complete: {type: Boolean, title: 'Complete'},
		Incomplete: {type: Boolean, title: 'Incomplete'},
		Septic: {type: Boolean, title: 'Septic'}
	},
	Salpingitis:{
		ASOI: {type: Boolean, title: 'ASO I'},
		ASOII: {type: Boolean, title: 'ASO II'},
		ASOIII: {type: Boolean, title: 'ASO III'},
		ASOIV: {type: Boolean, title: 'ASO IV'}
	},
	Ectopic:{
		Ruptured: {type: Boolean, title: 'Ruptured'},
		Unruptured: {type: Boolean, title: 'Unruptured'}
	},
	BBA: {type: Boolean, title: 'BBA'},
	OtherDiagnosis:{type: Boolean, title: 'Other'},
	Oncology:{
		Cervix: {type: Boolean, title: 'Cervix'},
		Endometrium: {type: Boolean, title: 'Endometrium'},
		Ovarian: {type: Boolean, title: 'Ovarian'},
		Vulva: {type: Boolean, title: 'Vulva'},
		Vagina: {type: Boolean, title: 'Vagina'},
		ChorioGTD: {type: Boolean, title: 'Chorio/GTD'}
	},

	PostOperativeComplications: {
		None: {type: Boolean, title: 'None'},
		BladderInjury: {type: Boolean, title: 'Bladder injury'},
		BowelInjury: {type: Boolean, title: 'Bowel injury'},
		UretericInjury: {type: Boolean, title: 'Ureteric injury'},
		AnaestheticComplication: {type: Boolean, title: 'Anaesthetic complication'},
		ProcedureNotCompleted: {type: Boolean, title: 'Procedure not completed'},
		BRUBT: {type: Boolean, title: 'Bleeding requiring unplanned blood transfusion'},
		VascularInjury: {type: Boolean, title: 'Vascular injury'}
	},

	OtherComplications: {type: String, title : 'Other complications or reasons for non completion or anaesthetic complication '},
    isNotCompeleted: {type: Boolean, default: false, title : 'Complete form later?'},
    completedBy: {type: String}
});



/*//////////////////////////////////////CERVICAL CANCER///////////////////////////////////*/
var CervicalCancer = new Schema({

	Name: {type: String, require: true, title: 'Name'},

	Surname: {type: String, require: true, title: 'Surname'},

	HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

	ID: {type: Number, require: true, title: 'ID number'},

	DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },

	DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

	CellPhone:{
		First: {type: Number, require: true, title: 'Phone number'},
		Alternative: {type: Number, require: true, title: 'Alternative number'}
	},

	HIV:{
		HIVStatus: {type: String, title: 'HIV Status'},
		CD4: {type: Number, title: 'CD4'}
	},

	figoStage: {
		Ia1: {type: Boolean, title: 'Ia1'},
		Ia2: {type: Boolean, title: 'Ia2'},
		Ib1: {type: Boolean, title: 'Ib1'},
		Ib2: {type: Boolean, title: 'Ib2'},
		IIa1: {type: Boolean, title: 'IIa1'},
		IIa2: {type: Boolean, title: ' IIa2'},
		IIb : {type: Boolean, title: 'IIb '},
		IIIa : {type: Boolean, title: 'IIIa'},
		IIIb : {type: Boolean, title: 'IIIb'},
		IVa : {type: Boolean, title: 'IVa'},
		IVb : {type: Boolean, title: 'IVb'},
		Unknown: {type: Boolean, title: 'Unknown'}
	},

	tumor: {
		tumorSize:{
			lessThan4: {type: Boolean, title: '<4cm'},
			greaterThan4: {type: Boolean, title: '>4cm'},
			Unknown: {type: Boolean, title: 'Unknown'}
		},

		depthOfInvasion: {type: Number, title: 'If stage Ib1: depth of invasion (mm)(2 digits)'}
	},


	imaging:{

		useOfImagingDiagnosticTools: {

			Yes: {type: Boolean, title: 'Yes'},
			No: {type: Boolean, title: 'No'},
			Unknown: {type: Boolean, title: 'Unknown'}
		},

		ifYes:{
			MRI: {type: Boolean, title: 'MRI'},
			CT: {type: Boolean, title: 'CT'},
			Ultrasound: {type: Boolean, title: 'Ultrasound'},
			PET: {type: Boolean, title: 'PET'},
			Other: {type: Boolean, title: 'Other'},
			Unknown: {type: Boolean, title: 'Unknown'}
		}
	},

	siteOfDistantMetastase: {
		Nil: {type: Boolean, title: 'Nil'},
		Lung: {type: Boolean, title: 'Lung'},
		Liver: {type: Boolean, title: 'Liver'},
		Bowel: {type: Boolean, title: 'Bowel'},
		Bone: {type: Boolean, title: 'Bone'},
		Brain: {type: Boolean, title: 'Brain'},
		Other : {type: Boolean, title: 'Other '},
		Unknown : {type: Boolean, title: 'Unknown'}
	},

	Histology: {
		Squamous: {type: Boolean, title: 'Squamous'},
		Adeno: {type: Boolean, title: 'Adeno'},
		Adenosquamous: {type: Boolean, title: 'Adenosquamous'},
		Clearcell: {type: Boolean, title: 'Clear cell'},
		Other: {type: Boolean, title: 'Other'},
		Unknown : {type: Boolean, title: 'Unknown'}
	},

	Differentiation: {
		Well: {type: Boolean, title: '1 (well)'},
		Moderately: {type: Boolean, title: '2 (moderately)'},
		Poorly: {type: Boolean, title: '3 (poorly)'}
	},

	lymphovascularSpaceInvolvement : {
		Absent: {type: Boolean, title: 'Absent'},
		Present: {type: Boolean, title: 'Present'},
		Unknown: {type: Boolean, title: 'Unknown'}
	},

	primaryTreatment: {

		Nil: {type: Boolean, title: 'Nil'},
		SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
		RTAlone: {type: Boolean, title: 'RT alone'},
		NeoAdjuvantCTSurgery: {type: Boolean, title: 'Neo adjuvant CT + surgery'},
		SurgeryAdjuvantRTCRT: {type: Boolean, title: 'Surgery + adjuvant RT/CRT'},
		SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
		Chemoradiation: {type: Boolean, title: 'Chemoradiation'},
		CTAlone : {type: Boolean, title: 'CT alone'},
		Other : {type: Boolean, title: 'Other'},
		Unknown : {type: Boolean, title: 'Unknown'},
		DateofTreatment   : {type: Date, require: true, title: 'Date of treatment'}
	},

	typeOfSurgery: {
		Conization: {type: Boolean, title: 'Conization'},
		AmputationOfCervix: {type: Boolean, title: 'Amputation of cervix'},
		RTNoLND: {type: Boolean, title: 'RT no LND'},
		RTwithLND: {type: Boolean, title: 'RT with LND'},
		TAHnoLND: {type: Boolean, title: 'TAH, no LND'},
		TAHwithLND: {type: Boolean, title: ' TAH with LND'},
		VHnoLND : {type: Boolean, title: 'VH no LND'},
		VHwithLND : {type: Boolean, title: 'VH with LND'},
		RHnoLND : {type: Boolean, title: 'RH no LND'},
		RHwithLND : {type: Boolean, title: 'RH with LND'},
		RadVHnoLND : {type: Boolean, title: 'Rad VH no LND'},
		RadVHwithLND: {type: Boolean, title: 'Rad VH with LND'},
		AnyKindOfExenteration: {type: Boolean, title: 'Any kind of exenteration'},
		Unknown: {type: Boolean, title: 'Unknown'},
		Other: {type: Boolean, title: 'Other'},
		DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
	},

	typeOfRadiotherapy: {
		Intracavitary: {type: Boolean, title: 'Intracavitary'},
		ExternalPelvicRT: {type: Boolean, title: 'External pelvic RT'},
		ExternalPelvicParaortic: {type: Boolean, title: 'External pelvic + paraortic'},
		ExternalPelvicIntracavitary: {type: Boolean, title: 'External pelvic + intracavitary'},
		ExtpelvicParaortIntracavitary: {type: Boolean, title: 'Ext pelvic paraortic + intracavitary'},
		Unknown: {type: Boolean, title: 'Unknown'},
		DateStarted: {type: Date, require: true, title: 'Date started' },
		DateEnded: {type: Date, require: true, title: 'Date ended' }
	},

	typeOfChemotherapy:{
		Chemotherapy: {type: String, title: 'Specify type and drugs'},
		DateStarted: {type: Date, require: true, title: 'Date started' },
		DateEnded: {type: Date, require: true, title: 'Date ended' }
	},

	responseToTreatment: {
		Complete: {type: Boolean, title: 'Complete'},
		Partial: {type: Boolean, title: 'Partial'},
		StableDisease: {type: Boolean, title: 'Stable disease'},
		ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
		NotAssessable: {type: Boolean, title: 'Not assessable'},
		Unknown: {type: Boolean, title: 'Unknown'},
		Dateofassessment: {type: Date, require: true, title: 'Date of assessment' }
	},

	surgicalPathologicalEvaluation :{
		tumorSize: {
			lessThan4: {type: Boolean, title: '<4cm'},
			greaterThan4: {type: Boolean, title: '>4cm'},
			Unknown: {type: Boolean, title: 'Unknown'}
		}
	},

	lymphnodeInvolvementAtSurgery: {
		Notevaluated: {type: Boolean, title: 'Not evaluated'},
		Posnodes: {type: Boolean, title: 'Pos nodes'},
		Negnodes: {type: Boolean, title: 'Neg nodes'},
		Unknown: {type: Boolean, title: 'Unknown'}
	},

	nodesInvolved: {
		Onlypelvic: {type: Boolean, title: 'Only pelvic'},
		Pelvicparaortic: {type: Boolean, title: 'Pelvic + paraortic'},
		Onlyparaortic: {type: Boolean, title: 'Only paraortic'},
		Unknown: {type: Boolean, title: 'Unknown'}
	},

	numberOfNodesExamined : {
		Pelvic: {type: Number, title: 'Pelvic'},
		Paraortic: {type: Number, title: 'Paraortic'}
	},

	numberOfNodesPositive: {
		Pelvic: {type: Number, title: 'Pelvic'},
		Paraortic: {type: Number, title: 'Paraortic'}
	},

	Relapse: {
		Yes: {type: Boolean, title: 'Yes'},
		No: {type: Boolean, title: 'No'},
		Unknown: {type: Boolean, title: 'Unknown'},
		DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
	},

	SiteOfRelapse: {
		Local: {type: Boolean, title: 'Local'},
		Metastatic: {type: Boolean, title: 'Metastatic'},
		Localandmetastatic: {type: Boolean, title: 'Local and metastatic'},
		Unknown: {type: Boolean, title: 'Unknown'}
	},

	TreatmentAtRelapse: {
		Local: {type: Boolean, title: 'Local'},
		Surgery: {type: Boolean, title: 'Surgery'},
		RT: {type: Boolean, title: 'RT'},
		CT: {type: Boolean, title: 'CT'},
		SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
		CTRT: {type: Boolean, title: 'CT + RT'},
		Other: {type: Boolean, title: 'Other'},
		Unknown: {type: Boolean, title: 'Unknown'}
	},

	DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},

	lastKnownVitalStatus: {
		AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
		AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
		AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
		Dead: {type: Boolean, title: 'Dead'}
	},

	causeOfDeath :{
		CaCx: {type: Boolean, title: 'Ca Cx'},
		Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
		Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
		Intercurrentdisease: {type: Boolean, title: 'Intercurrent disease'},
		Unknowncauses: {type: Boolean, title: 'Unknown causes'},
		DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
	},

    isNotCompeleted: {type: Boolean, default: false, title : 'Complete form later?'},
    completedBy: {type: String}
});


/*///////////////////////////////////////// ENDOMETRIAL /////////////////////////////////////////////////*/
var EndometrialCancer = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    ID: {type: Number, require: true, title: 'ID number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    CellPhone:{
        First: {type: Number, require: true, title: 'Phone number'},
        Alternative: {type: Number, require: true, title: 'Alternative number'}
    },

    HIVStatus:{
        Negative: {type: Boolean, title: 'HIV Negative'},
        Positive: {type: Boolean, title: 'HIV Positive'}
    },

    CD4: {type: Number, title: 'CD4 Count:'},

    figoStage: {
        Ia: {type: Boolean, title: 'Ia'},
        Ib: {type: Boolean, title: 'Ib'},
        Ic: {type: Boolean, title: 'Ic'},
        IIa: {type: Boolean, title: 'IIa'},
        IIb: {type: Boolean, title: 'IIb'},
        IIIa: {type: Boolean, title: 'IIIa'},

        IIIb: {type: Boolean, title: 'IIIb'},
        IIIc: {type: Boolean, title: 'IIIc'},
        IVa : {type: Boolean, title: 'IVa'},
        IVb : {type: Boolean, title: 'IVb'},
        Unknown: {type: Boolean, title: 'Unknown'},
        StageUnavailable: {type: Boolean, title: 'Surgical stage unavailable'}
    },

    Histology: {
        NilUnclassifiable: {type: Boolean, title: 'Nil/unclassifiable'},
        EndometrioidAdeno: {type: Boolean, title: 'Endometrioid adeno'},
        Adenosquamous: {type: Boolean, title: 'Adenosquamous'},
        Clearcell: {type: Boolean, title: 'Clear cell'},
        MucinousAdeno: {type: Boolean, title: 'Mucinous adeno '},
        PapillarySerous: {type: Boolean, title: 'Papillary serous'},
        Squamous: {type: Boolean, title: 'Squamous'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    Differentiation: {
        Well: {type: Boolean, title: '1 (well)'},
        Moderately: {type: Boolean, title: '2 (moderately)'},
        Poorly: {type: Boolean, title: '3 (poorly)'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    LymphovascularSpaceInvolvement: {
        Absent: {type: Boolean, title: 'Absent'},
        Present: {type: Boolean, title: 'Present'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation HT = Hormonal treatment)---*/
    primaryTreatmentPerformed : {
        Nil: {type: Boolean, title: 'Nil'},
        SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
        SurgeryAdjuvantRT: {type: Boolean, title: 'Surgery + adjuvant RT'},
        SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
        AdjuvantHT: {type: Boolean, title: 'Adjuvant HT'},
        HormonalPrimaryTherapy: {type: Boolean, title: 'Hormonal primary therapy'},
        Other : {type: Boolean, title: 'Other non standard treatments'},
        Unknown : {type: Boolean, title: 'Unknown'},
        DateofTreatment : {type: Date, require: true, title: 'Date of treatment'}
    },


    /*--(RH= Radical hysterectomy; LND= pelvic/paraortic lymphadenectomy)--*/
    typeOfSurgery: {
        SimpleAbdHystNoLND: {type: Boolean, title: 'Simple abd hyst no LND'},
        SimpleAbdHystWithLND: {type: Boolean, title: 'Simple abd hyst with LND'},
        SimpleVagHystNoLND: {type: Boolean, title: 'Simple vag  hyst no LND'},
        SimpleVagHystWithLND: {type: Boolean, title: 'Simple vag  hyst with LND'},
        RadicalAbdHystNoLND: {type: Boolean, title: 'Radical abd hyst no LND'},
        RadicalAbdHystWithLND: {type: Boolean, title: ' Radical abd hyst with LND'},
        AnyKindOfexenteration : {type: Boolean, title: 'Any kind of exenteration'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Other: {type: Boolean, title: 'Other'},
        DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
    },


    nodesInvolved: {
        Onlypelvic: {type: Boolean, title: 'Only pelvic'},
        Pelvicparaortic: {type: Boolean, title: 'Pelvic + paraortic'},
        Onlyparaortic: {type: Boolean, title: 'Only paraortic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    numberOfNodesExamined : {
        Pelvic: {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic'}
    },

    numberOfNodesPositive: {
        Pelvic: {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic'}
    },

    /*---SURGICAL PATHOLOGICAL EVALUATION---*/

    Cytology: {
        NotAvailable : {type: Boolean, title: 'Not available'},
        Negative: {type: Boolean, title: 'Negative'},
        Positive: {type: Boolean, title: 'Positive'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    Metastase: {
        Nil: {type: Boolean, title: 'Nil'},
        UterineSerosa: {type: Boolean, title: 'Uterine serosa'},
        Vagina: {type: Boolean, title: 'Vagina'},
        Adnexa: {type: Boolean, title: 'Adnexa'},
        BladdeBowelMucosa: {type: Boolean, title: 'Bladder/bowel mucosa'},
        IntraAbdominal: {type: Boolean, title: 'Intra abdominal'},
        InguinalNodes: {type: Boolean, title: 'Inguinal nodes '},
        Distant: {type: Boolean, title: 'Distant'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    typeOfRadiotherapy: {
        Intracavitary: {type: Boolean, title: 'Intracavitary'},
        ExternalPelvicRT: {type: Boolean, title: 'External pelvic RT'},
        ExternalPelvicParaortic: {type: Boolean, title: 'External pelvic + paraortic'},
        ExternalPelvicIntracavitary: {type: Boolean, title: 'External pelvic + intracavitary'},
        ExtpelvicParaortIntracavitary: {type: Boolean, title: 'Ext pelvic paraortic + intracavitary'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },

    typeOfChemotherapy:{
        Chemotherapy: {type: String, title: 'Specify type and drugs'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },

    HormonalTreatment: {
        SingleDrug : {type: Boolean, title: 'Single drug'},
        MultipleDrug : {type: Boolean, title: 'Multiple drug '},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },

    responseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        NotAssessable: {type: Boolean, title: 'Not assessable'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Dateofassessment: {type: Date, require: true, title: 'Date of assessment' }
    },

    Relapse: {
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
    },

    siteOfDistantMetastase: {
        Local: {type: Boolean, title: 'Local'},
        Metastatic: {type: Boolean, title: 'Metastatic'},
        LocalAndMetastatic: {type: Boolean, title: 'Local and metastatic'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },


    /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/
    TreatmentAtRelapse: {
        Nil: {type: Boolean, title: 'Nil'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
        HT: {type: Boolean, title: 'HT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},

    LastKnownVitalStatus: {
        AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
        AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
        AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
        Dead: {type: Boolean, title: 'Dead'}
    },


    causeOfDeath :{
        EndometrialCa: {type: Boolean, title: 'Endometrial ca'},
        Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
        Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
        Intercurrentdisease: {type: Boolean, title: 'Intercurrent disease'},
        Unknowncauses: {type: Boolean, title: 'Unknown causes'},
        DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
    }
});


/*//////////////////////////// ONCOLOGYFOLLOWUPVISIT ////////////////////////////////////////*/

var  OncologyFollowUpVisit = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    DateOfVisit: {type: Date, require: true, title: 'Date of visit' },

    ExaminedByDr: {type: String, require: true, title: 'Examined by Dr.'},

    InitialDiagnosisAndStage: {type: String, require: true, title: 'Initial diagnosis and stage'},

    DateDiagnosed: {type: Date, require: true, title: 'Date diagnosed' },

    Complaints: {type: String, require: true, title: 'Complaints'},

    ClinicalFindings : {type: String, require: true, title: 'Clinical findings'},

    AdditionalNotes : {type: String, title: 'Additional notes'},

    Plan:{
        SpecialInvestigations:{type: String, require: true, title: 'Special investigations'},
        Referral:{type: String, require: true, title: 'Referral'},
        Treatment:{type: String, require: true, title: 'Treatment'}
    },

    NextFollowUpVisit : {type: String,  require: true, title: 'Next Follow-up visit'},

    /*----Please complete after examination---*/

    TimeFromPrimaryTreatment:{
        months:{type: Number, title: 'months'},
        years:{type: Number, title: 'years'}
    },

    LastKnownVitalStatusOfPatient:{
        AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
        AliveNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
        AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
        Dead: {type: Boolean, title: 'Dead'}
    },

    Relapse:{
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    SiteOfRelapse:{
        Local: {type: Boolean, title: 'Local'},
        Metastatic: {type: Boolean, title: 'Metastatic'},
        LocalAndMetastatic: {type: Boolean, title: 'Local and metastatic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    DateOfRelapseDiagnosis: {type: Date, title: 'Date of relapse diagnosis' },


    /*--RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)--*/
    TreatmentAtRelapse:{
        Nil: {type: Boolean, title: 'Nil'},
        Surgery: {type: Boolean, title: 'Surgery'},
        Radiotherapy : {type: Boolean, title: 'Radiotherapy'},
        Chemotherapy: {type: Boolean, title: 'Chemotherapy'},
        HT: {type: Boolean, title: 'HT'},
        Surgery_RT : {type: Boolean, title: 'Surgery + RT'},
        CT_RT: {type: Boolean, title: 'CT + RT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    }
});


/*///////////////////////////////////////// VAGINAL /////////////////////////////////////////////////*/
var VaginalCancer = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    ID: {type: Number, require: true, title: 'ID number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },
    
   CellPhone:{
        First: {type: Number, require: true, title: 'Phone number'},
        Alternative: {type: Number, require: true, title: 'Alternative number'}
    },

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    HIVStatus:{
        Negative: {type: Boolean, title: 'HIV Negative'},
	   Positive: {type: Boolean, title: 'HIV Positive'},
	   CD4: {type: Number, title: 'CD4 Count:'}
    },
    
    figoStage: {
        I: {type: Boolean, title: 'I'},
        II: {type: Boolean, title: 'II'},
	   III: {type: Boolean, title: 'III'},
	   IVa: {type: Boolean, title: 'IVa'},
	   IVb: {type: Boolean, title: 'IVb'},
	   Unknown: {type: Boolean, title: 'Unknown'}
    },

    /*(whatever clinically assessed)*/
    TumorSizeB4: {
        NotAssessed: {type: Boolean, title: 'Not assessed'},
        LTE2cm: {type: Boolean, title: '≤ 2cm'},
        GT2cm: {type: Boolean, title: '> 2cm'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    InvolvedVaginalSites:{
            UpperThird:{type:Boolean, title:'Upper third'},
            MiddleThird:{type:Boolean, title:'Middle third'},
            LowerThird:{type:Boolean, title:'Lower third'},
            Unknown: {type: Boolean, title: 'Unknown'}
    },


    SiteOfDistantMetastase: {
       Nil: {type: Boolean, title: 'Nil'},
       Lung: {type: Boolean, title: 'Lung'},
       Liver: {type: Boolean, title: 'Liver'},
       Bowel: {type: Boolean, title: 'Bowel'},
       Bone: {type: Boolean, title: 'Bone'},
       Brain: {type: Boolean, title: 'Brain'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    Histology: {
        NoBiopsy: {type: Boolean, title: 'No biopsy'},
        Squamous: {type: Boolean, title: 'Squamous'},
        Adeno: {type: Boolean, title: 'Adeno'},
        AdenoColumnar: {type: Boolean, title: 'Adeno columnar'},
        Endometroid: {type: Boolean, title: 'Endometroid'},
        ClearCell: {type: Boolean, title: 'Clear cell'},
        Undifferentiated: {type: Boolean, title: 'Undifferentiated'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },

    Differentiation: {
        Well: {type: Boolean, title: '1 (well)'},
        Moderately: {type: Boolean, title: '2 (moderately)'},
        Poorly: {type: Boolean, title: '3 (poorly)'},
       Unknown : {type: Boolean, title: 'Unknown'}
    },



    LymphovascularSpaceInvolvement:{
            Absent:{type:Boolean, title: 'Absent'},
            Present:{type:Boolean, title: 'Present'},
            Unknown:{type:Boolean, title: 'Unknown'}
        },


    /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation)--*/    
    PrimaryTreatmentPerformed : {
        Nil: {type: Boolean, title: 'Nil'},
        SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
        RTAlone: {type: Boolean, title: 'RT alone'},
        RTFollowedBySurgeryWithin90Days: {type: Boolean, title: 'RT followed by surgery within 90 days'},
        NeoAdjuvantCTAndSurgery: {type: Boolean, title: 'Neo adjuvant CT + surgery'},
        SurgeryAdjuvantRTCRT: {type: Boolean, title: 'Surgery + adjuvant RT/CRT'},
        SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
        Chemoradiation: {type: Boolean, title: 'Chemoradiation'},
        CTAlone : {type: Boolean, title: 'CT alone'},
        Other : {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'},
        DateofTreatment : {type: Date, require: true, title: 'Date of treatment'}
    },
    
    /*--( LND= inguinal/pelvic/paraortic lymphadenectomy)--*/
    typeOfSurgery: {
        LazerExcision: {type: Boolean, title: 'Lazer excision'},
        Electroresection: {type: Boolean, title: 'Electroresection'},
        LocalTumorResection: {type: Boolean, title: 'Local tumor resection'},
        PartialVaginectomy: {type: Boolean, title: 'Partial vaginectomy'},
        CompleteVaginectomyWithLND: {type: Boolean, title: 'Complete vaginectomy with LND'},
        CompleteVaginectomyWithoutLND: {type: Boolean, title: 'Complete vaginectomy without LND'},
        TumorReducingProcedure: {type: Boolean, title: 'Tumor reducing procedure'},
        AnyKindOfExenteration : {type: Boolean, title: 'Any kind of exenteration'},
        Other : {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
    },

    typeOfRadiotherapy: {
        Intracavitary: {type: Boolean, title: 'Intracavitary'},
        ExternalPelvicRT: {type: Boolean, title: 'External pelvic RT'},
        ExternalInguinalPelvicParaortic: {type: Boolean, title: 'External inguinal pelvic + paraortic'},
        ExternalPelvicIntracavitary: {type: Boolean, title: 'External pelvic + intracavitary'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },
    

    typeOfChemotherapy: {
        SpecifyTypeAndDrugs: {type: String, title: 'Specify type and drugs'},
        DateStarted: {type: Date, require: true, title: 'Date started'},
        DateEnded: {type: Date, require: true, title: 'Date ended'}
    },

    ResponseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        NotAssessable: {type: Boolean, title: 'Not assessable'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfAssessment: {type: Date, require: true, title: 'Date of assessment' }
    },

/*Surgical pathological evaluation (patients treated with upfront surgery)*/
    TumorSize : {
        MaxTumorDiameter: {type:Number, title: 'Max tumor diameter (mm)'},
        MaxDepthOfInvasion: {type: Number, title: 'Max depth of invasion (mm)'}
    },

/*(histologically proven) */
        LymphnodeInvolvementAtSurgery : {
        NNotEvaluated: {type: Boolean, title: 'Not evaluated'},
        PosNodes: {type: Boolean, title: 'Pos nodes'},
        NegNodes: {type: Boolean, title: 'Neg nodes'},
        Unknown: {type: Boolean, title: 'Unknown'},

    /*(paraortic = distant metastases)*/
        NodesInvolved: {
        OnlyPelvic: {type: Boolean, title: 'Only pelvic'},
        InguinaPelelvic: {type: Boolean, title: 'Inguinal + pelvic'},
        OnlyInguinal: {type: Boolean, title: 'Only inguinal'},
        Unknown: {type: Boolean, title: 'Unknown'}
        },

        NumberOffNodesExamined: {
          Pelvic: {type: Number, title: 'Pelvic'},
         Inguinal: {type: Number, title: 'Inguinal'}
        },

        NumberOffNodesPositive: {
          Pelvic: {type: Number, title: 'Pelvic'},
         Inguinal: {type: Number, title: 'Inguinal'}
        }

    },

   Relapse: {
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
    }, 
    
       SiteOfRelapse:{
        Local:{type: Boolean, title: 'Local'},
        Metastatic:{type: Boolean, title: 'Metastatic'},
        LocalAndMetastatic:{type: Boolean, title: 'Local and metastatic'},
        Unknown:{type: Boolean, title: 'Unknown'}
    }, 


         /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/   
    TreatmentAtRelapse: {
        Nil: {type: Boolean, title: 'Nil'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
        HT: {type: Boolean, title: 'HT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    
/*Follow up*/
     DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},

 LastKnownVitalStatus: {
        AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
        AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
        AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
        Dead: {type: Boolean, title: 'Dead'}
    },


    /*Death*/
    causeOfDeath :{
        VaginalCa: {type: Boolean, title: 'Vaginal ca'},
        Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
        Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
        IntercurrentDisease: {type: Boolean, title: 'Intercurrent disease'},
        UnknownCauses: {type: Boolean, title: 'Unknown causes'},
        DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
    }

});


/*///////////////////////////////////////// FALLOPIAN /////////////////////////////////////////////////*/
var FallopianTubeCancer = new Schema({

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },

    Age: {type: Number, require: true, title: 'Age'},

    ID: {type: Number, require: true, title: 'ID number'},

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    HIVStatus: {type: String, title: 'HIV Status'},

    CD4: {type: Number, title: 'CD4'},

    figoStage: {
        Ia: {type: Boolean, title: 'Ia'},
        Ib: {type: Boolean, title: 'Ib'},
        Ic: {type: Boolean, title: 'Ic'},
        IIa: {type: Boolean, title: 'IIa'},
        IIb: {type: Boolean, title: 'IIb'},
        IIc: {type: Boolean, title: 'IIc'},
        IIIa: {type: Boolean, title: 'IIIa'},
        IIIb: {type: Boolean, title: 'IIIb'},
        IIIc: {type: Boolean, title: 'IIIc'},
        IV: {type: Boolean, title: 'IV'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    //Site of distant matastases (when appropriate)
    SiteOfDistantMatastases:{
        PleuralEffusion: {type: Boolean, title: 'Pleural effusion'},
        Liver: {type: Boolean, title: 'Liver'},
        Brain: {type: Boolean, title: 'Brain'},
        Othersite: {type: Boolean, title: 'Other site'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    //Histology
    Histology: {
        Nohistology: {type: Boolean, title: 'No histology/Unclassifiable'},
        Serousadenocarcinoma: {type: Boolean, title: 'Serous adenocarcinoma'},
        Mucinousadenocarcinoma: {type: Boolean, title: 'Mucinous adenocarcinoma'},
        Endometroidadenocarcinoma: {type: Boolean, title: 'Endometroid  adenocarcinoma'},
        Clearcelladenocarcinoma: {type: Boolean, title: 'Clear cell adenocarcinoma'},
        Adenoacanthoma : {type: Boolean, title: 'Adenoacanthoma'},
        Adenosquamous : {type: Boolean, title: 'Adenosquamous'},
        Undifferentiatedcarcinoma : {type: Boolean, title: 'Undifferentiated carcinoma'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },


    //Differentiation
    Differentiation: {
        Well: {type: Boolean, title: '1 (well)'},
        Moderately: {type: Boolean, title: '2 (moderately)'},
        Poorly: {type: Boolean, title: '3 (poorly)'}
    },

    //Treatments performed (RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation)
    TreatmentPerformed:{
        Nil: {type: Boolean, title: 'Nil'},
        SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
        RTAlone: {type: Boolean, title: 'RT alone'},
        NeoAdjuvantCTSurgery: {type: Boolean, title: 'Neo adjuvant CT + surgery'},
        SurgeryAdjuvantRT: {type: Boolean, title: 'Surgery + adjuvant RT'},
        SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
        OtherNonStandardTreatments: {type: Boolean, title: 'Other non standard treatments'},
        Unknown : {type: Boolean, title: 'Unknown'},
        DateOfTreatment  : {type: Date, require: true, title: 'Date of treatment'}
    },


    //Type of surgery (LND: pelvic/paraortic l/node dissection; USO: Unilateral salping-oopherectomy; BSO: bilateral salpingo-oopherectomy)
    TypeOfSurgery: {
        USOwithoutLND: {type: Boolean, title: 'USO, without LND'},
        USOwithLND: {type: Boolean, title: 'USO, with LND'},
        BSOwithoutLND: {type: Boolean, title: 'BSO, without LND'},
        BSOwithLND: {type: Boolean, title: 'BSO with LND'},
        TAHBSOOmentectomymultiplebiopsiesnoLND: {type: Boolean, title: 'TAH, BSO, Omentectomy, multiple biopsies, no LND'},
        TAHBSOomentectomymultiplebiopsieswithLND: {type: Boolean, title: 'TAH, BSO, omentectomy, multiple biopsies, with LND'},
        ExplorativeLaparotomylaparoscopy : {type: Boolean, title: 'Explorative laparotomy/laparoscopy'},
        Othertypeofsurgery : {type: Boolean, title: 'Other type of surgery (upper abdomen surgical procedures, GIT-, urological surgery'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Other: {type: Boolean, title: 'Other'},
        DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
    },


    //Type of Radiotherapy
    TypeofRadiotherapy: {
        Intracavitary: {type: Boolean, title: 'Intracavitary'},
        ExternalpelvicRT: {type: Boolean, title: 'External pelvic RT'},
        Externalpelvicparaortic: {type: Boolean, title: 'External pelvic + paraortic'},
        Externalpelvicintracavitary: {type: Boolean, title: 'External pelvic + intracavitary'},
        Extpelvicparaorticintracavitary: {type: Boolean, title: 'Ext pelvic/paraortic + intracavitary'},
        Intraperitonealradioisotopes: {type: Boolean, title: 'Intraperitoneal  radioisotopes'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started'},
        DateEnded: {type: Date, require: true, title: 'Date ended'}
    },


    //Type of Chemotherapy (CT = Chemotherapy, PC = platinum compound, Completed / uncompleted refers to full course)
    TypeofChemotherapy: {
        Type1: {type: Boolean, title: 'Single drug (unspecified) CT - uncompleted'},
        Type2: {type: Boolean, title: 'Single drug (unspecified) CT - completed'},
        Type3: {type: Boolean, title: 'Single drug CT + PC - uncompleted'},
        Type4: {type: Boolean, title: 'Single drug CT + PC - completed'},
        Type5: {type: Boolean, title: 'Single drug CT, no PC - uncompleted'},
        Type6: {type: Boolean, title: 'Single drug CT, no PC - completed'},
        Type7: {type: Boolean, title: 'Multiple drug (unspecified) CT - uncompleted'},
        Type8: {type: Boolean, title: 'Multiple drug (unspecified) CT - completed'},
        Type9: {type: Boolean, title: 'Multiple drug CT +PC + Taxane  - uncompleted'},
        Type10: {type: Boolean, title: 'Multiple drug CT +PC + Taxane  - completed'},
        Type11: {type: Boolean, title: 'Multiple drug CT, no PC, with Taxane  - uncompleted'},
        Type12: {type: Boolean, title: 'Multiple drug CT, no PC, with Taxane  - completed'},
        Type13: {type: Boolean, title: 'Multiple drug CT, + PC, without Taxane  - uncompleted'},
        Type14: {type: Boolean, title: 'Multiple drug CT, + PC, without Taxane  - completed'},
        Type15: {type: Boolean, title: 'Multiple drug CT, no PC, no Taxane  - uncompleted'},
        Type16: {type: Boolean, title: 'Multiple drug CT, no PC, no Taxane  - completed'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },


    //Response to treatment
    ResponseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        NotAssessable: {type: Boolean, title: 'Not assessable'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfAssessment: {type: Date, require: true, title: 'Date of assessment' }
    },


    //Surgical pathological evaluation
    //Size of tumor outside Fallopian tube at opening of abdomen
    SPETumorSize: {
        NoMacroscopicDisease: {type: Boolean, title: 'No macroscopic disease'},
        BTEThan2: {type: Boolean, title: '<=2cm'},
        Between2And10: {type: Boolean, title: 'Between 2 and 10 cm'},
        BT10: {type: Boolean, title: '>= 10cm'},
        Unknown: {type: Boolean, title: 'Unknown'}

    },


    //Diameter of residual implants (after surgery)
    SPEtumorsizeAS: {
        NoMacroscopicResDisease: {type: Boolean, title: 'No microscopic residual disease'},
        LT05: {type: Boolean, title: '< 0.5cm'},
        Between05And1: {type: Boolean, title: 'Between 0.5 and 1 cm'},
        Between1and2: {type: Boolean, title: 'Between 1 and 2 cm'},
        BT2: {type: Boolean, title: '>2cm'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    //Lymph node involvement in upfront surgery (histologically)
    LymphNodeInvolvementAtSurgery: {
        Notevaluated: {type: Boolean, title: 'Not evaluated'},
        PosNodes: {type: Boolean, title: 'Pos nodes'},
        NegNodes: {type: Boolean, title: 'Neg nodes'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    //Nodes involved
    Nodesinvolved: {
        Onlypelvic: {type: Boolean, title: 'Pelvic  + paraortic'},
        PelvicParaorticInguinal: {type: Boolean, title: 'Pelvic  + paraortic + inguinal'},
        OnlyInguinal: {type: Boolean, title: 'Only inguinal'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    //Number of nodes examined
    NumberOfNodesExamined: {
        Pelvic: {type: Number, title: 'Inguinal'},
        PelvicParaortic: {type: Number, title: 'Pelvic/paraortic '}
    },


    //Number of nodes positive
    NumberOfNodesPositive : {
        Pelvic: {type: Number, title: 'Inguinal'},
        PelvicParaortic: {type: Number, title: 'Pelvic/paraortic '}
    },


    //Cytology (Presence of malignant cells)
    Cytology: {
        NotEvaluated: {type: Boolean, title: 'Not evaluated'},
        Positive: {type: Boolean, title: 'Positive'},
        Negative: {type: Boolean, title: 'Negative'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    //Second surgery
    SecondSurgery: {
        IntervalDebulking: {type: Boolean, title: 'Interval debulking'},
        SecondLook: {type: Boolean, title: 'Second look'},
        SecondSurgicalEffort: {type: Boolean, title: 'Second surgical effort'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfSecondSurgery: {type: Date, require: true, title: 'Date of 2nd surgery'}
    },


    //Status at second surgery
    StatusAtSecondSurgery: {
        CompleteRemission: {type: Boolean, title: 'Complete remission'},
        MicroscopicDisease: {type: Boolean, title: 'Microscopic disease'},
        NoSingleImplant: {type: Boolean, title: 'No single implant > 1cm'},
        ImplantsBT1: {type: Boolean, title: 'Implants > 1cm'},
        PosRetroperNodes: {type: Boolean, title: 'Positive retroperitoneal nodes'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    //Status after second surgery
    StatusAfterSecondSurgery: {
        NoMacroscopicDiseaseLeft: {type: Boolean, title: 'No macroscopic disease left after surgery'},
        MacroscopicDiseaseLT1: {type: Boolean, title: 'Macroscopic disease <1cm left after surgery'},
        MacroscopicDiseaseBT1: {type: Boolean, title: 'Macroscopic disease >1cm left after surgery'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    //Relapse
    Relapse: {
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
    },


    //Site of relapse
    SiteOfRelapse:
    {
        Local: {type: Boolean, title: 'Local'},
        Metastatic: {type: Boolean, title: 'Metastatic'},
        LocalAndmetastatic: {type: Boolean, title: 'Local and metastatic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    //Treatment at relapse (RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy )
    TreatmentAtRelapse: {
        Local: {type: Boolean, title: 'Nil'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
        HT: {type: Boolean, title: 'HT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    //Follow-up
    DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},

    LastKnownVitalStatus: {
        AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
        AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
        AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
        Dead: {type: Boolean, title: 'Dead'}
    },

    //Death
    CauseOfDeath: {
        FallTubeCa: {type: Boolean, title: 'Fallopian tube ca'},
        OtherPrimaryCancer: {type: Boolean, title: 'Other primary cancer'},
        Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
        IntercurrentDisease: {type: Boolean, title: 'Intercurrent disease'},
        UnknownCauses: {type: Boolean, title: 'Unknown causes'},
        DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
    }
});


/*///////////////////////////////////////// VULVA //////////////////////////////////////////////*/
var VulvaCancer = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    ID: {type: Number, require: true, title: 'ID number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },
    
   CellPhone:{
        First: {type: Number, require: true, title: 'Phone number'},
        Alternative: {type: Number, require: true, title: 'Alternative number'}
    },

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    HIVStatus:{
        Negative: {type: Boolean, title: 'HIV Negative'},
	    Positive: {type: Boolean, title: 'HIV Positive'},
	    CD4: {type: Number, title: 'CD4 Count:'}
    },
    
    figoStage: {
        Ia: {type: Boolean, title: 'Ia'},
        Ib: {type: Boolean, title: 'Ib'},
        II: {type: Boolean, title: 'II'},
	    III: {type: Boolean, title: 'III'},
	    IVa: {type: Boolean, title: 'IVa'},
	    IVb: {type: Boolean, title: 'IVb'},
	    Unknown: {type: Boolean, title: 'Unknown'}
    },

    SiteOfDistantMetastase: {
	    Nil: {type: Boolean, title: 'Nil'},
        Skin: {type: Boolean, title: 'Skin'},
	    Bone: {type: Boolean, title: 'Bone'},
	    Lungs: {type: Boolean, title: 'Lungs'},
	    Liver: {type: Boolean, title: 'Liver'},
	    Brain: {type: Boolean, title: 'Brain'},
        LymphNodesOtherThanFemoralAndInguinal: {type: Boolean, title: 'Lymph nodes other than femoral and inguinal'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    
	Histology: {
        NilUnclassifiable: {type: Boolean, title: 'Nil/Unclassifiable'},
        SquamousInSitu: {type: Boolean, title: 'Squamous in situ'},
        Verrucous: {type: Boolean, title: 'Verrucous'},
        BasalCell: {type: Boolean, title: 'Basal cell'},
        Squamous: {type: Boolean, title: 'Squamous'},
        BartholinGlandAdeno: {type: Boolean, title: 'Bartholins gland adeno/squamous'},
	    Adenocarcinoma: {type: Boolean, title: 'Adenocarcinoma'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    
	Differentiation: {
        Well: {type: Boolean, title: '1 (well)'},
        Moderately: {type: Boolean, title: '2 (moderately)'},
        Poorly: {type: Boolean, title: '3 (poorly)'},
	    Unknown : {type: Boolean, title: 'Unknown'}
    },
    
        /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation)--*/    
	PrimaryTreatmentPerformed : {
        Nil: {type: Boolean, title: 'Nil'},
        SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
	    RTAlone: {type: Boolean, title: 'RT alone'},
	    RTFollowedBySurgeryWithin60Days: {type: Boolean, title: 'RT followed by surgery within 60 days'},
	    NeoAdjuvantCTAndSurgery: {type: Boolean, title: 'Neo adjuvant CT + surgery'},
	    SurgeryAdjuvantRT: {type: Boolean, title: 'Surgery + adjuvant RT'},
	    SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
	    Other : {type: Boolean, title: 'Other non standard treatments'},
	    CRT : {type: Boolean, title: 'CRT'},
        Unknown : {type: Boolean, title: 'Unknown'},
	    DateofTreatment : {type: Date, require: true, title: 'Date of treatment'}
    },
    
    
            /*--(LND = lymp hadenectomy)--*/
    typeOfSurgery: {
        WideLocalExcisionWithLND: {type: Boolean, title: 'Wide local excision with LND'},
	    WideLocalExcisionNoLND: {type: Boolean, title: 'Wide local excision, no LND'},
        SimpleVulvectomyWithLND: {type: Boolean, title: 'Simple vulvectomy with LND'},
        SimpleVulvectmyNoLND: {type: Boolean, title: 'Simple vulvectmy, no LND'},
        RadicalVulvectomyNoLND: {type: Boolean, title: 'Radical vulvectomy, no LND'},
        RadicalVulvectomyWithLND: {type: Boolean, title: 'Radical vulvectomy with LND'},
        AnyKindOfExenteration : {type: Boolean, title: 'Any kind of exenteration'},
        Other : {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
    },

        typeOfRadiotherapy: {
        Intracavitary: {type: Boolean, title: 'Intracavitary'},
        ExternalRT: {type: Boolean, title: 'External RT'},
        ExternalIntracavitary: {type: Boolean, title: 'External + intracavitary'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },
    
    
	typeOfChemotherapy:{
        SpecifyTypeAndDrugs: {type: String, require: true, title: 'Specify type and drugs'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },
    
    responseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        NotAssessable: {type: Boolean, title: 'Not assessable'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfAssessment: {type: Date, require: true, title: 'Date of assessment' }
    },
    
    SurgicalPathologicalEvaluation:{
	    MaximumTumorDiameterInMm :{type:Number, title:'Maximum tumor diameter in mm'},                                      
	    MaximumDepthOfInvisionInMm :{type:Number, title:'Maximum depth of invasion in mm'}
    },
    

AssociatedLesions: {
        None: {type: Boolean, title: 'None'},
        VINIII: {type: Boolean, title: 'VIN III'},
        LichenSclerosis: {type: Boolean, title: 'Lichen sclerosis'},
        VINIIILichenSclerosis: {type: Boolean, title: 'VIN III + Lichen sclerosis'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
    HPVTest: {
        NotTested: {type: Boolean, title: 'Not tested'},
        Pos: {type: Boolean, title: 'Pos'},
        Neg: {type: Boolean, title: 'Neg'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
    LymphnodeInvolvementAtSurgery:{
	    SentinelNodeDetection:{
		    NotPerformed:{type:Boolean, title: 'Not performed'},
		    NoPos:{type:Boolean, title: 'Yes, pos'},
		    YesNeg:{type:Boolean, title: 'Yes, neg'},
		    Unknown:{type:Boolean, title: 'Unknown'}
		    },
		    
		HistologicallyProvenInvolvement :{
		    NotEvaluated :{type:Boolean, title: 'Not evaluated'},
		    PositiveNodes:{type:Boolean, title: 'Positive nodes'},
		    NegativeNodes:{type:Boolean, title: 'Negative nodes'},
		    Unknown:{type:Boolean, title: 'Unknown'}
		    },
		    
		NodesInvolved :{
		    OnlyPelvic:{type:Boolean, title: 'Only pelvic'},
		    PelviInguinal:{type:Boolean, title: 'Pelvic + inguinal'},
		    OnlyInguinal:{type:Boolean, title: 'Only inguinal'},
		    Unknown:{type:Boolean, title: 'Unknown'}
		    },
		    
		NumberOfNodesExamined : {
			Pelvic : {type: Number, title: 'Pelvic'},
			Paraortic: {type: Number, title: 'Paraortic'}
		},
		
		NumberOfNodesPositive : {
			Pelvic: {type: Number, title: 'Pelvic'},
			Inguinal: {type: Number, title: 'Inguinal'}
		},
		
		InguinalNodes_involvementCharacteristics:{
			UnilateralIntracapsular:{type:Boolean, title: 'Unilateral intracapsular'},
			UnilateralExtracapsular:{type:Boolean, title: 'Unilateral extracapsular'},
			BilateralIntracapsular:{type:Boolean, title: 'Bilateral intracapsular'},
			BilateralExtracapsular:{type:Boolean, title: 'Bilateral extracapsular'},
			Unknown:{type:Boolean, title: 'Unknown'}
		}
	},
    
   	Relapse: {
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
    }, 
    
    SiteOfRelapse:{
		Local:{type: Boolean, title: 'Local'},
		Metastatic:{type: Boolean, title: 'Metastatic'},
		LocalAndMetastatic:{type: Boolean, title: 'Local and metastatic'},
		Unknown:{type: Boolean, title: 'Unknown'}
	},
	
    	 /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/   
	TreatmentAtRelapse: {
        Nil: {type: Boolean, title: 'Nil'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },

    /*Follow up*/
    
    DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},
    
    LastKnownVitalStatus: {
		AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
		AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
		AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
		Dead: {type: Boolean, title: 'Dead'}
	},
        
	/*Death*/
	causeOfDeath :{
		VulvaCarcinoma: {type: Boolean, title: 'Vulva carcinoma'},
		Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
		Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
		IntercurrentDisease: {type: Boolean, title: 'Intercurrent disease'},
		UnknownCauses: {type: Boolean, title: 'Unknown causes'},
		DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
	}

});

/*///////////////////////////////////////// OVARIAN ////////////////////////////////////////////////*/
var OverianCancer = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    ID: {type: Number, require: true, title: 'ID number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    CellPhone:{
        First: {type: Number, require: true, title: 'Phone number'},
        Alternative: {type: Number, require: true, title: 'Alternative number'}
    },

    HIVStatus:{
        Negative: {type: Boolean, title: 'HIV Negative'},
	    Positive: {type: Boolean, title: 'HIV Positive'},
	    CD4: {type: Number, title: 'CD4 Count:'}
    },
    
    figoStage: {
        Ia: {type: Boolean, title: 'Ia'},
        Ib: {type: Boolean, title: 'Ib'},
        Ic: {type: Boolean, title: 'Ic'},
    	IIa: {type: Boolean, title: 'IIa'},
    	IIb: {type: Boolean, title: 'IIb'},
    	IIc: {type: Boolean, title: 'IIc'},
    	IIIa: {type: Boolean, title: 'IIIa'},
    	IIIb: {type: Boolean, title: 'IIIb'},
    	IIIc: {type: Boolean, title: 'IIIc'},
    	IV : {type: Boolean, title: 'IV'},
    	SurgicalStageUnavailable: {type: Boolean, title: 'Surgical stage unavailable'},
    	Unknown: {type: Boolean, title: 'Unknown'}
    },

    /*(when appropriate)*/
    SiteOfDistantMetastases : {
        PleuralEffusion: {type: Boolean, title: 'Pleural effusion'},
    	Liver: {type: Boolean, title: 'Liver'},
    	Brain: {type: Boolean, title: 'Brain'},
        OtherSite: {type: Boolean, title: 'OtherSite'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    
    Histology: {
        NoHystologyUnclassifiable: {type: Boolean, title: 'No histology/Unclassifiable'},
        BorderlineSerousCystadenoma: {type: Boolean, title: 'Borderline serous cystadenoma'},
        BorderlineMusinousCystadenoma: {type: Boolean, title: 'Borderline musinous  cystadenoma'},
        BorderlineEndometroidCystadenoma: {type: Boolean, title: 'Borderline endometroid cystadenoma'},
        UndifferentiatedCarcinoma: {type: Boolean, title: 'Undifferentiated carcinoma '},
        MixedEpithelialTumor: {type: Boolean, title: 'Mixed epithelial tumor'},
	    EndometroidCystadenocarcinoma: {type: Boolean, title: 'Endometroid  cystadenocarcinoma'},
        ClearCellCystadenocarcinoma: {type: Boolean, title: 'Clear cell cystadenocarcinoma'},
        SerousCystadenocarcinoma : {type: Boolean, title: 'Serous cystadenocarcinoma'},
        MucinousCystadenocarcinoma : {type: Boolean, title: 'Mucinous cystadenocarcinoma'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    
       Differentiation: {
        Well: {type: Boolean, title: '1 (well)'},
        Moderately: {type: Boolean, title: '2 (moderately)'},
        Poorly: {type: Boolean, title: '3 (poorly)'},
    	Unknown : {type: Boolean, title: 'Unknown'}
    },
    
    /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation )---*/    
	TreatmentPerformed : {
        Nil: {type: Boolean, title: 'Nil'},
        SurgeryAlone: {type: Boolean, title: 'Surgery alone'},
    	RTAlone: {type: Boolean, title: 'RT alone'},
    	NeoAdjuvantCTAndSurgery: {type: Boolean, title: 'Neo adjuvant CT + surgery'},
    	SurgeryAdjuvantRT: {type: Boolean, title: 'Surgery + adjuvant RT'},
    	SurgeryAdjuvantCT: {type: Boolean, title: 'Surgery + adjuvant CT'},
    	Other : {type: Boolean, title: 'Other non standard treatments'},
        Unknown : {type: Boolean, title: 'Unknown'},
	    DateofTreatment : {type: Date, require: true, title: 'Date of treatment'}
    },
    
        /*--(LND = pelvic/paraortic lymphnode dissection; USO: Unilateral oopherectomy; BSO Bilateral oopherectomy)--*/
typeOfSurgery: {
        USONoLND: {type: Boolean, title: 'USO without LND'},
	    USOWithLND: {type: Boolean, title: 'USO with LND'},
        BSONoLND: {type: Boolean, title: 'BSO without LND'},
        BSOWithLND: {type: Boolean, title: 'BSO with LND'},
        multipleBiopsiesNoLND: {type: Boolean, title: 'TAH, BSO, Omentectomy, multiple biopsies no LND'},
        multipleBiopsiesWithLND: {type: Boolean, title: 'TAH, BSO, Omentectomy, multiple biopsies with LND'},
        ExplorativeLaparotomy : {type: Boolean, title: 'Explorative laparotomy/laparoscopy'},
        Other : {type: Boolean, title: 'Other type of surgery (upper abdomen surgical procedures, GIT-, urological surgery'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateofSurgery : {type: Date, require: true, title: 'Date of Surgery'}
    },
    
    typeOfRadiotherapy: {
        Intracavitary: {type: Boolean, title: 'Intracavitary'},
        ExternalPelvicRT: {type: Boolean, title: 'External pelvic RT'},
        ExternalPelvicParaortic: {type: Boolean, title: 'External pelvic + paraortic'},
        ExternalPelvicIntracavitary: {type: Boolean, title: 'External pelvic + intracavitary'},
        ExtpelvicParaortIntracavitary: {type: Boolean, title: 'Ext pelvic/paraortic + intracavitary'},
        IntraperitonealRadioisotopes: {type: Boolean, title: 'Intraperitoneal  radioisotopes'},
        Unknown: {type: Boolean, title: 'Unknown'},
        Other: {type: Boolean, title: 'Other'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },
    
    
/*--(CT = Chemotherapy, PC = platinum compound, Completed / uncompleted refers to full course)--*/
    typeOfChemotherapy:{
        SingleDrugCTUncompleted: {type: String, title: 'Single drug (unspecified) CT - uncompleted'},
        SingleDrugCTCompleted: {type: String, title: 'Single drug (unspecified) CT - completed'},
        SingleDrugCTPlusePCUncompleted: {type: String, title: 'Single drug CT + PC - uncompleted'},
        SingleDrugCTPlusPCCompleted: {type: String, title: 'Single drug CT + PC - completed'},
        SingleDrugCTNoPCUncompleted: {type: String, title: 'Single drug CT, no PC - uncompleted'},
        SingleDrugCTNoPCCompleted: {type: String, title: 'Single drug CT, no PC - completed'},
        MultipleDrugCTUncompleted: {type: String, title: 'Multiple drug (unspecified) CT - uncompleted'},
        MultipleDrugCTCompleted: {type: String, title: 'Multiple drug (unspecified) CT - completed'},
        MultipleDrugCTPCTaxaneUncompleted: {type: String, title: 'Multiple drug CT +PC + Taxane  - uncompleted'},
        MultipleDrugCTPCTaxaneCompleted: {type: String, title: 'Multiple drug CT +PC + Taxane  - completed'},
        MultipleDrugCTNoPCWithTaxaneUncompleted: {type: String, title: 'Multiple drug CT, no PC, with Taxane  - uncompleted'},
        MultipleDrugCTNoPCWithTaxaneCompleted: {type: String, title: 'Multiple drug CT, no PC, with Taxane  - completed'},
        MultipleDrugCTPCWithoutTaxaneUncompleted: {type: String, title: 'Multiple drug CT, + PC, without Taxane  - uncompleted'},
        MultipleDrugCTPCWithoutTaxaneCompleted: {type: String, title: 'Multiple drug CT, + PC, without Taxane  - completed'},
        MultipleDrugCTNoPCNoTaxaneUncompleted: {type: String, title: 'Multiple drug CT, no PC, no Taxane  - uncompleted'},
        MultipleDrugCTNoPCNoTaxaneCompleted: {type: String, title:'Multiple drug CT, no PC, no Taxane  - completed'},
        Unknown: {type: String, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },
    
    responseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        NotAssessable: {type: Boolean, title: 'Not assessable'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfAssessment: {type: Date, require: true, title: 'Date of assessment' }
    },
    
    /*Surgical Pathological Evaluation*/
    SizeOfTumorOutsideOvaryAtOpeningOfAbdomen: {
        NoMacroscopicDisease: {type: Boolean, title: 'No macroscopic disease'},
        LTE2cm: {type: Boolean, title: '=< 2cm'},
	    Between2And10 : {type: Boolean, title: 'Between 2 and 10 cm'},
        GTE10cm: {type: Boolean, title: '>= 10cm'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
       DiameterOfResidualImplantsAfterSurgery: {
		NoMacroscopicResidualDisease: {
			LT0_5cm: {type: Boolean, title: '< 0.5cm'},
			GTE0_5cmLTE1cm: {type: Boolean, title: '≥ 0.5cm ≤ 1cm'}
	  },
	  		NoMacroscopicResidualDisease: {
			GT1cmLTE2cm: {type: Boolean, title: '> 1cm ≤  2cm'},
			GT2cm: {type: Boolean, title: '>2cm'}
	  },
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
    LymphNodeInvolvementInUpfrontSurgery_histologically: {
        NotEvaluated: {type: Boolean, title: 'Not evaluated'},
        PosNodes: {type: Boolean, title: 'Pos nodes'},
	    NegNodes : {type: Boolean, title: 'Neg nodes'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
   NodesInvolved: {
        OnlyPelvic: {type: Boolean, title: 'Only pelvic'},
        PelvicParaortic: {type: Boolean, title: 'Pelvic + paraortic'},
        OnlyParaortic: {type: Boolean, title: 'Only paraortic'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
    
   NumberOfNodesExamined : {
        Pelvic : {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic '}
    },
    
 NumberOfNodesPositive : {
        Pelvic : {type: Number, title: 'Pelvic'},
        Paraortic: {type: Number, title: 'Paraortic '}
    },
    
/*(presence of malignant cells) */
    Cytology: {
        NotEvaluated: {type: Boolean, title: 'Not evaluated'},
        Positive:{type: Boolean, title: 'Positive'},
        Negative: {type: Boolean, title: 'Negative'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },   
    
    SecondSurgery: {
        DateOf2ndSurgery: {type: String, title: 'Date of 2nd surgery'},
        IntervalDebulking: {type: Boolean, title: 'Interval debulking'},
        SecondLook: {type: Boolean, title: 'Second look'},
        SecondSurgicalEffort: {type: Boolean, title: 'Second surgical effort'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },   
    
    
        StatusAtSecondSurgery: {
        CompleteRemission: {type: String, title: 'Complete remission'},
        MicroscopicDisease: {type: Boolean, title: 'Microscopic disease'},
        NoSingleImplantGrearterThan1cm: {type: Boolean, title: 'No single implant > 1cm'},
        ImplantsGreaterThan1cm :{type: Boolean, title: 'Implants > 1cm'},
        PosRetroperitonealNodes :{type: Boolean, title: 'Pos retroperitoneal nodes'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
	StatusAfterSecondSurgery: {
        NoMicroscopicDiseaseLeftAfterSurg: {type: String, title: 'No macroscopic disease left after surgery'},
        MicroscopicDiseaseLeftTH1cm: {type: Boolean, title: 'Macroscopic disease <1cm left after surgery'},
	    MicroscopicDiseaseLeftTH1cm: {type: Boolean, title: 'Macroscopic disease >1cm left after surgery'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
    
    
	Relapse: {
        Yes: {type: Boolean, title: 'Yes'},
        No: {type: Boolean, title: 'No'},
        Unknown: {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Date, require: true, title: 'Date of relapse diagnosis'}
    },
    
	SiteOfRelapse:{
		Local:{type: Boolean, title: 'Local'},
		Metastatic:{type: Boolean, title: 'Metastatic'},
		LocalAndMetastatic:{type: Boolean, title: 'Local and metastatic'},
		Unknown:{type: Boolean, title: 'Unknown'}
	},
	
	 /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy RT = Radiotherapy)---*/   
	TreatmentAtRelapse: {
        Nil: {type: Boolean, title: 'Nil'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
	    HT: {type: Boolean, title: 'HT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },
	
	DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},
    
	LastKnownVitalStatus: {
		AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
		AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
		AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
		Dead: {type: Boolean, title: 'Dead'}
	},
	
	
	causeOfDeath :{
		OvarianCa: {type: Boolean, title: 'Ovarian ca'},
		Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
		Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
		IntercurrentDisease: {type: Boolean, title: 'Intercurrent disease'},
		UnknownCauses: {type: Boolean, title: 'Unknown causes'},
		DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
	}
	
});

/*/////////////////////////////////// GTN  /////////////////////////////*/

var GTNCancer = new Schema({

    Name: {type: String, require: true, title: 'Name'},

    Surname: {type: String, require: true, title: 'Surname'},

    HospitalNumber: {type: String, require: true, title: 'Hospital Number'},

    ID: {type: Number, require: true, title: 'ID number'},

    DateOfBirth: {type: Date, require: true, title: 'Date of Birth' },
    
   CellPhone:{
        First: {type: Number, require: true, title: 'Phone number'},
        Alternative: {type: Number, require: true, title: 'Alternative number'}
    },

    DateOfDiagnosis: {type: Date, require: true, title: 'Date of diagnosis'},

    HIVStatus:{
        Negative: {type: Boolean, title: 'HIV Negative'},
  	    Positive: {type: Boolean, title: 'HIV Positive'},
  	    CD4: {type: Number, title: 'CD4 Count:'}
    },
    
    figoStage: {
        I: {type: Boolean, title: 'I'},
        II: {type: Boolean, title: 'II'},
  	    III: {type: Boolean, title: 'III'},
  	    IV: {type: Boolean, title: 'IV'},
  	    Unknown: {type: Boolean, title: 'Unknown'}
    },

    SiteOfDistantMetastase: {
	      Nil: {type: Boolean, title: 'Nil'},
        Skin: {type: Boolean, title: 'Skin'},
  	    Bone: {type: Boolean, title: 'Bone'},
  	    Lungs: {type: Boolean, title: 'Lungs'},
  	    Liver: {type: Boolean, title: 'Liver'},
  	    Brain: {type: Boolean, title: 'Brain'},
        LymphNodesOtherThanFemoralAndInguinal: {type: Boolean, title: 'Lymph nodes other than femoral and inguinal'},
        Other: {type: Boolean, title: 'Other'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    
     RiskFactors:{
        Age:{
           LT40 :{type: Boolean, title: '<40'},
           GTE40:{type: Boolean, title: '≥40'},
           Unknown:{type: Boolean, title: 'Unknown'}
        },

        AntecedentPregnancy:{
           Mole :{type: Boolean, title:'Mole'},
           Abortion:{type: Boolean, title: 'Abortion'},
           Term:{type: Boolean, title:'Term'},
           Unknown:{type: Boolean, title:'Unknown'}
        },

        IntervalMonthsFromIndexPregnancy:{
           GT4 :{type: Boolean, title: '<4'},
           FourTo6:{type: Boolean, title: '4 - 6'},
           SevenTo12:{type: Boolean, title: '7 - 12'},
           GTE13:{type: Boolean, title: '≥ 13'},
           Unknown:{type: Boolean, title: 'Unknown'}
        },

         PretreatmentSerumHCG:{
           GT10expo3:{type: Boolean, title: '<10^3'},
           Tenexpo3ToGT10expo4:{type: Boolean, title: '10^3 - <10^4'},
           Tenexpo4ToGT10expo5:{type: Boolean, title: '10^4 - <10^5'},
           GTE10expo5:{type: Boolean, title: '≥ 10^5'},
           Unknown:{type: Boolean, title: 'Unknown'}
        },

        
      LargestTumorSizeIncludingUterusCm:{
           LT3:{type: Boolean, title: '<3'},
           ThreeToLT5:{type: Boolean, title: '3-<5'},
           GTE25:{type: Boolean, title: '≥5'},
           Unknown:{type: Boolean, title: 'Unknown'}
        },

        
      SiteOfMetastases:{
           NoneLung :{type: Boolean, title: 'None,Lung'},
           SpleenKidney:{type: Boolean, title: 'Spleen, kidney'},
           GastroIntestinal:{type: Boolean, title: 'Gastro-intestinal'},
           LiverBrain:{type: Boolean, title: 'Liver, brain'},
           Unknown:{type: Boolean, title: 'Unknown'}
        },
        

      NumberOfMetastases:{
           Nil :{type: Boolean, title: 'Nil'},
           OneTo4:{type: Boolean, title: '1 – 4'},
           FiveTo8:{type: Boolean, title: '5 – 8'},
           Unknown:{type: Boolean, title: 'Unknown'}
        },
        

      PreviousFailedChemotherapy:{
           NoPreviousFailed :{type: Boolean, title: 'No previous failed'},
           SingleDrug:{type: Boolean, title: 'Single drug'},
           Unknown:{type: Boolean, title: 'Unknown'}
        }
        
    },
    

	Histology: {
        NoHistology: {type: Boolean, title: 'No histology'},
        CompleteHydatiformMole: {type: Boolean, title: 'Complete hydatiform mole'},
        PartialHydatiformMole: {type: Boolean, title: 'Partial hydatiform mole'},
        Choriocarcinoma: {type: Boolean, title: 'Choriocarcinoma '},
        EpithelioidTrtophoblasticTumor: {type: Boolean, title: 'Epithelioid trophoblastic tumor'},
        PlacentalSiterophoblasticTumor: {type: Boolean, title: 'Placental site  trophoblastic tumor'},
	    UnclassifiedTrophoblasticLesion: {type: Boolean, title: 'Unclassified trophoblastic lesion'},
        Unknown : {type: Boolean, title: 'Unknown'}
    },
    

/*(applicable to trophoblastic tumors arising in ectopic sites)*/
    PrimarySite : {
        Trophoblastic: {type: Boolean, title: 'Trophoblastic'},
        OvarianMole: {type: Boolean, title: 'Ovarian'},
        Tube: {type: Boolean, title: 'Tube'},
        Abdominal: {type: Boolean, title: 'Abdominal '},
        OtherSite: {type: Boolean, title: 'Other site'}, 
        Unknown : {type: Boolean, title: 'Unknown'}
    },


/*for known GTN*/
    PreviousChemotherapy  : {
        NoPriorChemotherapy: {type: Boolean, title: 'No prior chemotherapy'},
        SingleAgentChemotherapy: {type: Boolean, title: 'Single agent chemotherapy'},
        MultipleAgentChemotherapy: {type: Boolean, title: 'Multiple agent chemotherapy'}, 
        Unknown : {type: Boolean, title: 'Unknown'}
    },

/*(RT = Radiotherapy, CT = Chemotherapy)*/
    PrimaryTreatmentsPerformed  : {
        Nil: {type: Boolean, title: 'Nil'},
        Chemotherapy: {type: Boolean, title: 'Chemotherapy'},
        SurgeryOnly: {type: Boolean, title: 'Surgery only'},
        ChemotherapySurgery: {type: Boolean, title: 'Chemotherapy + surgery '},
        Unknown : {type: Boolean, title: 'Unknown'},
        DateOfTreatment: {type: Boolean, title: 'Date of treatment'}
    },


 /*--(LND = lymp hadenectomy)--*/
    typeOfSurgery: {
        AbdominalAndElvicSurgeryhysterectomyDebulkingEexcludingDAndC: {type: Boolean, title:'Abdominal and/or pelvic surgery (hysterectomy/debulking)(excluding D&C)'},
        LobectomyLung: {type: Boolean, title: 'Lobectomy lung'},
        Craniotomy: {type: Boolean, title: 'Craniotomy'},
        Other: {type: Boolean, title: 'Other'},
        DateOfSurgery: {type: Boolean, title: 'Date of surgery'}
    },

/*--CT = Chemotherapy--*/
    typeOfChemotherapy:{
        OneCourseSingleAgentCT: {type: String, title: '1 course single agent CT'},
        TwoOrMoreCoursesSingleAgentCT: {type: String, title: '2 or more courses single agent CT'},
        OneCourseMultipleAgentCT: {type: String, title: '1 course multiple agent CT'},
        TwoOrMoreCoursesMultipleAgentCT: {type: String, title: '2 or more courses multiple agent CT'},
        Unknown: {type: String, title: 'Unknown'},
        DateStarted: {type: Date, require: true, title: 'Date started' },
        DateEnded: {type: Date, require: true, title: 'Date ended' }
    },


    ResponseToTreatment: {
        Complete: {type: Boolean, title: 'Complete'},
        Partial: {type: Boolean, title: 'Partial'},
        StableDisease: {type: Boolean, title: 'Stable disease'},
        ProgressiveDisease: {type: Boolean, title: 'Progressive disease'},
        Unknown : {type: Boolean, title: 'Unknown'},
        DateOfAssessment: {type: Boolean, title: 'Date of assessable'}
    },


    Relapse: {
        Yes: {type: Boolean, title: 'Yes '},
        No: {type: Boolean, title: 'No'},
        Unknown : {type: Boolean, title: 'Unknown'},
        DateOfRelapseDiagnosis: {type: Boolean, title: 'Date relapse diagnosis'}
    },


    SiteOfRelapse:{
        Local:{type: Boolean, title: 'Local'},
        Metastatic:{type: Boolean, title: 'Metastatic'},
        LocalAndMetastatic:{type: Boolean, title: 'Local and metastatic'},
        Unknown:{type: Boolean, title: 'Unknown'}
    },

    /*---(RT = Radiotherapy, CT = Chemotherapy, CRT = Chemoradiation, HT = Hormone Therapy)---*/   
    TreatmentAtRelapse: {
        Nil: {type: Boolean, title: 'Nil'},
        Surgery: {type: Boolean, title: 'Surgery'},
        RT: {type: Boolean, title: 'RT'},
        CT: {type: Boolean, title: 'CT'},
        HT: {type: Boolean, title: 'HT'},
        SurgeryRT: {type: Boolean, title: 'Surgery + RT'},
        CTRT: {type: Boolean, title: 'CT + RT'},
        Other: {type: Boolean, title: 'Other'},
        Unknown: {type: Boolean, title: 'Unknown'}
    },


    /*Follow up*/
    DateOfFolllowup: {type: Date, require: true, title: 'Date of Follow-up'},
    
    LastKnownVitalStatus: {
        AliveUnknownDiseaseStatus: {type: Boolean, title: 'Alive (unknown disease status)'},
        AliveAndNoEvidenceOfDisease: {type: Boolean, title: 'Alive and no evidence of disease'},
        AliveWithDisease: {type: Boolean, title: 'Alive with disease'},
        Dead: {type: Boolean, title: 'Dead'}
    },
        
    /*Death*/
    causeOfDeath :{
        OtherPrimaryCancera: {type: Boolean, title: 'GTN or metastases'},
        Otherprimarycancer: {type: Boolean, title: 'Other primary cancer'},
        Treatmentrelatedcause: {type: Boolean, title: 'Treatment related cause'},
        IntercurrentDisease: {type: Boolean, title: 'Intercurrent disease'},
        UnknownCauses: {type: Boolean, title: 'Unknown causes'},
        DateOfDeath: {type: Date, require: true, title: 'Date of Death'}
    }

});


/*/////////////////////////////////// HISTEROCOPYDATASHEET /////////////////////////////*/
var HysteroscopyDataSheet = new Schema({
	
	DateOfVisit: {type: Date, require: true, title: 'Date of visit' },
	
	 HospitalNumber: {type: String, require: true, title: 'Hospital Number'},
	
	Age: {type: Number, require: true, title: 'Name'},
	
	Name: {type: String, require: true, title: 'Name'},
	
	Surname: {type: String, require: true, title: 'Name'},
	
	P: {type: Number , title: 'Parity'},
	G: {type: Number, title: 'Gravidity'},
	M: {type: Number, title: 'Miscarriage'},
	E: {type: Number, title: 'Ectopic pregnancy'},
	
	HIV:{
        Negative: {type: Boolean, title: 'HIV Negative'},
		Positive: {type: Boolean, title: 'HIV Positive'},
		Decline: {type: Boolean, title: 'Decline'},
		Unknown: {type: Boolean, title: 'Unknown'},
		CD4: {type: Number, title: 'CD4 Count:'}
	},
	
	CoMorbidities : {
        Hypertension: {type: Boolean, title: 'Hypertension'},
        IDDM: {type: Boolean, title: 'IDDM'},
        NIDDM: {type: Boolean, title: 'NIDDM'},
        IHD: {type: Boolean, title: 'IHD'},
        Obesity: {type: Boolean, title: 'Obesity'}
	},
	
	/*FINDINGS AT HYSTEROSCOPY*/
	
	EndocervicalCanal : {
        Normal: {type: Boolean, title: 'Normal'},
        Stenotic : {type: Boolean, title: 'Stenotic'},
        Polyps: {type: Boolean, title: 'Polyps'},
        SuspiciousLesion: {type: Boolean, title: 'Suspicious lesion'}
	},
	
	UterineCavity : {
        Normal: {type: Boolean, title: 'Normal'},
        Adhesions : {type: Boolean, title: 'Adhesions'},
        Polyps: {type: Boolean, title: 'Polyps'},
        Atrophy: {type: Boolean, title: 'Atrophy'},
        Hyperplasia: {type: Boolean, title: 'Hyperplasia'},
        Fibroid: {type: Boolean, title: 'Fibroid'},
        Suspicious : {type: Boolean, title: 'Suspicious'},
        Septum: {type: Boolean, title: 'Septum'}
	},
	
	Fibroid : {
        Position : {type: String , title: 'Position'},
        Size : {type: Number, title: 'Size'}
	},
	
	Polyp : {
        Position : {type: String , title: 'Position'},
        Size : {type: Number, title: 'Size'}
	},
	
	ProceduresPerformedAtTimeOfOfficeHysteroscopy: {
        Nil: {type: Boolean, title: 'Nil'},
        RemovalIUCD : {type: Boolean, title: 'Removal IUCD'},
        Biopsy: {type: Boolean, title: 'Biopsy'},
        Polypectomy: {type: Boolean, title: 'Polypectomy'},
        Myomectomy : {type: Boolean, title: 'Myomectomy'},
        Essure: {type: Boolean, title: 'Essure'},
        EndometrialAblation : {type: Boolean, title: 'Endometrial ablation'},
        Other: {type: String, title: 'Other'}
	},
	
	DiagnosisMadeAfterHysteroscopy: {type: String, require: true, title: 'Diagnosis made after hysteroscopy'},
	
	/*PLANNED MANAGEMENT*/
	
	NoFurtherTreatment : {
        NoTreatmentRequired : {type: Boolean , title: 'No treatment required'},
        TreatedAtTimeOfOfficeHysteroscopy: {type: Boolean, title: 'Treated at time of office hysteroscopy'}
	},
	
	ReferralFor: {
        OperativeHysteroscopyUnderGA: {type: Boolean, title: 'Operative hysteroscopy under GA'},
        Hysterectomy : {type: Boolean, title: 'Hysterectomy'},
        Mirena: {type: Boolean, title: 'Mirena'},
        DiagnosticHysterectomy: {type: Boolean, title: 'Diagnostic hysterectomy'},
        EndometrialAblation: {type: Boolean, title: 'Endometrial ablation'}
	},
	
	DurationOfProcedure: {type: String, require: true, title: 'Duration of procedure:  '},
	
	PainScoreOutOf10: {type: String, require: true, title: 'Pain score out of 10'},
	
	Comments: {type: String, require: true, title: 'Comments'}
	
});

/*////////////////////////////////CRITICAL INCIDENT/////////////////////////////////////*/
var GynaeCritical_Incident_DataCollection = new Schema({

	PatName: {type: String, require: true, title: 'Patient name'},
	
	Age: {type: Number, require: true, title: 'Age'},
	
	HospitalNum: {type: Number, require: true, title: 'Hospital number'},
	
	DateOfIncident: {type: Date, require: true, title: 'Date of incident' },
	
	Firm: {type: String, require: true, title: 'Firm'},
	
	HIVStatus: {type: String, title: 'HIV Status'}, 
	
	Parity: {type: Number, require: true, title: 'Parity'},
	
	Grav: {type: Number, require: true, title: 'Grav'},
	
	Admission:
	{
		Elective: {type: Boolean, title: 'Elective'}, 
		Emergency: {type: Boolean, title: 'Emergency'}, 
		Oncology: {type: Boolean, title: 'Oncology'}
	}, 
	
	Hospital:
	{
		Kalafong: {type: Boolean, title: 'Kalafong'}, 
		PAH: {type: Boolean, title: 'PAH'}
	},
	
	/*IntentionOfTreatmentOnAdmission*/
	IntentionOfTreatmentOnAdmission:
	{
		Surgical: {type: Boolean, title: 'Surgical'}, 
		Medical: {type: Boolean, title: 'Medical'}, 
		Palliative: {type: Boolean, title: 'Palliative'}
	},
	
	/*Problems, diagnosis and stages */
	PrimaryGynaecologialProblems: {type: String, require: true, title: 'Primary Gynaecologial Problem'},
	Oncology: {type: String, require: true, title: 'Oncology:Diagnosis and stage'},
	
	AssociatedMedProblems: {type: String, require: true, title: 'Associated medical problems'},
	Oncology: {type: String, require: true, title: 'Oncology: Diagnosis and stage'},
	
	SurgicalProceduresAndDatesDone: {type: String, require: true, title: 'Surgical procedures and dates done'},
	Oncology: {type: String, require: true, title: 'Oncology: Diagnosis and stage'},
	
	
	/*CRITICAL INCIDENT*/
	Event:{
		Death: {
		TickBlock: {type: Boolean, title: 'Tick block'}, 
		Details: {type: String, title: 'Specify details'}},
		
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
	},
	
	/*MODIFIABLE FACTORS*/
	/*---Modifiable Factors (tick type and leave where problem occured)----*/
	/*PatientOrientatedProblems*/
		PatientOrientatedProblems: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
		
	/*--If either of the above opetions has been selected, do not complete bellow---*/
		IfNoneSelected: 
		{
		DelayInSeeingHelp: {type: Boolean, title: 'Delay in seeking medical help'}, 
		UnsafeAbortion: {type: Boolean, title: 'Unsafe abortion'},
		FamilyProblem: {type: Boolean, title: 'Family problem'}, 
		CoumminityProblem: {type: Boolean, title: 'Community problem'},
		Other: {type: String, title: 'Other(specify)'}
		},
		
	/*---Emergency Care Problem: (tick type and level where problem occured)---*/
		PatientAgeGroup: 
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
		},
		
	/*---If either of the above options has been selected, do not complete bellow--*/
		DoNotCompleteIfAboveSelected: 
		{
		AirwaysProblem: {type: Boolean, title: 'Airways problem'}, 
		BreathingProblem: {type: Boolean, title: 'Breathing problem'},
		CirculationProblem: {type: Boolean, title: 'Circulation problem'}, 
		DrugProblem: {type: Boolean, title: 'Drug problem'},
		InvestigationProblem: {type: Boolean, title: 'Investigation problem'}, 
		MonitoringProblem: {type: Boolean, title: 'Monitoring problem'}
		},
		
	/*--OncologyRelated--*/
	OncologyRelated:
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
	},
		
	/*--LevelOfSurgeryPerformed--*/
	LevelOfSurgeryPerformed: 
		{
		Registrar: {type: Boolean, title: 'Registrar'}, 
		Consultant: {type: Boolean, title: 'Consultant'},
		Intern: {type: Boolean, title: 'Intern'}, 
		Midwife: {type: Boolean, title: 'Midwife (mwa)'}
		},
		
	/*AdministrativeProblems*/	
	AdministrativeProblems: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
	
		/*---If either of the above options has been selected, do not complete bellow---*/
	TransportProblemsHome_Institut: 
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
		},
		
	/*--Medical Care--*/
	MedicalCare: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
		
/*---If either of the above options has been selected, do not complete bellow---*/
	InitialAssessment: 
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
	
	NameOfRegistrar_print: {type: String, title: 'Patient name'}
});
var GynaeCritical_Incident_DataCollection = new Schema({

	PatName: {type: String, require: true, title: 'Patient name'},
	
	Age: {type: Number, require: true, title: 'Age'},
	
	HospitalNum: {type: Number, require: true, title: 'Hospital number'},
	
	DateOfIncident: {type: Date, require: true, title: 'Date of incident' },
	
	Firm: {type: String, require: true, title: 'Firm'},
	
	HIVStatus: {type: String, title: 'HIV Status'}, 
	
	Parity: {type: Number, require: true, title: 'Parity'},
	
	Grav: {type: Number, require: true, title: 'Grav'},
	
	Admission:
	{
		Elective: {type: Boolean, title: 'Elective'}, 
		Emergency: {type: Boolean, title: 'Emergency'}, 
		Oncology: {type: Boolean, title: 'Oncology'}
	}, 
	
	Hospital:
	{
		Kalafong: {type: Boolean, title: 'Kalafong'}, 
		PAH: {type: Boolean, title: 'PAH'}
	},
	
	/*IntentionOfTreatmentOnAdmission*/
	IntentionOfTreatmentOnAdmission:
	{
		Surgical: {type: Boolean, title: 'Surgical'}, 
		Medical: {type: Boolean, title: 'Medical'}, 
		Palliative: {type: Boolean, title: 'Palliative'}
	},
	
	/*Problems, diagnosis and stages */
	PrimaryGynaecologialProblems: {type: String, require: true, title: 'Primary Gynaecologial Problem'},
	Oncology: {type: String, require: true, title: 'Oncology:Diagnosis and stage'},
	
	AssociatedMedProblems: {type: String, require: true, title: 'Associated medical problems'},
	Oncology: {type: String, require: true, title: 'Oncology: Diagnosis and stage'},
	
	SurgicalProceduresAndDatesDone: {type: String, require: true, title: 'Surgical procedures and dates done'},
	Oncology: {type: String, require: true, title: 'Oncology: Diagnosis and stage'},
	
	
	/*CRITICAL INCIDENT*/
	Event:{
		Death: {
		TickBlock: {type: Boolean, title: 'Tick block'}, 
		Details: {type: String, title: 'Specify details'}},
		
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
	},
	
	/*MODIFIABLE FACTORS*/
	/*---Modifiable Factors (tick type and leave where problem occured)----*/
	/*PatientOrientatedProblems*/
		PatientOrientatedProblems: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
		
	/*--If either of the above opetions has been selected, do not complete bellow---*/
		IfNoneSelected: 
		{
		DelayInSeeingHelp: {type: Boolean, title: 'Delay in seeking medical help'}, 
		UnsafeAbortion: {type: Boolean, title: 'Unsafe abortion'},
		FamilyProblem: {type: Boolean, title: 'Family problem'}, 
		CoumminityProblem: {type: Boolean, title: 'Community problem'},
		Other: {type: String, title: 'Other(specify)'}
		},
		
	/*---Emergency Care Problem: (tick type and level where problem occured)---*/
		PatientAgeGroup: 
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
		},
		
	/*---If either of the above options has been selected, do not complete bellow--*/
		DoNotCompleteIfAboveSelected: 
		{
		AirwaysProblem: {type: Boolean, title: 'Airways problem'}, 
		BreathingProblem: {type: Boolean, title: 'Breathing problem'},
		CirculationProblem: {type: Boolean, title: 'Circulation problem'}, 
		DrugProblem: {type: Boolean, title: 'Drug problem'},
		InvestigationProblem: {type: Boolean, title: 'Investigation problem'}, 
		MonitoringProblem: {type: Boolean, title: 'Monitoring problem'}
		},
		
	/*--OncologyRelated--*/
	OncologyRelated:
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
	},
		
	/*--LevelOfSurgeryPerformed--*/
	LevelOfSurgeryPerformed: 
		{
		Registrar: {type: Boolean, title: 'Registrar'}, 
		Consultant: {type: Boolean, title: 'Consultant'},
		Intern: {type: Boolean, title: 'Intern'}, 
		Midwife: {type: Boolean, title: 'Midwife (mwa)'}
		},
		
	/*AdministrativeProblems*/	
	AdministrativeProblems: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
	
		/*---If either of the above options has been selected, do not complete bellow---*/
	TransportProblemsHome_Institut: 
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
		},
		
	/*--Medical Care--*/
	MedicalCare: 
		{
		LackOfInfo: {type: Boolean, title: 'Lack of information'}, 
		NoAvoidableFactors: {type: Boolean, title: 'No avoidable factors'}
		},
		
/*---If either of the above options has been selected, do not complete bellow---*/
	InitialAssessment: 
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
	
	NameOfRegistrar_print: {type: String, title: 'Patient name'}
});

var forms = mongoose.model('forms', Form);
var patient =  mongoose.model('patient', Patient);
var statistics = mongoose.model('statistics', Statistics);

/*Schemas*/
var gynaecologySurgery = mongoose.model('gynaecologySurgery', GynaecologySurgery);
var addmissionDischarge = mongoose.model('addmissionDischarge', AdmissionDischarge);
var cervicalCancer = mongoose.model('cervicalCancer', CervicalCancer);
var endometrialCancer = mongoose.model('endometrialCancer', EndometrialCancer);
var oncologyFollowUpVisit = mongoose.model('oncologyFollowUpVisit', OncologyFollowUpVisit);
var fallopianTubeCancer = mongoose.model('fallopianTubeCancer', FallopianTubeCancer);
var vaginalCancer= mongoose.model('vaginalCancer', VaginalCancer);
var vulvaCancer= mongoose.model('vulvaCancer', VulvaCancer);
var overianCancer= mongoose.model('overianCancer', OverianCancer);
var GTNCancer= mongoose.model('gTNCancer', GTNCancer);
var hysteroscopyDataSheet= mongoose.model('hysteroscopyDataSheet', HysteroscopyDataSheet);
var gynaeCritical_Incident_DataCollection = mongoose.model('gynaeCritical_Incident_DataCollection', GynaeCritical_Incident_DataCollection);


module.exports = {
	forms: forms,
	patient: patient,
	statistics: statistics,
	gynaecologySurgery: gynaecologySurgery,
	addmissionDischarge: addmissionDischarge,
	cervicalCancer: cervicalCancer,
    endometrialCancer: endometrialCancer,
    oncologyFollowUpVisit: oncologyFollowUpVisit,
    fallopianTubeCancer: fallopianTubeCancer,
    vaginalCancer: vaginalCancer,
    vulvaCancer: vulvaCancer,
    overianCancer: overianCancer,
    GTNCancer: GTNCancer,
    hysteroscopyDataSheet: hysteroscopyDataSheet,
    gynaeCritical_Incident_DataCollection: gynaeCritical_Incident_DataCollection
};