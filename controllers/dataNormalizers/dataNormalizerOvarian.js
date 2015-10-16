var express = require('express');
var submodules = "../../sub-modules/";
var models = require(submodules + 'pims-database/database');
var ovarian = models.overianCancer;


var MAX = 1; //Maximum value for scaling
var MIN = -1; //Minimum value for scaling

/**
 * @function getNormalizedData: Normalizes the textual data found in the database. All the function below are helper
 * functions to normalize each input field.
 * @param1 name: Patient's name
 * @return {array} : The array of inputs nodes for the Neural Network
 */
var getNormalizedData = function(name, surname, callback) {

    ovarian.findOne({Name: name}, function(err, patient){
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
                    //console.log(dataArray[i] + " | ");
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
        value = 1/12;
    else if(patient.figoStage.Ib == true)
        value = 2/12;
    else if(patient.figoStage.Ic == true)
        value = 3/12;
    else if(patient.figoStage.IIa == true)
        value = 4/12;
    else if(patient.figoStage.IIb == true)
        value = 5/12;
    else if(patient.figoStage.IIc == true)
        value = 6/12;
    else if(patient.figoStage.IIIa == true)
        value = 7/12;
    else if(patient.figoStage.IIIb == true)
        value = 8/12;
    else if(patient.figoStage.IIIc == true)
        value = 9/12;
    else if(patient.figoStage.IV == true)
        value = 10/12;
    else if(patient.figoStage.SurgicalStageUnavailable == true)
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
var normalizeOfDistantMetastase = function(patient){

    var value = 0;

    if(patient.SiteOfDistantMetastases.PleuralEffusion == true)
        value = 1/5;
    else if(patient.SiteOfDistantMetastases.Liver == true)
        value = 2/5;
    else if(patient.SiteOfDistantMetastases.Brain == true)
        value = 3/5;
    else if(patient.SiteOfDistantMetastases.OtherSite == true)
        value = 4/5;
    else if(patient.SiteOfDistantMetastases.Unknown == true)
        value = 5/5;


    return ((value - MIN)/(MAX - MIN));
};

/**
 * @function normalizeHistology
 * @param patient: the patient whose survival data is being queried.
 * @returns {number}: the input value to be added in dataArray.
 */
var normalizeHistology =  function(patient){

    var value = 0;

    if(patient.Histology.NoHystologyUnclassifiable == true)
        value = 1/11;
    else if(patient.Histology.BorderlineSerousCystadenoma == true)
        value = 2/11;
    else if(patient.Histology.BorderlineMusinousCystadenoma == true)
        value = 3/11;
    else if(patient.Histology.BorderlineEndometroidCystadenoma == true)
        value = 4/11;
    else if(patient.Histology.UndifferentiatedCarcinoma == true)
        value = 5/11;
    else if(patient.Histology.MixedEpithelialTumor == true)
        value = 6/11;
    else if(patient.Histology.EndometroidCystadenocarcinoma == true)
        value = 7/11;
    else if(patient.Histology.ClearCellCystadenocarcinoma == true)
        value = 8/11;
    else if(patient.Histology.SerousCystadenocarcinoma == true)
        value = 9/11;
    else if(patient.Histology.MucinousCystadenocarcinoma == true)
        value = 10/11;
    else if(patient.Histology.Unknown == true)
        value = 11/11;

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

    if(patient.TreatmentPerformed.Nil == true)
        value = 1/8;
    else if(patient.TreatmentPerformed.SurgeryAlone == true)
        value = 2/8;
    else if(patient.TreatmentPerformed.RTAlone == true)
        value = 3/8;
    else if(patient.TreatmentPerformed.NeoAdjuvantCTAndSurgery == true)
        value = 4/8;
    else if(patient.TreatmentPerformed.SurgeryAdjuvantRT == true)
        value = 5/8;
    else if(patient.TreatmentPerformed.SurgeryAdjuvantCT == true)
        value = 6/8;
    else if(patient.TreatmentPerformed.Other == true)
        value = 7/8;
    else if(patient.TreatmentPerformed.Unknown == true)
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

    if(patient.typeOfSurgery.USONoLND == true)
        value = 1/9;
    else if(patient.typeOfSurgery.USOWithLND == true)
        value = 2/9;
    else if(patient.typeOfSurgery.BSONoLND == true)
        value = 3/9;
    else if(patient.typeOfSurgery.BSOWithLND == true)
        value = 4/9;
    else if(patient.typeOfSurgery.multipleBiopsiesNoLND == true)
        value = 5/9;
    else if(patient.typeOfSurgery.multipleBiopsiesWithLND == true)
        value = 6/9;
    else if(patient.typeOfSurgery.ExplorativeLaparotomy == true)
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
        value = 1/7;
    else if(patient.typeOfRadiotherapy.ExternalPelvicRT == true)
        value = 2/7;
    else if(patient.typeOfRadiotherapy.ExternalPelvicParaortic == true)
        value = 3/7;
    else if(patient.typeOfRadiotherapy.ExternalPelvicIntracavitary == true)
        value = 4/7;
    else if(patient.typeOfRadiotherapy.ExtpelvicParaortIntracavitary == true)
        value = 5/7;
    else if(patient.typeOfRadiotherapy.IntraperitonealRadioisotopes == true)
        value = 6/7;
    else if(patient.typeOfRadiotherapy.Unknown == true)
        value = 6/7;
    else if(patient.typeOfRadiotherapy.Other == true)
        value = 7/7;

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
        var value =0.9998;

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