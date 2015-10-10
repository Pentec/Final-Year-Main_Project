/**
 * Statistics Galore!!
 * @version 0.1.1
 * @licence University Of Pretoria
 */

var submodules = "../sub-modules/";
var models = require(submodules + 'pims-database/database');
var cervicalCancer = models.cervicalCancer;


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


}

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

}

var getNumRelasped  = function(cancerColl, callback){

}

var getNumDead = function(){

}

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



}

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
}

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
}

//var tumourSize =  cervicalCancer.tumour
//var surgery =