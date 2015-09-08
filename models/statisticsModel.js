var mongoose = require('mongoose');

var Schema   = mongoose.Schema;
var Statistics = new Schema({
    CervicalCancer	: {
            patientID: [Number],
            patientAge: [Number],
            DateOfDiagnosis: [Date],//will be per patient (size = no. of patients)
            TumourSizeBefore: [Number],//Range of the two; before and after
            TumourSizeAfter: [Number],
            PrimaryTreatment: [String],
            DateOfTreatment: [Date],
            SurgeryType: [String],
            RadioTherapyType: [String],
            TreatmentResponse: [String],
            VitalStatus: [String],
            doctor_name	: [String],
            Death: [{ //Death[index].Cause
                Cause: String,
                DateOfDeath: Date
            }],
            percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
            totalPatients: Number,
            required: true
    },
<<<<<<< HEAD
    doctor_name				: [String],//allow for duplicates, same doctor can treat many patients
    Summary	: [{//stats related data
        OverallPatients: Number,
        OverallAverage: Number,
        OverallMedian: Number,
        OverallMode: Number,
        OverallStdDevPatients: Number,
        OverallVariancePatients: Number,
        required: true

    }]
});
=======

    EndometrialCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Date],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        PrimaryTreatment: [String],
        DateOfTreatment: [Date],
        SurgeryType: [String],
        RadioTherapyType: [String],
        TreatmentResponse: [String],
        VitalStatus: [String],
        doctor_name	: [String],
        Death: [{ //Death[index].Cause
            Cause: String,
            DateOfDeath: Date
        }],
        percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
        totalPatients: Number,
        required: true
    },
>>>>>>> 6a0fe1d09cb7334702cf5d5269950e8aea74d9b2

    FallopianTubeCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Date],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        PrimaryTreatment: [String],
        DateOfTreatment: [Date],
        SurgeryType: [String],
        RadioTherapyType: [String],
        TreatmentResponse: [String],
        VitalStatus: [String],
        doctor_name	: [String],
        Death: [{ //Death[index].Cause
            Cause: String,
            DateOfDeath: Date
        }],
        percentageOfPatients: Number,
        totalPatients: Number,
        required: true
    },

    OvarianCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Date],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        PrimaryTreatment: [String],
        DateOfTreatment: [Date],
        SurgeryType: [String],
        RadioTherapyType: [String],
        TreatmentResponse: [String],
        VitalStatus: [String],
        doctor_name	: [String],
        Death: [{ //Death[index].Cause
            Cause: String,
            DateOfDeath: Date
        }],
        percentageOfPatients: Number,
        totalPatients: Number,
        required: true
    },

    VaginalCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Date],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        PrimaryTreatment: [String],
        DateOfTreatment: [Date],
        SurgeryType: [String],
        RadioTherapyType: [String],
        TreatmentResponse: [String],
        VitalStatus: [String],
        doctor_name	: [String],
        Death: [{ //Death[index].Cause
            Cause: String,
            DateOfDeath: Date
        }],
        percentageOfPatients: Number,
        totalPatients: Number,
        required: true
    },

    VulvaCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Date],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        PrimaryTreatment: [String],
        DateOfTreatment: [Date],
        SurgeryType: [String],
        RadioTherapyType: [String],
        TreatmentResponse: [String],
        VitalStatus: [String],
        doctor_name	: [String],
        Death: [{ //Death[index].Cause
            Cause: String,
            DateOfDeath: Date
        }],
        percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
        totalPatients: Number,
        required: true
    },

    totalCancerPatients: Number //total cancer patients

});
module.exports.statistics = mongoose.model('statistics', Statistics);
