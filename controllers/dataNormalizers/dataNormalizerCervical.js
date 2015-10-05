var express = require('express');
var models = require('pims-database');
var cervical = models.cervicalCancer;


var MAX = 1; //Maximum value for scaling
var MIN = -1; //Minimum value for scaling

/**
 * @function getNormalizedData: Normalizes the textual data found in the database. All the function below are helper
 * functions to normalize each input field.
 * @param1 name: Patient's name
 * @return {array} : The array of inputs nodes for the Neural Network
 */
var getNormalizedData = function(name, surname, callback) {

    cervical.findOne({Name: name}, function(err, patient){

        if(err)
        {
            throw new Error('Database error: No such patient');
            return callback(err);
        }

        if(patient) {

            var dataArray,
                returnArray = null;

            dataArray = [
                normalizeDate(patient),
                normalizeHIV(patient),
                normalizeCD4(patient),
                normalizeFigoStage(patient),
                normalizeOfDistantMetastase(patient),
                normalizeHistology(patient),
                normalizeDifferentiation(patient),
                normalizeprimaryTreatment(patient),
                normalizetypeOfSurgery(patient),
                normalizetypeOfRadiotherapy(patient),
                normalizeresponseToTreatment(patient),
                normalizeRelapse(patient),
                normalizelastKnownVitalStatus(patient)

            ];

            returnArray = [dataArray[0]];

            for(var i = 1; i < dataArray.length; i++){
                //console.log(dataArray[i] + " | ");
                //adds all values into an array; neural network input nodes are to be an array
                returnArray = returnArray.concat([dataArray[i]]);
            }

            //console.log('returnArray ' + returnArray);
            //return callback(dataArray);
            return callback(returnArray);

        }
        else{
            return callback(null);
        }

    });
};

