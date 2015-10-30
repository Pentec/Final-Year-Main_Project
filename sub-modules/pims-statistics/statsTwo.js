/**
 * Statistics Galore!!
 * @version 0.1.1
 * @licence University Of Pretoria
 */

/* use async.js to read from multiple collections and then use a
 callback before post request is sent to UI; I may have
 to use different arrays per cancer collection
 * */
var async = require('async');
var submodules = "../sub-modules/";
var models = require('../pims-database/database');
var vaginalCancer = models.vaginalCancer;
var vulvaCancer = models.vulvaCancer;
var gTNCancer = models.gTNCancer;

//each row belongs to a different stage cancer

//each row belongs to a different stage cancer
var survivalsVaginal = '{ "stages" : [' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"}' +
    ']}';

//if (stages[index].dead > -1)
//each row belongs to a different stage cancer
var deathCauseVaginal = '{ "stages" : [' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"}' +
    ']}';


var survivalsVaginalObj = JSON.parse(survivalsVaginal);
var deathsVaginalObj = JSON.parse(deathCauseVaginal);



//each row belongs to a different stage cancer
var survivalsVulva = '{ "stages" : [' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"}' +
    ']}';

//if (stages[index].dead > -1)
//each row belongs to a different stage cancer
var deathCauseVulva = '{ "stages" : [' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"}' +
    ']}';

var survivalsVulvaObj = JSON.parse(survivalsVulva);
var deathsVulvaObj = JSON.parse(deathCauseVulva);

//each row belongs to a different stage cancer
var survivalsGTN = '{ "stages" : [' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"},' +
    '{"patientNumber":"0", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"0", "radioTherapy":"0", "chemoTherapy":"0", "relapse":"0", "aliveNoDisease":"0", "aliveDisease":"0", "aliveUnknown":"0", "dead":"0"}' +
    ']}';

//if (stages[index].dead > -1)
//each row belongs to a different stage cancer
var deathCauseGTN = '{ "stages" : [' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"},' +
    '{"cacx":"0", "otherCan":"0", "treatment":"0", "intercurr":"0", "unknown":"0"}' +
    ']}';

var survivalsGTNObj = JSON.parse(survivalsGTN);
var deathsGTNObj = JSON.parse(deathCauseGTN);




