/**
 * Statistics Galore!!
 * @version 0.1.1
 * @licence University Of Pretoria
 */

var submodules = "../sub-modules/";
var models = require('../pims-database/database');
var cervicalCancer = models.cervicalCancer;

//pass cancer collection option
/**/
var getCervicalStageOne = function(callback){
    console.log("getCervicalSurvival");

    var arrSend = [];
    var arrStageOne=[];


    cervicalCancer.aggregate([
        { $match: {$or: [{"figoStage.Ia1": true},//with cancer stage one
            {"figoStage.Ia2": true},
            {"figoStage.Ib1": true},
            {"figoStage.Ib2": true}]} },
        {$group: {
            _id: null,
            count: {$sum: 1}
        }}
    ], function(err, result){
        if(err){
            console.log("Error");
            throw new Error('Database error: ' + err);
            return callback(err);
        }
        else{

            //arrStageOne[0] = result[0].count; //number of patients with stage one cancer
            arrStageOne[0] = 250000; //number of patients with stage one cancer

            //console.log("just checking " + arrSurvive[0]);
            //Surgery
            cervicalCancer.aggregate([
                { $match: {$or: [{"primaryTreatment.SurgeryAlone": true},//with surgery treatment
                {"primaryTreatment.SurgeryAdjuvantRTCRT": true},
                {"primaryTreatment.SurgeryAdjuvantCT": true},
                {"primaryTreatment.NeoAdjuvantCTSurgery": true}]}},
                {$group: {
                    _id: null,
                    count: {$sum: 1}
                }}
            ], function(err, result){

                if(err){
                    console.log("Error");
                    throw new Error('Database error: ' + err);
                    return callback(err);
                }
                else{

                    //arrStageOne[1] = result[0].count; //number of patients with surgery treatment
                    arrStageOne[1] = 50000; //number of patients with surgery treatment

                    //Radiotherapy
                    cervicalCancer.aggregate([
                        { $match: {$or: [{"primaryTreatment.RTAlone": true},//with surgery treatment
                            {"primaryTreatment.SurgeryAdjuvantRTCRT": true}]}},
                        {$group: {
                            _id: null,
                            count: {$sum: 1}
                        }}
                    ], function(err, result){

                        if(err){
                            console.log("Error");
                            throw new Error('Database error: ' + err);
                            return callback(err);
                        }
                        else{

                            //arrStageOne[2] = result[0].count; //number of patients with Radiotherapy treatment
                            arrStageOne[2] = 60000; //number of patients with Radiotherapy treatment

                            //Chemotherapy
                            cervicalCancer.aggregate([
                                { $match: {$or: [{"primaryTreatment.CTAlone": true},//with Chemotherapy treatment
                                    {"primaryTreatment.SurgeryAdjuvantRTCRT": true},
                                    {"primaryTreatment.SurgeryAdjuvantCT": true},
                                    {"primaryTreatment.Chemoradiation": true},
                                    {"primaryTreatment.NeoAdjuvantCTSurgery": true}]}},
                                {$group: {
                                    _id: null,
                                    count: {$sum: 1}
                                }}
                            ], function(err, result){

                                if(err){
                                    console.log("Error");
                                    throw new Error('Database error: ' + err);
                                    return callback(err);
                                }
                                else{

                                    //arrStageOne[3] = result[0].count; //number of patients with Chemotherapy treatment
                                    arrStageOne[3] = 90000; //number of patients with Chemotherapy treatment

                                    arrSend[0] = arrStageOne;
                                    arrSend[1] = "Ruthie!!";
                                    //console.log("just checking " + arrSend[0][0]); //200000
                                    return callback(arrStageOne);
                                }

                            });
                        }

                    });




                }

            });

        }
    });


};


