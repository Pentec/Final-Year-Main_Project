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

var forms = mongoose.model('forms', Form);
var patient =  mongoose.model('patient', Patient);
var statistics = mongoose.model('statistics', Statistics);
var gynaecologySurgery = mongoose.model('gynaecologySurgery', GynaecologySurgery);
var addmissionDischarge = mongoose.model('addmissionDischarge', AdmissionDischarge);
var cervicalCancer = mongoose.model('cervicalCancer', CervicalCancer);

module.exports = {
	forms: forms,
	patient: patient,
	statistics: statistics,
	gynaecologySurgery: gynaecologySurgery,
	addmissionDischarge: addmissionDischarge,
	cervicalCancer: cervicalCancer
};
