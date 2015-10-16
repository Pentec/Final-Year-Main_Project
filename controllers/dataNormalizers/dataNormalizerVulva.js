var express = require('express');
var submodules = "../../sub-modules/";
var models = require(submodules + 'pims-database/database');
var vulva = models.vulvaCancer;


var MAX = 1; //Maximum value for scaling
var MIN = -1; //Minimum value for scaling

/**
 * @function getNormalizedData: Normalizes the textual data found in the database. All the function below are helper
 * functions to normalize each input field.
 * @param1 name: Patient's name
 * @return {array} : The array of inputs nodes for the Neural Network
 */
var getNormalizedData = function(name, surname, callback) {

    vulva.findOne({Name: name}, function(err, patient){
        if(!err) {

            if(patient){
                var dataArray,
                    returnArray = null;

                dataArray = [
                    normalizeAge(patient),
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
                   // console.log(dataArray[i] + " | ");
                    //adds all values into an array; neural network input nodes are to be an array
                    returnArray = returnArray.concat([dataArray[i]]);
                }


                //return dataArray;
                return callback(returnArray);
            }
            else{
                return callback(null);
            }


        }
        else
        {
            throw new Error('Database error: No such patient');
            return callback(err);
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

    if(patient.figoStage.Ia == true)
        value = 1/7;
    else if(patient.figoStage.Ib == true)
        value = 2/7;
    else if(patient.figoStage.II == true)
        value = 3/7;
    else if(patient.figoStage.III == true)
        value = 4/7;
    else if(patient.figoStage.IVa == true)
        value = 5/7;
    else if(patient.figoStage.IVb == true)
        value = 6/7;
    else if(patient.figoStage.Unknown == true)
        value = 7/7;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeOfDistantMetastase
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeOfDistantMetastase =  function(patient){

    var value = 0;

    if(patient.SiteOfDistantMetastase.Nil == true)
        value = 1/9;
    else if(patient.SiteOfDistantMetastase.Skin == true)
        value = 2/9;
    else if(patient.SiteOfDistantMetastase.Bone == true)
        value = 3/9;
    else if(patient.SiteOfDistantMetastase.Lungs == true)
        value = 4/9;
    else if(patient.SiteOfDistantMetastase.Liver == true)
        value = 5/9;
    else if(patient.SiteOfDistantMetastase.Brain == true)
        value = 6/9;
    else if(patient.SiteOfDistantMetastase.LymphNodesOtherThanFemoralAndInguinal == true)
        value = 7/9;
    else if(patient.SiteOfDistantMetastase.Other == true)
        value = 8/9;
    else if(patient.SiteOfDistantMetastase.Unknown == true)
        value = 8/9;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeHistology
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeHistology =  function(patient){

    var value = 0;

    if(patient.Histology.NilUnclassifiable == true)
        value = 1/9;
    else if(patient.Histology.SquamousInSitu == true)
        value = 2/9;
    else if(patient.Histology.Verrucous == true)
        value = 3/9;
    else if(patient.Histology.BasalCell == true)
        value = 4/9;
    else if(patient.Histology.Squamous == true)
        value = 5/9;
    else if(patient.Histology.BartholinGlandAdeno == true)
        value = 6/9;
    else if(patient.Histology.Adenocarcinoma == true)
        value = 7/9;
    else if(patient.Histology.Other == true)
        value = 8/9;
    else if(patient.Histology.Unknown == true)
        value = 9/9;

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
    else if(patient.Differentiation.Unknown == true)
        value = 4/4;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeprimaryTreatment
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeprimaryTreatment =  function(patient){

    var value = 0;

    if(patient.PrimaryTreatmentPerformed.Nil == true)
        value = 1/8;
    else if(patient.PrimaryTreatmentPerformed.SurgeryAlone == true)
        value = 2/8;
    else if(patient.PrimaryTreatmentPerformed.RTAlone == true)
        value = 3/8;
    else if(patient.PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin60Days == true)
        value = 4/8;
    else if(patient.PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery == true)
        value = 5/8;
    else if(patient.PrimaryTreatmentPerformed.SurgeryAdjuvantRT == true)
        value = 6/8;
    else if(patient.PrimaryTreatmentPerformed.SurgeryAdjuvantCT == true)
        value = 7/8;
    else if(patient.PrimaryTreatmentPerformed.Other == true)
        value = 8/8;
    else if(patient.PrimaryTreatmentPerformed.CRT == true)
        value = 8/8;
    else if(patient.PrimaryTreatmentPerformed.Unknown == true)
        value = 8/8;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizetypeOfSurgery
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizetypeOfSurgery =  function(patient){

    var value = 0;

    if(patient.typeOfSurgery.WideLocalExcisionWithLND == true)
        value = 1/9;
    else if(patient.typeOfSurgery. WideLocalExcisionNoLND == true)
        value = 2/9;
    else if(patient.typeOfSurgery.SimpleVulvectomyWithLND == true)
        value = 3/9;
    else if(patient.typeOfSurgery.SimpleVulvectmyNoLND == true)
        value = 4/9;
    else if(patient.typeOfSurgery.RadicalVulvectomyNoLND == true)
        value = 5/9;
    else if(patient.typeOfSurgery.RadicalVulvectomyWithLND == true)
        value = 6/9;
    else if(patient.typeOfSurgery.AnyKindOfExenteration == true)
        value = 7/9;
    else if(patient.typeOfSurgery.Other == true)
        value = 8/9;
    else if(patient.typeOfSurgery.Unknown == true)
        value = 9/9;

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
        value = 1/5;
    else if(patient.typeOfRadiotherapy.ExternalRT == true)
        value = 2/5;
    else if(patient.typeOfRadiotherapy.ExternalIntracavitary == true)
        value = 3/5;
    else if(patient.typeOfRadiotherapy.Other == true)
        value = 4/5;
    else if(patient.typeOfRadiotherapy.Unknown == true)
        value = 5/5;

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

    if(patient.LastKnownVitalStatus.AliveUnknownDiseaseStatus == true)
        value = 1/4;
    else if(patient.LastKnownVitalStatus.AliveAndNoEvidenceOfDisease == true)
        value = 2/4;
    else if(patient.LastKnownVitalStatus.AliveWithDisease == true)
        value = 3/4;
    else if(patient.LastKnownVitalStatus.Dead == true)
        value = 4/4;

    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeAge
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeAge = function(patient){

    var date = patient.DateOfBirth;

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

   var age = getPatientAge(day,month,year);
    var value = (age/Math.pow(10,2));

    return value;
};

/**
 * @function normalizeCD4
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeCD4 = function(patient){

    var cd4 = patient.HIVStatus.CD4 ;

    if(patient.HIVStatus.Positive == true)
        var value = (cd4/Math.pow(10,3.5));
    else
        var value = 0.9998;

    return value;
};

/**
 * @function normalizeHIV
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeHIV = function(patient){

    var value = 0;

    if(patient.HIVStatus.Negative == true)
        value = 0.9;
    else if (patient.HIVStatus.Positive == true)
        value = 0.1;

    return value;
};

/**
 * @function Gets patients age using the date of birth
 * @param birth_day The day of birth
 * @param birth_month The month of birth
 * @param birth_year The year of birth
 * @returns {number} Returns the age in a number
 */
function getPatientAge(birth_day,birth_month,birth_year)
{
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}

module.exports = {
    getNormalizedData: getNormalizedData
};