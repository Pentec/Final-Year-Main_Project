/**
 * Created by Ruth on 2015-08-25.
 */
var mongoose = require('mongoose');

var Schema   = mongoose.Schema;
var Statistics = new Schema({
    CervicalCancer	: {
            patientID: [Number],
            patientAge: [Number],
            DateOfDiagnosis: [Number],//will be per patient (size = no. of patients)
            TumourSizeBefore: [Number],//Range of the two; before and after
            TumourSizeAfter: [Number],
            HIVStatus: Number,
            CD4: Number,
            DateOfTreatment: [Number],
            figoStage: [Number],
            SurgeryType: [Number],
            RadioTherapyType: [Number],
            TreatmentResponse: [Number],
            VitalStatus: [Number],
            doctor_name	: [Number],
            Death: [{ //Death[index].Cause
                Cause: Number,
                DateOfDeath: Number
            }],
            percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
            totalPatients: Number,
            required: true
    },

    EndometrialCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Number],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        HIVStatus: Number,
        CD4: Number,
        DateOfTreatment: [Number],
        figoStage: [Number],
        SurgeryType: [Number],
        RadioTherapyType: [Number],
        TreatmentResponse: [Number],
        VitalStatus: [Number],
        doctor_name	: [Number],
        Death: [{ //Death[index].Cause
            Cause: Number,
            DateOfDeath: Number
        }],
        percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
        totalPatients: Number,
        required: true
    },

    FallopianTubeCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Number],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        HIVStatus: Number,
        CD4: Number,
        DateOfTreatment: [Number],
        figoStage: [Number],
        SurgeryType: [Number],
        RadioTherapyType: [Number],
        TreatmentResponse: [Number],
        VitalStatus: [Number],
        doctor_name	: [Number],
        Death: [{ //Death[index].Cause
            Cause: Number,
            DateOfDeath: Number
        }],
        percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
        totalPatients: Number,
        required: true
    },

    OvarianCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Number],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        HIVStatus: Number,
        CD4: Number,
        DateOfTreatment: [Number],
        figoStage: [Number],
        SurgeryType: [Number],
        RadioTherapyType: [Number],
        TreatmentResponse: [Number],
        VitalStatus: [Number],
        doctor_name	: [Number],
        Death: [{ //Death[index].Cause
            Cause: Number,
            DateOfDeath: Number
        }],
        percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
        totalPatients: Number,
        required: true
    },

    VaginalCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Number],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        HIVStatus: Number,
        CD4: Number,
        DateOfTreatment: [Number],
        figoStage: [Number],
        SurgeryType: [Number],
        RadioTherapyType: [Number],
        TreatmentResponse: [Number],
        VitalStatus: [Number],
        doctor_name	: [Number],
        Death: [{ //Death[index].Cause
            Cause: Number,
            DateOfDeath: Number
        }],
        percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
        totalPatients: Number,
        required: true
    },

    VulvaCancer	: {
        patientID: [Number],
        patientAge: [Number],
        DateOfDiagnosis: [Number],//will be per patient (size = no. of patients)
        TumourSizeBefore: [Number],//Range of the two; before and after
        TumourSizeAfter: [Number],
        HIVStatus: Number,
        CD4: Number,
        DateOfTreatment: [Number],
        figoStage: [Number],
        SurgeryType: [Number],
        RadioTherapyType: [Number],
        TreatmentResponse: [Number],
        VitalStatus: [Number],
        doctor_name	: [Number],
        Death: [{ //Death[index].Cause
            Cause: Number,
            DateOfDeath: Number
        }],
        percentageOfPatients: Number, //percentage of with this type of cancer (out of total cancer patients)
        totalPatients: Number,
        required: true
    },

    totalCancerPatients: Number //total cancer patients

});
module.exports.statistics = mongoose.model('statistics', Statistics);