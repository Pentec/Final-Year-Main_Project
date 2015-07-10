var mongo = require('mongodb');
var mongoose = require('mongoose');

var CervicalCancerSchema = mongoose.Schema;

var CervCanver = new GynaSurgerySchema({

/*patient details*/

        HospitalNumber: String,
	IDNumber:Number,
	DOB:Date,
	CellPhoneNum:Number,
	DiagnosisProcedureDate: Date,
        AltTelNum: Number,
	HIV: {Status: String, CD4: Number},
	
/*FIGO Stage*/
        FIGOStage: {Unknown: Boolean, la1: Boolean, la2: Boolean, lb1: Boolean, lb2: Boolean, lla1: Boolean,lla2: Boolean, llb: Boolean, llla: Boolean, lllb: Boolean, lVa: Boolean, lVb:Boolean},
/*Tumorzsize*/
        TumorSize: {<4cm: Boolean,>4cm: Boolean, Unknown: Boolean},
/*UseOfImganingDiagnosticTools*/	
        UseOfImaginigDiagnosticTools: {Yes: Boolean, N:Boolean, Unknown:Boolean},
	IfYes {MRI: Boolean, CT: Boolean, Ultrasound: Boolean, PET: Boolean, Other: Boolean, Unknown: Boolean},
/*SitOfDistantMetastses*/	
        SiteOfDistant: 
	{
	Nil: Boolean,
	Lung: Boolean,
	Liver: Boolean, 
	Bowel: Boolean, 
	Bone: Boolean, 
	Brain: Boolean,
	Other: Boolean,
	Unknown: Boolean
	},
	
/*Histology*/	
        Histology: 
	{
	Squamous: Boolean,
	Adeno: Boolean,
	Adenosquamous: Boolean, 
	Clear cell: Boolean, 
	Other: Boolean, 
	Unknown: Boolean
	},
	
/*Differentiation*/	
        Differentiation: 
	{
	well: Boolean,
	moderatley: Boolean,
	poorly: Boolean, 
	Unknown: Boolean
	},	
	
/*Lymphovascular space involvemtnt*/	
        LymphovascularSpace: 
	{
	Absent: Boolean,
	Present: Boolean,
	Unknown: Boolean
	},
	
/*PrimaryTreatmentPerformed*/	
       PrimaryTreatmentPerformed: 
	{
	Conization: Boolean,
	AmputationOfCervix: Boolean,
	RTnoLND: Boolean,
	RTwithLND: Boolean,
	TAH,noLND: Boolean,
	TAHwithLND: Boolean,
	VHnoLND: Boolean,
	VHwith: Boolean,
	RHnoLND: Boolean,
	RHwithLND: Boolean,
	RadVHnoLND: Boolean,
	RadVHwithLND: Boolean,
	AnyExenteration: Boolean,
	Other: Boolean,
	Unknown: Boolean
	},
       DateOfSurgery: Date,
       
/*Type Of Tadiatherapy**/	
       TypeOfRadTheropy: 
	{
	Intracavitary: Boolean,
	ExternalPelvicRT: Boolean,
	ExternalPelvicPlusParaortic: Boolean,
	ExternalPelvicPlusIntracavitary: Boolean,
	ExternalPelvicPlusParaortic: Boolean,
	TAHwithLND: Boolean,
	VHnoLND: Boolean,
	VHwith: Boolean,
	RHnoLND: Boolean,
	RHwithLND: Boolean,
	RadVHnoLND: Boolean,
	RadVHwithLND: Boolean,
	AnyExenteration: Boolean,
	Other: Boolean,
	Unknown: Boolean
	},
       
        ProcedureCat: {Oncology: Boolean, GeneralGynae: Boolean, Infertility: Boolean, Urologynaecology: Boolean},
        AccessType: {OpenAbdomen: Boolean, Endoscopy: Boolean, Vaginal: Boolean},
        PreOperICD10Codes: [String],
        PerformedBy: {Consultant: Boolean, Fellow: Boolean, Registrar: Boolean, Intern: Boolean},
	DygnosisNotOnICD10List: [String],
	ProPerformedCode: [String],
	IOComplications: {None: Boolean, BladderInjury: Boolean, BowelInjury: Boolean, BRUBT: Boolean, ProcedureNotCompleted: Boolean},
	OtherComplications: String
    }
);

var GynaSergery = mongoose.model('GynaSurgerySchema', GynaSerg );
mongoose.connect('mongodb://localhost/patientsT');

console.log('Connected.');


var Form = new GynaSergery({

        ProcedureDate: Date.now(),
        HospitalNumber: 'K007',
        Age: 35,
        Name: 'Lemon',
        Surname: 'Squash',
	UnknownField: {P: true , G: false, M: false, E: false},
        HIV: {Status: 'N', CD4: 700},
        ProcedureType: {Elective: false, Emergency: true},
        Firm: {G1: false, G2: false, G3: false, ONC: true},
        ProcedureCat: {Oncology: true, GeneralGynae: false, Infertility: false, Urologynaecology: false},
        AccessType: {OpenAbdomen: false, Endoscopy: false, Vaginal: true},
        PreOperICD10Codes: null,
        PerformedBy: {Consultant: false, Fellow: true, Registrar: false, Intern: false},
	DygnosisNotOnICD10List: null,
	ProPerformedCode: null,
	IOComplications: {None: true, BladderInjury: false, BowelInjury: false, BRUBT: false, ProcedureNotCompleted: false},
	OtherComplications: null
	
    }
);

Form.save(function(err){

    if(err) {console.log('An error occurred while trying to add data', err);}
    else{console.log('The data has been saved.');}
});