/**
 * @function normalizeFigoStage
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeFigoStage =  function(patient){

    var value = 0;

    if(patient.figoStage.Ia1 == true)
        value = 1/12;
    else if(patient.figoStage.Ia2 == true)
        value = 2/12;
    else if(patient.figoStage.Ib1 == true)
        value = 3/12;
    else if(patient.figoStage.Ib2 == true)
        value = 4/12;
    else if(patient.figoStage.IIa1 == true)
        value = 5/12;
    else if(patient.figoStage.IIa2 == true)
        value = 6/12;
    else if(patient.figoStage.IIb == true)
        value = 7/12;
    else if(patient.figoStage.IIIa == true)
        value = 8/12;
    else if(patient.figoStage.IIIb == true)
        value = 9/12;
    else if(patient.figoStage.IVa == true)
        value = 10/12;
    else if(patient.figoStage.IVb == true)
        value = 11/12;
    else if(patient.figoStage.Unknown == true)
        value = 12/12;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeOfDistantMetastase
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeOfDistantMetastase =  function(patient){

    var value = 0;

    if(patient.siteOfDistantMetastase.Nil == true)
        value = 1/8;
    else if(patient.siteOfDistantMetastase.Lung == true)
        value = 2/8;
    else if(patient.siteOfDistantMetastase.Liver == true)
        value = 3/8;
    else if(patient.siteOfDistantMetastase.Bowel == true)
        value = 4/8;
    else if(patient.siteOfDistantMetastase.Bone == true)
        value = 5/8;
    else if(patient.siteOfDistantMetastase.Brain == true)
        value = 6/8;
    else if(patient.siteOfDistantMetastase.Other == true)
        value = 7/8;
    else if(patient.siteOfDistantMetastase.Unknown == true)
        value = 8/8;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeHistology
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeHistology =  function(patient){

    var value = 0;

    if(patient.Histology.Squamous == true)
        value = 1/6;
    else if(patient.Histology.Adeno == true)
        value = 2/6;
    else if(patient.Histology.Adenosquamous == true)
        value = 3/6;
    else if(patient.Histology.Clearcell == true)
        value = 4/6;
    else if(patient.Histology.Other == true)
        value = 5/6;
    else if(patient.Histology.Unknown == true)
        value = 6/6;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeDifferentiation
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeDifferentiation =  function(patient){

    var value = 0;

    if(patient.Differentiation.Well == true)
        value = 1/3;
    else if(patient.Differentiation.Moderately == true)
        value = 2/3;
    else if(patient.Differentiation.Poorly == true)
        value = 3/3;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeprimaryTreatment
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeprimaryTreatment =  function(patient){

    var value = 0;

    if(patient.primaryTreatment.Nil == true)
        value = 1/10;
    else if(patient.primaryTreatment.SurgeryAlone == true)
        value = 2/10;
    else if(patient.primaryTreatment.RTAlone == true)
        value = 3/10;
    else if(patient.primaryTreatment.NeoAdjuvantCTSurgery == true)
        value = 4/10;
    else if(patient.primaryTreatment.SurgeryAdjuvantRTCRT == true)
        value = 5/10;
    else if(patient.primaryTreatment.SurgeryAdjuvantCT == true)
        value = 6/10;
    else if(patient.primaryTreatment.Chemoradiation == true)
        value = 7/10;
    else if(patient.primaryTreatment.CTAlone == true)
        value = 8/10;
    else if(patient.primaryTreatment.Unknown == true)
        value = 9/10;
    else if(patient.primaryTreatment.Other == true)
        value = 10/10;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizetypeOfSurgery
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizetypeOfSurgery =  function(patient){

    var value = 0;

    if(patient.typeOfSurgery.Conization == true)
        value = 1/15;
    else if(patient.typeOfSurgery.AmputationOfCervix == true)
        value = 2/15;
    else if(patient.typeOfSurgery.RTNoLND == true)
        value = 3/15;
    else if(patient.typeOfSurgery.RTwithLND == true)
        value = 4/15;
    else if(patient.typeOfSurgery.TAHnoLND == true)
        value = 5/15;
    else if(patient.typeOfSurgery.TAHwithLND == true)
        value = 6/15;
    else if(patient.typeOfSurgery.VHnoLND == true)
        value = 7/15;
    else if(patient.typeOfSurgery.VHwithLND == true)
        value = 8/15;
    else if(patient.typeOfSurgery.RHnoLND == true)
        value = 9/15;
    else if(patient.typeOfSurgery.RHwithLND == true)
        value = 10/15;
    else if(patient.typeOfSurgery.RadVHnoLND == true)
        value = 11/15;
    else if(patient.typeOfSurgery.RadVHwithLND == true)
        value = 12/15;
    else if(patient.typeOfSurgery.AnyKindOfExenteration == true)
        value = 13/15;
    else if(patient.typeOfSurgery.Unknown == true)
        value = 14/15;
    else if(patient.typeOfSurgery.Other == true)
        value = 15/15;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizetypeOfRadiotherapy
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizetypeOfRadiotherapy =  function(patient){

    var value = 0;

    if(patient.typeOfRadiotherapy.Intracavitary == true)
        value = 1/6;
    else if(patient.typeOfRadiotherapy.ExternalPelvicRT == true)
        value = 2/6;
    else if(patient.typeOfRadiotherapy.ExternalPelvicParaortic == true)
        value = 3/6;
    else if(patient.typeOfRadiotherapy.ExternalPelvicIntracavitary == true)
        value = 4/6;
    else if(patient.typeOfRadiotherapy.ExtpelvicParaortIntracavitary == true)
        value = 5/6;
    else if(patient.typeOfRadiotherapy.Unknown == true)
        value = 6/6;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeresponseToTreatment
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeresponseToTreatment =  function(patient){

    var value = 0;

    if(patient.responseToTreatment.Complete == true)
        value = 1/6;
    else if(patient.responseToTreatment.Partial == true)
        value = 2/6;
    else if(patient.responseToTreatment.StableDisease == true)
        value = 3/6;
    else if(patient.responseToTreatment.ProgressiveDisease == true)
        value = 4/6;
    else if(patient.responseToTreatment.NotAssessable == true)
        value = 5/6;
    else if(patient.responseToTreatment.Unknown == true)
        value = 6/6;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeRelapse
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeRelapse =  function(patient){

    var value = 0;
    if(patient.Relapse.Yes == true)
        value = 1/3;
    else if(patient.Relapse.No == true)
        value = 2/3;
    else if(patient.Relapse.Unknown == true)
        value = 3/3;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizelastKnownVitalStatus
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizelastKnownVitalStatus =  function(patient){

    var value = 0;

    if(patient.lastKnownVitalStatus.AliveUnknownDiseaseStatus == true)
        value = 1/4;
    else if(patient.lastKnownVitalStatus.AliveAndNoEvidenceOfDisease == true)
        value = 2/4;
    else if(patient.lastKnownVitalStatus.AliveWithDisease == true)
        value = 3/4;
    else if(patient.lastKnownVitalStatus.Dead == true)
        value = 4/4;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeDate
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeDate = function(patient){

    var date = parseInt(new Date(patient.DateOfBirth).toString('ddMMyyyy'));

    var value = (date/Math.pow(10,8));

    return value;
};

/**
 * @function normalizeCD4
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeCD4 = function(patient){
    //normal CD4 count for HIV negative is 500-1500 cells/mm3; for HIV positive it can be around here or go down to even zero
    var cd4 = patient.HIV.CD4 ;

    if(patient.HIV.HIVStatus == 'N' || patient.HIV.HIVStatus == 'Negative' || patient.HIV.HIVStatus == 'negative')
        var value = (cd4/Math.pow(10,3.5));
    else{
        //HIV status is positive, value to be returned is close to 1; Neural Network accepts decimal values
        //because CD4 count can vary, this value has been accepted as a default
        var value = 0.9998;
    }


    return value;
};

/**
 * @function normalizeHIV
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeHIV = function(patient){

    var status = patient.HIV.HIVStatus;

    var value = 0;

    if(status == 'N' || status == 'Negative' || status == 'negative')
        value = 0.9;
    else if(status == 'P' || status == 'Positive' || status == 'positive')
        value = 0.1;

    return value;
};

module.exports = {
    getNormalizedData: getNormalizedData
};