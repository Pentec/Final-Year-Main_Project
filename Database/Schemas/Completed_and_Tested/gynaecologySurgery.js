var mongo = require('mongodb');
var mongoose = require('mongoose');

var GynaSurgerySchema = mongoose.Schema;

var GynaSerg = new GynaSurgerySchema({

        ProcedureDate: Date,
        HospitalNumber: String,
        Age: Number,
        Name: String,
        Surname: String,
	UnknownField: {P: Boolean, G: Boolean, M: Boolean, E: Boolean},
        HIV: {Status: String, CD4: Number},
        ProcedureType: {Elective: Boolean, Emergency:Boolean},
        Firm: {G1: Boolean, G2: Boolean, G3: Boolean, ONC: Boolean},
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