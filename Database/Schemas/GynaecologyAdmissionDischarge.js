var mongo = require('mongodb');
var mongoose = require('mongoose');

var ADSchema = mongoose.Schema;

var admissionDischarge = new ADSchema({
	HospitalNumber: String,
	DOB: Date,
	Age: Number,
	Name: String,
	Surname: String,
	DateOfAdmission: Date,
	Firm: String,
	Admission: String,
	AdmissionTo: String,
	HIV: {Status: String, CD4: Number},
	DateOfDischarge: Date,
	NumberDaysHospital: Number,
	DaysInWard: Number,
	DaysInICU: Number,
	DaysInHighCare: Number,
	FinalDiagnosisOnDischarge: [String],
	Diagnosis: {Misscarriage: [Boolean], Salpingitis: [Boolean], Ectopic: [Boolean], BBA: [Boolean], Other: [Boolean], Oncology: [Boolean]},
	PostOperativeComplications: [Boolean],
	OtherComplications: String
	}
);
var AD = mongoose.model('ADSchema', admissionDischarge);
mongoose.connect('mongodb://localhost/patientsT');
	
console.log('Connected.');
	
//This is just random data while we wait for front end structure
var patientForm = new AD({
	
	HospitalNumber: 'ZAF931',
	DOB: Date.now(),
	Age: 21,
	Name: 'Hilo',
	Surname: 'Absea',
	DateOfAdmission: Date.now(),
	Firm: 'ONC',
	Admission: 'Emergency',
	AdmissionTo: 'ICU',
	HIV: {Status: 'P', CD4: 300},
	DateOfDischarge: Date.now(),
	NumberDaysHospital: 2,
	DaysInWard: 2,
	DaysInICU: 1,
	DaysInHighCare: 0,
	FinalDiagnosisOnDischarge: null,
	Diagnosis: {Misscarriage: null, Salpingitis: null, Ectopic: null, BBA: null, Other: null, Oncology: null},
	PostOperativeComplications: null,
	OtherComplications: 'none'
	}
);
	
patientForm.save(function(err){
	
	if(err) {console.log('Error...', err);}
	else{console.log('Saved.');}
	});