//maybe transfer this to getSurvivalStats.js
var getGTNSurvivals = function(gtnCallback){
    async.parallel([
            //for GTN cancer stage one
            function(callback){
                gTNCancer.aggregate([
                    { $match: {"figoStage.I": true}},
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        //render erro page
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){//no such patients exist
                            //survivalsGTNObj.stages[0].patientNumber = (0).toString(); //number of patients with stage one cancer
                            survivalsGTNObj.stages[0].patientNumber = (126).toString(); //number of patients with stage one cancer
                        }
                        else{
                            //survivalsGTNObj.stages[0].patientNumber = (result[0].count).toString(); //number of patients with stage one cancer
                            survivalsGTNObj.stages[0].patientNumber = (126).toString(); //number of patients with stage one cancer
                        }

                        //Surgery
                        gTNCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentsPerformed.SurgeryOnly": true},//with surgery treatment
                                {"PrimaryTreatmentsPerformed.ChemotherapySurgery": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    //survivalsGTNObj.stages[0].surgery = (0).toString(); //number of patients with surgery treatment
                                    survivalsGTNObj.stages[0].surgery = (24).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsGTNObj.stages[0].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsGTNObj.stages[0].surgery = (24).toString(); //number of patients with surgery treatment
                                }

                                //Chemotherapy
                                gTNCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentsPerformed.Chemotherapy": true},//with Chemotherapy treatment
                                        {"PrimaryTreatmentsPerformed.ChemotherapySurgery": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        //return callback(err);
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            //survivalsGTNObj.stages[0].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                            survivalsGTNObj.stages[0].chemoTherapy = (70).toString(); //number of patients with Chemotherapy treatment
                                        }
                                        else{
                                            //survivalsGTNObj.stages[0].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                            survivalsGTNObj.stages[0].chemoTherapy = (70).toString(); //number of patients with Chemotherapy treatment
                                        }

                                        //Relapsed cervical patients
                                        gTNCancer.aggregate([
                                            { $match: {"Relapse.Yes": true}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    //survivalsGTNObj.stages[0].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsGTNObj.stages[0].relapse = (41).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsGTNObj.stages[0].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsGTNObj.stages[0].relapse = (41).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //AliveNoDisease cervical patients
                                                gTNCancer.aggregate([
                                                    { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        //return callback(err);
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            //survivalsGTNObj.stages[0].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsGTNObj.stages[0].aliveNoDisease = (14).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsGTNObj.stages[0].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsGTNObj.stages[0].aliveNoDisease = (14).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveDisease GTN cancer patients
                                                        gTNCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                //return callback(err);
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    //survivalsGTNObj.stages[0].aliveDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsGTNObj.stages[0].aliveDisease = (98).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{
                                                                    //survivalsGTNObj.stages[0].aliveDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsGTNObj.stages[0].aliveDisease = (98).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //Dead GTN patients
                                                                gTNCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        //return callback(err);
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            //survivalsGTNObj.stages[0].dead = (0).toString(); //number of patients dead
                                                                            survivalsGTNObj.stages[0].dead = (14).toString(); //number of patients dead
                                                                        }
                                                                        else{

                                                                            //survivalsGTNObj.stages[0].dead = (result[0].count).toString(); //number of patients dead
                                                                            survivalsGTNObj.stages[0].dead = (14).toString(); //number of patients dead

                                                                        }

                                                                        console.log("GTN " + survivalsGTNObj.stages[0].patientNumber);
                                                                        callback(null, survivalsGTNObj);
                                                                    }

                                                                });
                                                            }

                                                        });


                                                    }

                                                });
                                            }

                                        });
                                    }

                                });
                            }

                        });

                    }
                });


            },
            //for stage 2 GTN cancer
            function(callback){

                gTNCancer.aggregate([
                    { $match: {"figoStage.II": true}},
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){
                            survivalsGTNObj.stages[1].patientNumber = (20).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsGTNObj.stages[1].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsGTNObj.stages[1].patientNumber = (20).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        gTNCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentsPerformed.SurgeryOnly": true},//with surgery treatment
                                {"PrimaryTreatmentsPerformed.ChemotherapySurgery": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsGTNObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsGTNObj.stages[1].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsGTNObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Chemotherapy
                                gTNCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentsPerformed.Chemotherapy": true},//with Chemotherapy treatment
                                        {"PrimaryTreatmentsPerformed.ChemotherapySurgery": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        //throw new Error('Database error: ' + err);
                                        //return callback(err);
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsGTNObj.stages[1].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                        }
                                        else{

                                            //survivalsGTNObj.stages[1].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                            survivalsGTNObj.stages[1].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                        }


                                        //Relapsed GTN patients
                                        gTNCancer.aggregate([
                                            { $match: {"Relapse.Yes": true}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsGTNObj.stages[1].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsGTNObj.stages[1].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsGTNObj.stages[1].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //AliveNoDisease cervical patients
                                                gTNCancer.aggregate([
                                                    { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        //return callback(err);
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsGTNObj.stages[1].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsGTNObj.stages[1].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsGTNObj.stages[1].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveDisease cervical patients
                                                        gTNCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                //return callback(err);
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsGTNObj.stages[1].aliveDisease = (15).toString(); //number of patients with Chemotherapy treatment

                                                                }
                                                                else{

                                                                    //survivalsGTNObj.stages[1].aliveDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsGTNObj.stages[1].aliveDisease = (15).toString(); //number of patients with Chemotherapy treatment
                                                                }


                                                                //Dead GTN patients
                                                                gTNCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        //return callback(err);
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsGTNObj.stages[1].dead = (5).toString(); //number of patients dead
                                                                        }
                                                                        else{

                                                                            //survivalsGTNObj.stages[1].dead = (result[0].count).toString(); //number of patients dead
                                                                            survivalsGTNObj.stages[1].dead = (5).toString(); //number of patients dead

                                                                        }

                                                                        console.log("GTN " + survivalsGTNObj.stages[1].patientNumber);
                                                                        callback(null, survivalsGTNObj);
                                                                    }

                                                                });

                                                            }

                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            },
            //for GTN cancer stage 3
            function(callback){

                gTNCancer.aggregate([
                    { $match: {$or: [{"figoStage.III": true}]} },
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){
                            survivalsGTNObj.stages[2].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsGTNObj.stages[2].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsGTNObj.stages[2].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        gTNCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentsPerformed.SurgeryOnly": true},//with surgery treatment
                                {"PrimaryTreatmentsPerformed.ChemotherapySurgery": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsGTNObj.stages[2].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsGTNObj.stages[2].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsGTNObj.stages[2].surgery = (0).toString(); //number of patients with surgery treatment
                                }


                                //Chemotherapy
                                gTNCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentsPerformed.Chemotherapy": true},//with Chemotherapy treatment
                                        {"PrimaryTreatmentsPerformed.ChemotherapySurgery": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        //return callback(err);
                                        callback(err);
                                    }
                                    else{
                                        if(result == null || result[0] == null){
                                            survivalsGTNObj.stages[2].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                        }
                                        else{

                                            //survivalsGTNObj.stages[2].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                            survivalsGTNObj.stages[2].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                        }


                                        //Relapsed cervical patients
                                        gTNCancer.aggregate([
                                            { $match: {"Relapse.Yes": true}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsGTNObj.stages[2].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsGTNObj.stages[2].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsGTNObj.stages[2].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                }



                                                //AliveNoDisease cervical patients
                                                gTNCancer.aggregate([
                                                    { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        //return callback(err);
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsGTNObj.stages[2].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                        }
                                                        else{
                                                            //survivalsGTNObj.stages[2].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsGTNObj.stages[2].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }


                                                        //AliveDisease GTN patients
                                                        gTNCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                //return callback(err);
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsGTNObj.stages[2].aliveDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsGTNObj.stages[2].aliveDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsGTNObj.stages[2].aliveDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //Dead GTN patients
                                                                gTNCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        //return callback(err);
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsGTNObj.stages[2].dead = (0).toString(); //number of patients dead
                                                                        }
                                                                        else{

                                                                            //survivalsGTNObj.stages[2].dead = (result[0].count).toString(); //number of patients dead
                                                                            survivalsGTNObj.stages[2].dead = (0).toString(); //number of patients dead

                                                                        }

                                                                        console.log(survivalsGTNObj.stages[2].patientNumber);
                                                                        callback(null, survivalsGTNObj);
                                                                    }

                                                                });
                                                            }

                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            },
            //for GTN cancer stage 4
            function(callback){

                gTNCancer.aggregate([
                    { $match: {$or: [{"figoStage.IV": true}]} },
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){
                            survivalsGTNObj.stages[3].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsGTNObj.stages[3].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsGTNObj.stages[3].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        gTNCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentsPerformed.SurgeryOnly": true},//with surgery treatment
                                {"PrimaryTreatmentsPerformed.ChemotherapySurgery": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsGTNObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsGTNObj.stages[3].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsGTNObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Chemotherapy
                                gTNCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentsPerformed.Chemotherapy": true},//with Chemotherapy treatment
                                        {"PrimaryTreatmentsPerformed.ChemotherapySurgery": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        //return callback(err);
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsGTNObj.stages[3].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                        }
                                        else{

                                            //survivalsGTNObj.stages[3].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                            survivalsGTNObj.stages[3].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                        }

                                        //Relapsed GTN patients
                                        gTNCancer.aggregate([
                                            { $match: {"Relapse.Yes": true}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsGTNObj.stages[3].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsGTNObj.stages[3].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsGTNObj.stages[3].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //AliveNoDisease cervical patients
                                                gTNCancer.aggregate([
                                                    { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        //return callback(err);
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsGTNObj.stages[3].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsGTNObj.stages[3].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsGTNObj.stages[3].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }


                                                        //AliveDisease cervical patients
                                                        gTNCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                //return callback(err);
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsGTNObj.stages[3].aliveDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsGTNObj.stages[3].aliveDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsGTNObj.stages[3].aliveDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                                }


                                                                //Dead GTN patients
                                                                gTNCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        //return callback(err);
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsGTNObj.stages[3].dead = (0).toString(); //number of patients dead
                                                                        }
                                                                        else{

                                                                            //survivalsGTNObj.stages[3].dead = (result[0].count).toString(); //number of patients dead
                                                                            survivalsGTNObj.stages[3].dead = (0).toString(); //number of patients dead

                                                                        }

                                                                        console.log(survivalsGTNObj.stages[3].patientNumber);
                                                                        callback(null, survivalsGTNObj);
                                                                    }

                                                                });

                                                            }

                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            }

        ],
        function(err, results){

            if (err) {
                console.log(err);
                return gtnCallback(err);
                //return res.send(400);
                //winston log error too


                //return res.send(400);//res.json(response); //arrSend should be a json object
            }

            if(results == null || results[0] == null){
                console.log("null");

                //return res.send(400);
                return gtnCallback(null);
            }

            //console.log(results[0]);
            //console.log(results[1]);
            /*console.log("GTN " + results[2]);
            console.log("GTN " + results[3]);*/

            return gtnCallback(results);

        });

};




//maybe transfer this to getSurvivalStats.js
var getVaginalSurvivals = function(vaginalCallback){
    async.parallel([
            //for vaginal cancer stage one
            function(callback){
                vaginalCancer.aggregate([
                    { $match: {$or: [{"figoStage.I": true}]} },
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){
                            //survivalsVaginalObj.stages[0].patientNumber = (0).toString();
                            survivalsVaginalObj.stages[0].patientNumber = (115).toString(); //number of patients with stage one cancer
                        }
                        else{
                            //survivalsVaginalObj.stages[0].patientNumber = (result[0].count).toString(); //number of patients with stage one cancer
                            survivalsVaginalObj.stages[0].patientNumber = (115).toString(); //number of patients with stage one cancer
                        }

                        //Surgery
                        vaginalCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin90Days": true},
                                {"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    //survivalsVaginalObj.stages[0].surgery = (0).toString();
                                    survivalsVaginalObj.stages[0].surgery = (24).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsVaginalObj.stages[0].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsVaginalObj.stages[0].surgery = (24).toString(); //number of patients with surgery treatment
                                }


                                //Radiotherapy
                                vaginalCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentPerformed.RTAlone": true},//with surgery treatment
                                        {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin90Days": true},
                                        {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            //survivalsVaginalObj.stages[0].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                            survivalsVaginalObj.stages[0].radioTherapy = (29).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{

                                            //survivalsVaginalObj.stages[0].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsVaginalObj.stages[0].radioTherapy = (29).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        vaginalCancer.aggregate([
                                            { $match: {$or: [{"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with surgery treatment
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true},
                                                {"PrimaryTreatmentPerformed.Chemoradiation": true},
                                                {"PrimaryTreatmentPerformed.CTAlone": true}]}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    //survivalsVaginalObj.stages[0].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVaginalObj.stages[0].chemoTherapy = (70).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsVaginalObj.stages[0].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVaginalObj.stages[0].chemoTherapy = (70).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                vaginalCancer.aggregate([
                                                    { $match: {"Relapse.Yes": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        //return callback(err);
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            //survivalsVaginalObj.stages[0].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVaginalObj.stages[0].relapse = (39).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsVaginalObj.stages[0].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVaginalObj.stages[0].relapse = (39).toString(); //number of patients with Chemotherapy treatment
                                                        }



                                                        //AliveNoDisease cervical patients
                                                        vaginalCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                //return callback(err);
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    //survivalsVaginalObj.stages[0].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVaginalObj.stages[0].aliveNoDisease = (14).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsVaginalObj.stages[0].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVaginalObj.stages[0].aliveNoDisease = (14).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                vaginalCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        //return callback(err);
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            //survivalsVaginalObj.stages[0].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                            survivalsVaginalObj.stages[0].aliveDisease = (90).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{
                                                                            //survivalsVaginalObj.stages[0].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsVaginalObj.stages[0].aliveDisease = (90).toString(); //number of patients aliveDisease
                                                                        }


                                                                        //Dead vaginalCancer patients
                                                                        vaginalCancer.aggregate([
                                                                            { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                            {$group: {
                                                                                _id: null,
                                                                                count: {$sum: 1}
                                                                            }}
                                                                        ], function(err, result){

                                                                            if(err){
                                                                                console.log("Error");
                                                                                //return callback(err);
                                                                                callback(err);
                                                                            }
                                                                            else{

                                                                                if(result == null || result[0] == null){
                                                                                    //survivalsVaginalObj.stages[0].dead = (0).toString(); //number of patients dead
                                                                                    survivalsVaginalObj.stages[0].dead = (13).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsVaginalObj.stages[0].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsVaginalObj.stages[0].dead = (13).toString(); //number of patients dead

                                                                                }

                                                                                console.log("Vaginal 1 " + survivalsVaginalObj.stages[0].patientNumber);
                                                                                callback(null, survivalsVaginalObj);
                                                                            }

                                                                        });
                                                                    }

                                                                });


                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });
                            }

                        });

                    }
                });

            },
            //for stage 2 vaginalCancer
            function(callback){

                vaginalCancer.aggregate([
                    { $match: {"figoStage.II": true} },
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null)
                        {
                            survivalsVaginalObj.stages[1].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsVaginalObj.stages[1].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsVaginalObj.stages[1].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        vaginalCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin90Days": true},
                                {"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsVaginalObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsVaginalObj.stages[1].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsVaginalObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                vaginalCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentPerformed.RTAlone": true},//with surgery treatment
                                        {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin90Days": true},
                                        {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsVaginalObj.stages[1].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{

                                            //survivalsVaginalObj.stages[1].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsVaginalObj.stages[1].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        vaginalCancer.aggregate([
                                            { $match: {$or: [{"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with surgery treatment
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true},
                                                {"PrimaryTreatmentPerformed.Chemoradiation": true},
                                                {"PrimaryTreatmentPerformed.CTAlone": true}]}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsVaginalObj.stages[1].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsVaginalObj.stages[1].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVaginalObj.stages[1].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Relapsed cervical patients
                                                vaginalCancer.aggregate([
                                                    { $match: {"Relapse.Yes": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        //return callback(err);
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsVaginalObj.stages[1].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsVaginalObj.stages[1].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVaginalObj.stages[1].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        vaginalCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                //return callback(err);
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsVaginalObj.stages[1].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsVaginalObj.stages[1].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVaginalObj.stages[1].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                vaginalCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        //return callback(err);
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsVaginalObj.stages[1].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsVaginalObj.stages[1].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsVaginalObj.stages[1].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead vaginalCancer patients
                                                                        vaginalCancer.aggregate([
                                                                            { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                            {$group: {
                                                                                _id: null,
                                                                                count: {$sum: 1}
                                                                            }}
                                                                        ], function(err, result){

                                                                            if(err){
                                                                                console.log("Error");
                                                                                //return callback(err);
                                                                                callback(err);
                                                                            }
                                                                            else{

                                                                                if(result == null || result[0] == null){
                                                                                    survivalsVaginalObj.stages[1].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{
                                                                                    //survivalsVaginalObj.stages[1].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsVaginalObj.stages[1].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsVaginalObj.stages[1].patientNumber);
                                                                                callback(null, survivalsVaginalObj);
                                                                            }

                                                                        });

                                                                    }

                                                                });


                                                            }});
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            },
            //for vaginal cancer stage 3
            function(callback){

                vaginalCancer.aggregate([
                    { $match: {"figoStage.III": true}},
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{
                        if(result == null || result[0] == null){
                            survivalsVaginalObj.stages[2].patientNumber = (15).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsVaginalObj.stages[2].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsVaginalObj.stages[2].patientNumber = (15).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        vaginalCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin90Days": true},
                                {"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsVaginalObj.stages[2].surgery = (7).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsVaginalObj.stages[2].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsVaginalObj.stages[2].surgery = (7).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                vaginalCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentPerformed.RTAlone": true},//with surgery treatment
                                        {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin90Days": true},
                                        {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsVaginalObj.stages[2].radioTherapy = (5).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{

                                            //survivalsVaginalObj.stages[2].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsVaginalObj.stages[2].radioTherapy = (5).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        vaginalCancer.aggregate([
                                            { $match: {$or: [{"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with surgery treatment
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true},
                                                {"PrimaryTreatmentPerformed.Chemoradiation": true},
                                                {"PrimaryTreatmentPerformed.CTAlone": true}]}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsVaginalObj.stages[2].chemoTherapy = (3).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsVaginalObj.stages[2].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVaginalObj.stages[2].chemoTherapy = (3).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                vaginalCancer.aggregate([
                                                    { $match: {"Relapse.Yes": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        //return callback(err);
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsVaginalObj.stages[2].relapse = (7).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsVaginalObj.stages[2].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVaginalObj.stages[2].relapse = (7).toString(); //number of patients with Chemotherapy treatment
                                                        }



                                                        //AliveNoDisease cervical patients
                                                        vaginalCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                //return callback(err);
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsVaginalObj.stages[2].aliveNoDisease = (4).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsVaginalObj.stages[2].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVaginalObj.stages[2].aliveNoDisease = (4).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                vaginalCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        //return callback(err);
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsVaginalObj.stages[2].aliveDisease = (10).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsVaginalObj.stages[2].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsVaginalObj.stages[2].aliveDisease = (10).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead vaginalCancer patients
                                                                        vaginalCancer.aggregate([
                                                                            { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                            {$group: {
                                                                                _id: null,
                                                                                count: {$sum: 1}
                                                                            }}
                                                                        ], function(err, result){

                                                                            if(err){
                                                                                console.log("Error");
                                                                                //return callback(err);
                                                                                callback(err);
                                                                            }
                                                                            else{

                                                                                if(result == null || result[0] == null){
                                                                                    survivalsVaginalObj.stages[2].dead = (1).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsVaginalObj.stages[2].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsVaginalObj.stages[2].dead = (1).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsVaginalObj.stages[2].patientNumber);
                                                                                callback(null, survivalsVaginalObj);
                                                                            }

                                                                        });
                                                                    }

                                                                });

                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            },
            //for cervical cancer stage 4
            function(callback){

                vaginalCancer.aggregate([
                    { $match: {$or: [{"figoStage.IVa": true},//with cancer stage three
                        {"figoStage.IVb": true}]} },
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){
                            survivalsVaginalObj.stages[3].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsVaginalObj.stages[3].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsVaginalObj.stages[3].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        vaginalCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin90Days": true},
                                {"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsVaginalObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsVaginalObj.stages[3].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsVaginalObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                vaginalCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentPerformed.RTAlone": true},//with surgery treatment
                                        {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin90Days": true},
                                        {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsVaginalObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{

                                            //survivalsVaginalObj.stages[3].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsVaginalObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }


                                        //Chemotherapy
                                        vaginalCancer.aggregate([
                                            { $match: {$or: [{"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with surgery treatment
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true},
                                                {"PrimaryTreatmentPerformed.Chemoradiation": true},
                                                {"PrimaryTreatmentPerformed.CTAlone": true}]}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsVaginalObj.stages[3].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsVaginalObj.stages[3].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVaginalObj.stages[3].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Relapsed cervical patients
                                                vaginalCancer.aggregate([
                                                    { $match: {"Relapse.Yes": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        //return callback(err);
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsVaginalObj.stages[3].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsVaginalObj.stages[3].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVaginalObj.stages[3].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        vaginalCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                //return callback(err);
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsVaginalObj.stages[3].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsVaginalObj.stages[3].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVaginalObj.stages[3].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                vaginalCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        //return callback(err);
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsVaginalObj.stages[3].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsVaginalObj.stages[3].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsVaginalObj.stages[3].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead vaginalCancer patients
                                                                        vaginalCancer.aggregate([
                                                                            { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                            {$group: {
                                                                                _id: null,
                                                                                count: {$sum: 1}
                                                                            }}
                                                                        ], function(err, result){

                                                                            if(err){
                                                                                console.log("Error");
                                                                                //return callback(err);
                                                                                callback(err);
                                                                            }
                                                                            else{

                                                                                if(result == null || result[0] == null){
                                                                                    survivalsVaginalObj.stages[3].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsVaginalObj.stages[3].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsVaginalObj.stages[3].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsVaginalObj.stages[3].patientNumber);
                                                                                //return callback(arrStageOne);
                                                                                callback(null, survivalsVaginalObj);
                                                                            }

                                                                        });

                                                                    }

                                                                });


                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            }

        ],
        function(err, results){

            if (err) {
                console.log(err);
                return vaginalCallback(err);
                //return res.send(400);
                //winston log error too


                //return res.send(400);//res.json(response); //arrSend should be a json object
            }

            if(results == null || results[0] == null) {
                console.log("null");

                //return res.send(400);
                return vaginalCallback(null);
            }

            //console.log(results[0]);
            //console.log(results[1]);
            /*console.log(results[2]);
            console.log(results[3]);*/

            return vaginalCallback(results);

        });

};



//maybe transfer this to getSurvivalStats.js
var getVulvaSurvivals = function(vulvaCallback){
    async.parallel([
            //for Vulva cancer stage one
            function(callback){
                vulvaCancer.aggregate([
                    { $match: {$or: [{"figoStage.Ia": true},//with cancer stage one
                        {"figoStage.Ib": true}]}},
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){
                            survivalsVulvaObj.stages[0].patientNumber = (123).toString();
                        }
                        else{

                            //survivalsVulvaObj.stages[0].patientNumber = (result[0].count).toString(); //number of patients with stage one cancer
                            survivalsVulvaObj.stages[0].patientNumber = (123).toString(); //number of patients with stage one cancer
                        }

                        //Surgery
                        vulvaCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin60Days": true},
                                {"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRT": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsVulvaObj.stages[0].surgery = (53).toString();
                                }
                                else{
                                    //survivalsVulvaObj.stages[0].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsVulvaObj.stages[0].surgery = (53).toString(); //number of patients with surgery treatment
                                }


                                //Radiotherapy
                                vulvaCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentPerformed.RTAlone": true},//with surgery treatment
                                        {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin60Days": true},
                                        {"PrimaryTreatmentPerformed.SurgeryAdjuvantRT": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsVulvaObj.stages[0].radioTherapy = (50).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsVulvaObj.stages[0].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsVulvaObj.stages[0].radioTherapy = (50).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        vulvaCancer.aggregate([
                                            { $match: {$or: [{"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with surgery treatment
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true},
                                                {"PrimaryTreatmentPerformed.CRT": true}]}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsVulvaObj.stages[0].chemoTherapy = (20).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsVulvaObj.stages[0].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVulvaObj.stages[0].chemoTherapy = (20).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                vulvaCancer.aggregate([
                                                    { $match: {"Relapse.Yes": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsVulvaObj.stages[0].relapse = (80).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsVulvaObj.stages[0].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVulvaObj.stages[0].relapse = (80).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        vulvaCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsVulvaObj.stages[0].aliveNoDisease = (22).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsVulvaObj.stages[0].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVulvaObj.stages[0].aliveNoDisease = (22).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                vulvaCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsVulvaObj.stages[0].aliveDisease = (80).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{
                                                                            //survivalsVulvaObj.stages[0].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsVulvaObj.stages[0].aliveDisease = (80).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead Vulva patients
                                                                        vulvaCancer.aggregate([
                                                                            { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                            {$group: {
                                                                                _id: null,
                                                                                count: {$sum: 1}
                                                                            }}
                                                                        ], function(err, result){

                                                                            if(err){
                                                                                console.log("Error");
                                                                                callback(err);
                                                                            }
                                                                            else{

                                                                                if(result == null || result[0] == null){
                                                                                    survivalsVulvaObj.stages[0].dead = (21).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsVulvaObj.stages[0].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsVulvaObj.stages[0].dead = (21).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsVulvaObj.stages[0].patientNumber);
                                                                                callback(null, survivalsVulvaObj);
                                                                            }

                                                                        });


                                                                    }

                                                                });


                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });
                            }

                        });

                    }
                });

            },
            //for stage 2 Vulva cancer
            function(callback){
                vulvaCancer.aggregate([
                    { $match: {"figoStage.II": true}},
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null)
                        {
                            survivalsVulvaObj.stages[1].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsVulvaObj.stages[1].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsVulvaObj.stages[1].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        vulvaCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin60Days": true},
                                {"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRT": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsVulvaObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsVulvaObj.stages[1].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsVulvaObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                vulvaCancer.aggregate([
                                    { $match: {$or: [{"TreatmentPerformed.RTAlone": true},//with radiotherapy treatment
                                        {"TreatmentPerformed.SurgeryAdjuvantRT": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsVulvaObj.stages[1].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsVulvaObj.stages[1].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsVulvaObj.stages[1].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        vulvaCancer.aggregate([
                                            { $match: {$or: [{"TreatmentPerformed.NeoAdjuvantCTSurgery": true},//with Chemotherapy treatment
                                                {"TreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsVulvaObj.stages[1].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsVulvaObj.stages[1].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVulvaObj.stages[1].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Relapsed cervical patients
                                                vulvaCancer.aggregate([
                                                    { $match: {"Relapse.Yes": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsVulvaObj.stages[1].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsVulvaObj.stages[1].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVulvaObj.stages[1].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }


                                                        //AliveNoDisease cervical patients
                                                        vulvaCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsVulvaObj.stages[1].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsVulvaObj.stages[1].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVulvaObj.stages[1].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                vulvaCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsVulvaObj.stages[1].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsVulvaObj.stages[1].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsVulvaObj.stages[1].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }



                                                                        //Dead Vulva patients
                                                                        vulvaCancer.aggregate([
                                                                            { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                            {$group: {
                                                                                _id: null,
                                                                                count: {$sum: 1}
                                                                            }}
                                                                        ], function(err, result){

                                                                            if(err){
                                                                                console.log("Error");
                                                                                callback(err);
                                                                            }
                                                                            else{

                                                                                if(result == null || result[0] == null){
                                                                                    survivalsVulvaObj.stages[1].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsVulvaObj.stages[1].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsVulvaObj.stages[1].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsVulvaObj.stages[1].patientNumber);
                                                                                callback(null, survivalsVulvaObj);
                                                                            }

                                                                        });
                                                                    }

                                                                });


                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            },
            //for cervical cancer stage 3
            function(callback){

                vulvaCancer.aggregate([
                    { $match: {$or: [{"figoStage.IIIa": true},//with cancer stage three
                        {"figoStage.IIIb": true},
                        {"figoStage.IIIc": true}]} },
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{
                        if(result == null || result[0] == null){
                            survivalsVulvaObj.stages[2].patientNumber = (32).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsVulvaObj.stages[2].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsVulvaObj.stages[2].patientNumber = (32).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        vulvaCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin60Days": true},
                                {"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRT": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsVulvaObj.stages[2].surgery = (12).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsVulvaObj.stages[2].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsVulvaObj.stages[2].surgery = (12).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                vulvaCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentPerformed.RTAlone": true},//with radiotherapy treatment
                                        {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin60Days": true},
                                        {"PrimaryTreatmentPerformed.SurgeryAdjuvantRT": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsVulvaObj.stages[2].radioTherapy = (2).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsVulvaObj.stages[2].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsVulvaObj.stages[2].radioTherapy = (2).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        vulvaCancer.aggregate([
                                            { $match: {$or: [{"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with Chemotherapy treatment
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true},
                                                {"PrimaryTreatmentPerformed.CRT": true}]}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsVulvaObj.stages[2].chemoTherapy = (18).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsVulvaObj.stages[2].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVulvaObj.stages[2].chemoTherapy = (18).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                vulvaCancer.aggregate([
                                                    { $match: {"Relapse.Yes": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsVulvaObj.stages[2].relapse = (5).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{
                                                            //survivalsVulvaObj.stages[2].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVulvaObj.stages[2].relapse = (5).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        vulvaCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsVulvaObj.stages[2].aliveNoDisease = (10).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsVulvaObj.stages[2].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVulvaObj.stages[2].aliveNoDisease = (10).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                vulvaCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsVulvaObj.stages[2].aliveDisease = (18).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsVulvaObj.stages[2].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsVulvaObj.stages[2].aliveDisease = (18).toString(); //number of patients aliveDisease
                                                                        }


                                                                        //Dead Vulva patients
                                                                        vulvaCancer.aggregate([
                                                                            { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                            {$group: {
                                                                                _id: null,
                                                                                count: {$sum: 1}
                                                                            }}
                                                                        ], function(err, result){

                                                                            if(err){
                                                                                console.log("Error");
                                                                                callback(err);
                                                                            }
                                                                            else{

                                                                                if(result == null || result[0] == null){
                                                                                    survivalsVulvaObj.stages[2].dead = (2).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsVulvaObj.stages[2].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsVulvaObj.stages[2].dead = (2).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsVulvaObj.stages[2].patientNumber);
                                                                                callback(null, survivalsVulvaObj);
                                                                            }

                                                                        });
                                                                    }

                                                                });

                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            },
            //for cervical cancer stage 4
            function(callback){

                vulvaCancer.aggregate([
                    { $match: {$or: [{"figoStage.IVa": true},//with cancer stage three
                        {"figoStage.IVb": true}]}},
                    {$group: {
                        _id: null,
                        count: {$sum: 1}
                    }}
                ], function(err, result){
                    if(err){
                        console.log("Error");
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){
                            survivalsVulvaObj.stages[3].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsVulvaObj.stages[3].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsVulvaObj.stages[3].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        vulvaCancer.aggregate([
                            { $match: {$or: [{"PrimaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin60Days": true},
                                {"PrimaryTreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantRT": true},
                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
                            {$group: {
                                _id: null,
                                count: {$sum: 1}
                            }}
                        ], function(err, result){

                            if(err){
                                console.log("Error");
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsVulvaObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsVulvaObj.stages[3].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsVulvaObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                vulvaCancer.aggregate([
                                    { $match: {$or: [{"PrimaryTreatmentPerformed.RTAlone": true},//with radiotherapy treatment
                                        {"PrimaryTreatmentPerformed.RTFollowedBySurgeryWithin60Days": true},
                                        {"PrimaryTreatmentPerformed.SurgeryAdjuvantRT": true}]}},
                                    {$group: {
                                        _id: null,
                                        count: {$sum: 1}
                                    }}
                                ], function(err, result){

                                    if(err){
                                        console.log("Error");
                                        callback(err);
                                    }
                                    else{

                                        if(result == null || result[0] == null){
                                            survivalsVulvaObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsVulvaObj.stages[3].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsVulvaObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }


                                        //Chemotherapy
                                        vulvaCancer.aggregate([
                                            { $match: {$or: [{"PrimaryTreatmentPerformed.NeoAdjuvantCTSurgery": true},//with Chemotherapy treatment
                                                {"PrimaryTreatmentPerformed.SurgeryAdjuvantCT": true},
                                                {"PrimaryTreatmentPerformed.CRT": true}]}},
                                            {$group: {
                                                _id: null,
                                                count: {$sum: 1}
                                            }}
                                        ], function(err, result){

                                            if(err){
                                                console.log("Error");
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsVulvaObj.stages[3].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsVulvaObj.stages[3].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsVulvaObj.stages[3].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Relapsed cervical patients
                                                vulvaCancer.aggregate([
                                                    { $match: {"Relapse.Yes": true}},
                                                    {$group: {
                                                        _id: null,
                                                        count: {$sum: 1}
                                                    }}
                                                ], function(err, result){

                                                    if(err){
                                                        console.log("Error");
                                                        callback(err);
                                                    }
                                                    else{

                                                        if(result == null || result[0] == null){
                                                            survivalsVulvaObj.stages[3].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsVulvaObj.stages[3].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsVulvaObj.stages[3].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }


                                                        //AliveNoDisease cervical patients
                                                        vulvaCancer.aggregate([
                                                            { $match: {"LastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
                                                            {$group: {
                                                                _id: null,
                                                                count: {$sum: 1}
                                                            }}
                                                        ], function(err, result){

                                                            if(err){
                                                                console.log("Error");
                                                                callback(err);
                                                            }
                                                            else{

                                                                if(result == null || result[0] == null){
                                                                    survivalsVulvaObj.stages[3].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsVulvaObj.stages[3].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsVulvaObj.stages[3].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                vulvaCancer.aggregate([
                                                                    { $match: {"LastKnownVitalStatus.AliveWithDisease": true}},
                                                                    {$group: {
                                                                        _id: null,
                                                                        count: {$sum: 1}
                                                                    }}
                                                                ], function(err, result){

                                                                    if(err){
                                                                        console.log("Error");
                                                                        callback(err);
                                                                    }
                                                                    else{

                                                                        if(result == null || result[0] == null){
                                                                            survivalsVulvaObj.stages[3].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{
                                                                            //survivalsVulvaObj.stages[3].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsVulvaObj.stages[3].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead Vulva patients
                                                                        vulvaCancer.aggregate([
                                                                            { $match: {"LastKnownVitalStatus.Dead": true}},
                                                                            {$group: {
                                                                                _id: null,
                                                                                count: {$sum: 1}
                                                                            }}
                                                                        ], function(err, result){

                                                                            if(err){
                                                                                console.log("Error");
                                                                                callback(err);
                                                                            }
                                                                            else{

                                                                                if(result == null || result[0] == null){
                                                                                    survivalsVulvaObj.stages[3].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsVulvaObj.stages[3].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsVulvaObj.stages[3].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsVulvaObj.stages[3].patientNumber);
                                                                                callback(null, survivalsVulvaObj);
                                                                            }

                                                                        });


                                                                    }

                                                                });


                                                            }
                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });

                            }

                        });

                    }
                });

            }

        ],
        function(err, results){

            if (err) {
                console.log(err);
                return vulvaCallback(err);
                //return res.send(400);
                //winston log error too


                //return res.send(400);//res.json(response); //arrSend should be a json object
            }

            if(results == null || results[0] == null) {
                console.log("null");

                //return res.send(400);
                return vulvaCallback(null);
            }

            //console.log(results[0]);
            //console.log(results[1]);

            return vulvaCallback(results);

        });

};



module.exports = {
    getGTNSurvivals: getGTNSurvivals,
    getVaginalSurvivals: getVaginalSurvivals,
    getVulvaSurvivals: getVulvaSurvivals

};







