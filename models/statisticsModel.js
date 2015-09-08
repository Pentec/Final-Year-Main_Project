/**
 * Created by Ruth on 2015-08-25.
 */
var mongoose = require('mongoose');

var Schema   = mongoose.Schema;
var Statistics = new Schema({
    TotalPatients	: {
        CancerFormID: {//form id per cancer type
            patientID: [Number],
            totalPatients: [Number],//number of patients per cancer type (size will be number of forms)
            DateOfDiagnosis: [Date],//will be per patient (size = no. of patients)
            TumourSizeBefore: [Number],//Range of the two; before and after
            TumourSizeAfter: [Number],
            PrimaryTreatment: [String],
            DateOfTreatment: [Date],
            SurgeryType: [String],
            RadioTherapyType: [String],
            TreatmentResponse: [String],
            VitalStatus: [String],
            Death: [{ //Death[index].Cause
                Cause: String,
                DateOfDeath: Date
            }],
            averagePatients: Number, //totalPatients divided by OverallPatients per cancer type
            stdDevPatients: [Number],//will be per patient (size = no. of cancer types)
        },
        OverallPatients: Number,
        required: true
    },
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




/*methods*/


module.exports.statistics = mongoose.model('statistics', Statistics);