var getCervicalSurvival = function(callback){
    console.log("getCervicalSurvival");

    var arrSend = [];
    var arrSurvive=[];


    cervicalCancer.aggregate([
        { $match: {$or: [{"lastKnownVitalStatus.Dead": false}, {"lastKnownVitalStatus.AliveUnknownDiseaseStatus": true}, {"lastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}, {"lastKnownVitalStatus.AliveWithDisease": true}]} },
        {$group: {
            _id: null,
            count: {$sum: 1}
        }}
    ], function(err, result){
        if(err){
            console.log("Error");
            throw new Error('Database error: ' + err);
            return callback(err);
        }
        else{
            //arrSurvive[0] = result[0].count; //number of people not dead
            arrSurvive[0] = 200000; //number of people not dead
            //console.log("just checking " + arrSurvive[0]);

            arrSend[0] = arrSurvive;
            arrSend[1] = "Ruthie!!";
            //console.log("just checking " + arrSend[0][0]);
            return callback(arrSurvive);


        }
    });


};

/**
 * Gets the particular cancer collection for which to get number of patients
 * that have a particular set of parameters. Returns the number or maybe percentage of
 * patients. Disregard patients who have not come back for follow up
 * @param cancerColl
 * @param callback
 */
var getNumPatients = function(cancerColl, callback){

    cervicalCancer.find({}, function(err, patient){
        var tumourSizeLess = patient.tumor.tumorSize.lessThan4;//boolean
        var tumourSizeGreat = patient.tumor.tumorSize.greaterThan4;//boolean
        var tumourSizeUnk = patient.tumor.tumorSize.Unknown;//boolean

        var patientDead = patient.lastKnownVitalStatus.Dead;

        //check if form is completed
        if(patient.isNotCompeleted == false){
            if(patient.lastKnownVitalStatus.Dead == true){
                //skip patients details, just count
                //of n patients, x% are dead
                //also check cause of death

                for(var cause = 0; cause < patient.causeOfDeath.length; cause++){
                    console.log(patient.causeOfDeath[cause]);
                }

                /*for (var i = 0; i < socialAccounts.length; i++) {
                 var currentAccount = socialAccounts[i];
                 }*/
            }
            else{

            }
        }



    });


};

var getSurgery = function(cancerColl, callback){

    cervicalCancer.find({}, function(err, patient){

        if(err){
            throw new Error('Database error: '+ err);
            return callback(err);
        }


        if(patient){
            var tumourSizeLess = patient.tumor.tumorSize.lessThan4;//boolean
            var tumourSizeGreat = patient.tumor.tumorSize.greaterThan4;//boolean
            var tumourSizeUnk = patient.tumor.tumorSize.Unknown;//boolean

            var patientDead = patient.lastKnownVitalStatus.Dead;

            //check if form is completed
            if(patient.isNotCompeleted == false){
                if(patient.lastKnownVitalStatus.Dead == true){
                    //skip patients details, just count
                    //of n patients, x% are dead
                    //also check cause of death

                    for(var cause = 0; cause < patient.causeOfDeath.length; cause++){
                        console.log(patient.causeOfDeath[cause]);
                    }

                    /*for (var i = 0; i < socialAccounts.length; i++) {
                     var currentAccount = socialAccounts[i];
                     }*/
                }
                else{

                }
            }
        }
        else{
            return callback(null);
        }




    });

};

var getNumRelasped  = function(cancerColl, callback){

};

var getNumDead = function(){

};

/**
 * @function queryDataYear
 * Gets selected year from UI and queries data as such
 * Data will be queried from date of diagnosis
 * @param cancerColl
 * @param year
 * @param callback
 * @returns
 */
var queryDataYear = function(cancerColl, year, callback){
    var dataYear = null;

    cervicalCancer.find({}, function(err, patient){

        if(err){
            throw new Error('Database error: '+ err);
            return callback(err);
        }


        if(patient){

            var year = new Date(patient.DateOfDiagnosis).getFullYear();


            if(patient.DateOfDiagnosis)

            return callback(dataYear);
        }
        else{
            return callback(null);
        }




    });



};

/**
 * @function concatArrayDataAll
 * @param patientID
 * @param callback
 * @returns {graphArr}
 */
var concatArrayDataIndiv = function(patientID, callback){
    //will get cancer collection type from UI
    //will use async module to call all functions in here
    //returns array from concatenation of returned values
    // from each function
    var graphArr = null;

    return graphArr;//concatenation of values for graph data
};

/**
 * @function concatArrayDataAll
 * @param patientID
 * @param callback
 * @returns {graphArr}
 */
var concatArrayDataAll = function(patientID, callback){
    //will get cancer collection type from UI
    //will use async module to call all functions in here
    //returns array from concatenation of returned values
    // from each function

    var graphArr = null;

    return graphArr;
};


module.exports = {
    getCervicalSurvival: getCervicalSurvival,
    getCervicalStageOne: getCervicalStageOne
};
