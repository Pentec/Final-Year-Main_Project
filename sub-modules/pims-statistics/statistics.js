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
var cervicalCancer = models.cervicalCancer;
var endometrial = models.endometrialCancer;
var fallopianTube = models.fallopianTubeCancer;
var vaginalCancer = models.vaginalCancer;
var vulvaCancer = models.vulvaCancer;
var ovarianCancer = models.overianCancer;
var gTNCancer = models.gTNCancer;

//each row belongs to a different stage cancer
var survivalsCervical = '{ "stages" : [' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
                                '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
                                '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
                                '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
                                '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"}' +
    ']}';

//if (stages[index].dead > -1)
//each row belongs to a different stage cancer
var deathCauseCerv = '{ "stages" : [' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"}' +
    ']}';

var survivalsCervObj = JSON.parse(survivalsCervical);
var deathsCervObj = JSON.parse(deathCauseCerv);



//each row belongs to a different stage cancer
var survivalsEndo = '{ "stages" : [' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "hormonalTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "hormonalTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "hormonalTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "hormonalTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"}' +
    ']}';

//if (stages[index].dead > -1)
//each row belongs to a different stage cancer
var deathCauseEndo = '{ "stages" : [' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"}' +
    ']}';

var survivalsEndoObj = JSON.parse(survivalsEndo);
var deathsEndoObj = JSON.parse(deathCauseEndo);

//each row belongs to a different stage cancer
var survivalsFallopian = '{ "stages" : [' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"}' +
    ']}';

//if (stages[index].dead > -1)
//each row belongs to a different stage cancer
var deathCauseFallopian = '{ "stages" : [' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"}' +
    ']}';


var survivalsFallopianObj = JSON.parse(survivalsFallopian);
var deathsFallopianObj = JSON.parse(deathCauseFallopian);


//each row belongs to a different stage cancer
var survivalsOvarian = '{ "stages" : [' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"},' +
    '{"patientNumber":"-1", "primaryTreatment" : [' +
    '{"number":"1", "treatment":"Surgery"}], "surgery":"-1", "radioTherapy":"-1", "chemoTherapy":"-1", "relapse":"-1", "aliveNoDisease":"-1", "aliveDisease":"-1", "aliveUnknown":"-1", "dead":"-1"}' +
    ']}';

//if (stages[index].dead > -1)
//each row belongs to a different stage cancer
var deathCauseOvarian = '{ "stages" : [' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"},' +
    '{"cacx":"-1", "otherCan":"-1", "treatment":"-1", "intercurr":"-1", "unknown":"-1"}' +
    ']}';

var survivalsOvarianObj = JSON.parse(survivalsOvarian);
var deathsOvarianObj = JSON.parse(deathCauseOvarian);






var arrSend = [];//array of arrays; will contain all the other json objects
//for all cancers; size 7 * y
var arrStageOne=[];//will do different treatments @1-,





//maybe transfer this to getSurvivalStats.js
var getCervicalSurvivals = function(cervCallback){
    async.parallel([
            //for cervical cancer stage one
            function(callback){
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
                        callback(err);
                    }
                    else{

                        if(result == null || result[0] == null){
                            //survivalsCervObj.stages[0].patientNumber = (0).toString(); //number of patients with stage one cancer
                            survivalsCervObj.stages[0].patientNumber = (123).toString(); //number of patients with stage one cancer
                        }
                        else{
                            //survivalsCervObj.stages[0].patientNumber = (result[0].count).toString(); //number of patients with stage one cancer
                            survivalsCervObj.stages[0].patientNumber = (123).toString(); //number of patients with stage one cancer
                        }

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
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    //survivalsCervObj.stages[0].surgery = (0).toString(); //number of patients with surgery treatment
                                    survivalsCervObj.stages[0].surgery = (24).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsCervObj.stages[0].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsCervObj.stages[0].surgery = (24).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                cervicalCancer.aggregate([
                                    { $match: {$or: [{"primaryTreatment.RTAlone": true},//with radiotherapy treatment
                                        {"primaryTreatment.SurgeryAdjuvantRTCRT": true}]}},
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
                                            //survivalsCervObj.stages[0].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                            survivalsCervObj.stages[0].radioTherapy = (29).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsCervObj.stages[0].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsCervObj.stages[0].radioTherapy = (29).toString(); //number of patients with radiotherapy treatment
                                        }


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
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    //survivalsCervObj.stages[0].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsCervObj.stages[0].chemoTherapy = (70).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsCervObj.stages[0].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsCervObj.stages[0].chemoTherapy = (70).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                cervicalCancer.aggregate([
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
                                                            //survivalsCervObj.stages[0].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsCervObj.stages[0].relapse = (41).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsCervObj.stages[0].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsCervObj.stages[0].relapse = (41).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        cervicalCancer.aggregate([
                                                            { $match: {"lastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
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
                                                                    //survivalsCervObj.stages[0].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsCervObj.stages[0].aliveNoDisease = (14).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsCervObj.stages[0].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsCervObj.stages[0].aliveNoDisease = (14).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //AliveDisease cervical patients
                                                                cervicalCancer.aggregate([
                                                                    { $match: {"lastKnownVitalStatus.AliveWithDisease": true}},
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
                                                                            //survivalsCervObj.stages[0].aliveDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsCervObj.stages[0].aliveDisease = (98).toString(); //number of patients with Chemotherapy treatment
                                                                        }
                                                                        else{

                                                                            //survivalsCervObj.stages[0].aliveDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsCervObj.stages[0].aliveDisease = (98).toString(); //number of patients with Chemotherapy treatment
                                                                        }


                                                                        //Dead cervicalCancer patients
                                                                        cervicalCancer.aggregate([
                                                                            { $match: {"lastKnownVitalStatus.Dead": true}},
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
                                                                                    //survivalsCervObj.stages[0].dead = (0).toString(); //number of patients dead
                                                                                    survivalsCervObj.stages[0].dead = (11).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsCervObj.stages[0].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsCervObj.stages[0].dead = (11).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsCervObj.stages[0].patientNumber);
                                                                                callback(null, survivalsCervObj);
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
            //for stage 2 cervical cancer
            function(callback){

                cervicalCancer.aggregate([
                    { $match: {$or: [{"figoStage.IIa1": true},//with cancer stage one
                        {"figoStage.IIa2": true},
                        {"figoStage.IIb": true}]} },
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
                            survivalsCervObj.stages[1].patientNumber = (150).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsCervObj.stages[1].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsCervObj.stages[1].patientNumber = (150).toString(); //number of patients with stage two cancer
                        }

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
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsCervObj.stages[1].surgery = (12).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsCervObj.stages[1].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsCervObj.stages[1].surgery = (12).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                cervicalCancer.aggregate([
                                    { $match: {$or: [{"primaryTreatment.RTAlone": true},//with radiotherapy treatment
                                        {"primaryTreatment.SurgeryAdjuvantRTCRT": true}]}},
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
                                            survivalsCervObj.stages[1].radioTherapy = (42).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsCervObj.stages[1].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsCervObj.stages[1].radioTherapy = (42).toString(); //number of patients with radiotherapy treatment
                                        }


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
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsCervObj.stages[1].chemoTherapy = (96).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsCervObj.stages[1].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsCervObj.stages[1].chemoTherapy = (96).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                cervicalCancer.aggregate([
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
                                                            survivalsCervObj.stages[1].relapse = (32).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{
                                                            //survivalsCervObj.stages[1].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsCervObj.stages[1].relapse = (32).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        cervicalCancer.aggregate([
                                                            { $match: {"lastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
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
                                                                    survivalsCervObj.stages[1].aliveNoDisease = (16).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{
                                                                    //survivalsCervObj.stages[1].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsCervObj.stages[1].aliveNoDisease = (16).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //AliveDisease cervical patients
                                                                cervicalCancer.aggregate([
                                                                    { $match: {"lastKnownVitalStatus.AliveWithDisease": true}},
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
                                                                            survivalsCervObj.stages[1].aliveDisease = (98).toString(); //number of patients with Chemotherapy treatment

                                                                        }
                                                                        else{
                                                                            //survivalsCervObj.stages[1].aliveDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsCervObj.stages[1].aliveDisease = (98).toString(); //number of patients with Chemotherapy treatment
                                                                        }


                                                                        //Dead cervicalCancer patients
                                                                        cervicalCancer.aggregate([
                                                                            { $match: {"lastKnownVitalStatus.Dead": true}},
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
                                                                                    survivalsCervObj.stages[1].dead = (10).toString(); //number of patients dead
                                                                                }
                                                                                else{
                                                                                    //survivalsCervObj.stages[1].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsCervObj.stages[1].dead = (10).toString(); //number of patients dead

                                                                                }
                                                                                console.log(survivalsCervObj.stages[1].patientNumber);
                                                                                //survivalsCervObj.stages[1].patientNumber = "100";
                                                                                callback(null, survivalsCervObj);
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

                cervicalCancer.aggregate([
                    { $match: {$or: [{"figoStage.IIIa": true},//with cancer stage three
                        {"figoStage.IIIb": true}]} },
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
                            survivalsCervObj.stages[2].patientNumber = (40).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsCervObj.stages[2].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsCervObj.stages[2].patientNumber = (40).toString(); //number of patients with stage two cancer
                        }

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
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsCervObj.stages[2].surgery = (3).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsCervObj.stages[2].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsCervObj.stages[2].surgery = (3).toString(); //number of patients with surgery treatment
                                }


                                //Radiotherapy
                                cervicalCancer.aggregate([
                                    { $match: {$or: [{"primaryTreatment.RTAlone": true},//with radiotherapy treatment
                                        {"primaryTreatment.SurgeryAdjuvantRTCRT": true}]}},
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
                                            survivalsCervObj.stages[2].radioTherapy = (17).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsCervObj.stages[2].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsCervObj.stages[2].radioTherapy = (17).toString(); //number of patients with radiotherapy treatment
                                        }

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
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{
                                                if(result == null || result[0] == null){
                                                    survivalsCervObj.stages[2].chemoTherapy = (20).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsCervObj.stages[2].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsCervObj.stages[2].chemoTherapy = (20).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                cervicalCancer.aggregate([
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
                                                            survivalsCervObj.stages[2].relapse = (14).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{
                                                            //survivalsCervObj.stages[2].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsCervObj.stages[2].relapse = (14).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        cervicalCancer.aggregate([
                                                            { $match: {"lastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
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
                                                                    survivalsCervObj.stages[2].aliveNoDisease = (12).toString(); //number of patients with Chemotherapy treatment

                                                                }
                                                                else{
                                                                    //survivalsCervObj.stages[2].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsCervObj.stages[2].aliveNoDisease = (12).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //AliveDisease cervical patients
                                                                cervicalCancer.aggregate([
                                                                    { $match: {"lastKnownVitalStatus.AliveWithDisease": true}},
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
                                                                            survivalsCervObj.stages[2].aliveDisease = (18).toString(); //number of patients with Chemotherapy treatment
                                                                        }
                                                                        else{
                                                                            //survivalsCervObj.stages[2].aliveDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsCervObj.stages[2].aliveDisease = (18).toString(); //number of patients with Chemotherapy treatment
                                                                        }

                                                                        //Dead cervicalCancer patients
                                                                        cervicalCancer.aggregate([
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
                                                                                    survivalsCervObj.stages[2].dead = (10).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsCervObj.stages[2].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsCervObj.stages[2].dead = (10).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsCervObj.stages[2].patientNumber);
                                                                                //return callback(arrStageOne);
                                                                                callback(null, survivalsCervObj);
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

                cervicalCancer.aggregate([
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
                            survivalsCervObj.stages[3].patientNumber = (20).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsCervObj.stages[3].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsCervObj.stages[3].patientNumber = (20).toString(); //number of patients with stage two cancer
                        }

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
                                callback(err);
                            }
                            else{

                                if(result == null || result[0] == null){
                                    survivalsCervObj.stages[3].surgery = (5).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsCervObj.stages[3].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsCervObj.stages[3].surgery = (5).toString(); //number of patients with surgery treatment
                                }


                                //Radiotherapy
                                cervicalCancer.aggregate([
                                    { $match: {$or: [{"primaryTreatment.RTAlone": true},//with radiotherapy treatment
                                        {"primaryTreatment.SurgeryAdjuvantRTCRT": true}]}},
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
                                            survivalsCervObj.stages[3].radioTherapy = (3).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsCervObj.stages[3].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsCervObj.stages[3].radioTherapy = (3).toString(); //number of patients with radiotherapy treatment
                                        }

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
                                                //return callback(err);
                                                callback(err);
                                            }
                                            else{

                                                if(result == null || result[0] == null){
                                                    survivalsCervObj.stages[3].chemoTherapy = (12).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsCervObj.stages[3].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsCervObj.stages[3].chemoTherapy = (12).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                cervicalCancer.aggregate([
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
                                                            survivalsCervObj.stages[3].relapse = (4).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{
                                                            //survivalsCervObj.stages[3].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsCervObj.stages[3].relapse = (4).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        cervicalCancer.aggregate([
                                                            { $match: {"lastKnownVitalStatus.AliveAndNoEvidenceOfDisease": true}},
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
                                                                    survivalsCervObj.stages[3].aliveNoDisease = (4).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{
                                                                    //survivalsCervObj.stages[3].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsCervObj.stages[3].aliveNoDisease = (4).toString(); //number of patients with Chemotherapy treatment
                                                                }


                                                                //AliveDisease cervical patients
                                                                cervicalCancer.aggregate([
                                                                    { $match: {"lastKnownVitalStatus.AliveWithDisease": true}},
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
                                                                            survivalsCervObj.stages[3].aliveDisease = (8).toString(); //number of patients with Chemotherapy treatment
                                                                        }
                                                                        else{
                                                                            //survivalsCervObj.stages[3].aliveDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsCervObj.stages[3].aliveDisease = (8).toString(); //number of patients with Chemotherapy treatment

                                                                        }

                                                                        //Dead cervicalCancer patients
                                                                        cervicalCancer.aggregate([
                                                                            { $match: {"lastKnownVitalStatus.Dead": true}},
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
                                                                                    survivalsCervObj.stages[3].dead = (8).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsGTNObj.stages[3].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsCervObj.stages[3].dead = (8).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsCervObj.stages[3].patientNumber);
                                                                                //return callback(arrStageOne);
                                                                                callback(null, survivalsCervObj);
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
                return cervCallback(err);
                //return res.send(400);
                //winston log error too


                //return res.send(400);//res.json(response); //arrSend should be a json object
            }

            if(results == null || results[0] == null){
                console.log("null");

                //return res.send(400);
                return cervCallback(null);
            }

            //console.log(results[0]);
            //console.log(results[1]);
            /*console.log("Cerv " + results[2]);
            console.log("Cerv " + results[3]);*/

            return cervCallback(results);

        });

};





//maybe transfer this to getSurvivalStats.js
var getEndometrialSurvivals = function(endoCallback){
    async.parallel([
            //for endometrial cancer stage one
            function(callback){
                endometrial.aggregate([
                    { $match: {$or: [{"figoStage.Ia": true},//with cancer stage one
                        {"figoStage.Ib": true},
                        {"figoStage.Ic": true}]} },
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
                            //survivalsEndoObj.stages[0].patientNumber = (0).toString();
                            survivalsEndoObj.stages[0].patientNumber = (153).toString(); //number of patients with stage one cancer
                        }
                        else{
                            //survivalsEndoObj.stages[0].patientNumber = (result[0].count).toString(); //number of patients with stage one cancer
                            survivalsEndoObj.stages[0].patientNumber = (153).toString(); //number of patients with stage one cancer
                        }


                        //Surgery
                        endometrial.aggregate([
                            { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"primaryTreatmentPerformed.SurgeryAdjuvantRT": true},
                                {"primaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
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
                                    //survivalsEndoObj.stages[0].surgery = (0).toString();
                                    survivalsEndoObj.stages[0].surgery = (28).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsEndoObj.stages[0].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsEndoObj.stages[0].surgery = (28).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                endometrial.aggregate([
                                    { $match: {"primaryTreatmentPerformed.SurgeryAdjuvantRT": true}},
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
                                            //survivalsEndoObj.stages[0].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                            survivalsEndoObj.stages[0].radioTherapy = (45).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{

                                            //survivalsEndoObj.stages[0].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsEndoObj.stages[0].radioTherapy = (45).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        endometrial.aggregate([
                                            { $match: {"primaryTreatmentPerformed.SurgeryAdjuvantCT": true}},
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
                                                    //survivalsEndoObj.stages[0].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsEndoObj.stages[0].chemoTherapy = (50).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsEndoObj.stages[0].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsEndoObj.stages[0].chemoTherapy = (50).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Hormonal therapy patients
                                                endometrial.aggregate([
                                                    { $match: {$or: [{"primaryTreatmentPerformed.AdjuvantHT": true},//with surgery treatment
                                                        {"primaryTreatmentPerformed.HormonalPrimaryTherapy": true}]}},
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
                                                            survivalsEndoObj.stages[0].hormonalTherapy = (30).toString(); //number of patients with hormonalTherapy treatment
                                                        }
                                                        else{


                                                            //survivalsEndoObj.stages[0].hormonalTherapy = (result[0].count).toString(); //number of patients with hormonalTherapy treatment
                                                            survivalsEndoObj.stages[0].hormonalTherapy = (30).toString(); //number of patients with hormonalTherapy treatment
                                                        }

                                                        //Relapsed cervical patients
                                                        endometrial.aggregate([
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
                                                                    survivalsEndoObj.stages[0].relapse = (60).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{
                                                                    //survivalsEndoObj.stages[0].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsEndoObj.stages[0].relapse = (60).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //AliveNoDisease cervical patients
                                                                endometrial.aggregate([
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
                                                                            survivalsEndoObj.stages[0].aliveNoDisease = (22).toString(); //number of patients with Chemotherapy treatment
                                                                        }
                                                                        else{
                                                                            //survivalsEndoObj.stages[0].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsEndoObj.stages[0].aliveNoDisease = (22).toString(); //number of patients with Chemotherapy treatment

                                                                        }

                                                                        //AliveDisease cervical patients
                                                                        endometrial.aggregate([
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
                                                                                    survivalsEndoObj.stages[0].aliveDisease = (110).toString(); //number of patients aliveDisease
                                                                                }
                                                                                else{
                                                                                    //survivalsEndoObj.stages[0].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                                    survivalsEndoObj.stages[0].aliveDisease = (110).toString(); //number of patients aliveDisease
                                                                                }

                                                                                //Dead Endometrial patients
                                                                                endometrial.aggregate([
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
                                                                                            survivalsEndoObj.stages[0].dead = (21).toString(); //number of patients dead
                                                                                        }
                                                                                        else{

                                                                                            //survivalsEndoObj.stages[0].dead = (result[0].count).toString(); //number of patients dead
                                                                                            survivalsEndoObj.stages[0].dead = (21).toString(); //number of patients dead

                                                                                        }

                                                                                        console.log(survivalsEndoObj.stages[0].patientNumber);
                                                                                        callback(null, survivalsEndoObj);
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
                });

            },
            //for stage 2 Endometrial cancer
            function(callback){

                endometrial.aggregate([
                    { $match: {$or: [{"figoStage.IIa": true},//with cancer stage one
                        {"figoStage.IIb": true}]}},
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
                            survivalsEndoObj.stages[1].patientNumber = (114).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsEndoObj.stages[1].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsEndoObj.stages[1].patientNumber = (114).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        endometrial.aggregate([
                            { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"primaryTreatmentPerformed.SurgeryAdjuvantRTCRT": true},
                                {"primaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
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
                                    survivalsEndoObj.stages[1].surgery = (40).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsEndoObj.stages[1].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsEndoObj.stages[1].surgery = (40).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                endometrial.aggregate([
                                    { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAdjuvantRT": true}]}},
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
                                            survivalsEndoObj.stages[1].radioTherapy = (36).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsEndoObj.stages[1].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsEndoObj.stages[1].radioTherapy = (36).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        endometrial.aggregate([
                                            { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
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
                                                    survivalsEndoObj.stages[1].chemoTherapy = (38).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsEndoObj.stages[1].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsEndoObj.stages[1].chemoTherapy = (28).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Hormonal therapy patients
                                                endometrial.aggregate([
                                                    { $match: {$or: [{"primaryTreatmentPerformed.AdjuvantHT": true},//with surgery treatment
                                                        {"primaryTreatmentPerformed.HormonalPrimaryTherapy": true}]}},
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
                                                            survivalsEndoObj.stages[1].hormonalTherapy = (10).toString(); //number of patients with hormonalTherapy treatment
                                                        }
                                                        else{
                                                            //survivalsEndoObj.stages[1].hormonalTherapy = (result[0].count).toString(); //number of patients with hormonalTherapy treatment
                                                            survivalsEndoObj.stages[1].hormonalTherapy = (10).toString(); //number of patients with hormonalTherapy treatment
                                                        }

                                                        //Relapsed endometrial patients
                                                        endometrial.aggregate([
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
                                                                    survivalsEndoObj.stages[1].relapse = (50).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsEndoObj.stages[1].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsEndoObj.stages[1].relapse = (50).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //AliveNoDisease cervical patients
                                                                endometrial.aggregate([
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
                                                                            survivalsEndoObj.stages[1].aliveNoDisease = (3).toString(); //number of patients with Chemotherapy treatment
                                                                        }
                                                                        else{
                                                                            //survivalsEndoObj.stages[1].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsEndoObj.stages[1].aliveNoDisease = (3).toString(); //number of patients with Chemotherapy treatment

                                                                        }

                                                                        //AliveDisease cervical patients
                                                                        endometrial.aggregate([
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
                                                                                    survivalsEndoObj.stages[1].aliveDisease = (83).toString(); //number of patients aliveDisease
                                                                                }
                                                                                else{

                                                                                    //survivalsEndoObj.stages[1].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                                    survivalsEndoObj.stages[1].aliveDisease = (83).toString(); //number of patients aliveDisease
                                                                                }

                                                                                //Dead endometrial patients
                                                                                endometrial.aggregate([
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
                                                                                            survivalsEndoObj.stages[1].dead = (28).toString(); //number of patients dead
                                                                                        }
                                                                                        else{

                                                                                            //survivalsEndoObj.stages[1].dead = (result[0].count).toString(); //number of patients dead
                                                                                            survivalsEndoObj.stages[1].dead = (28).toString(); //number of patients dead

                                                                                        }
                                                                                        console.log(survivalsEndoObj.stages[1].patientNumber);
                                                                                        callback(null, survivalsEndoObj);
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
                });

            },
            //for Endometrial cancer stage 3
            function(callback){

                endometrial.aggregate([
                    { $match: {$or: [{"figoStage.IIIa": true},//with cancer stage three
                        {"figoStage.IIIb": true},
                        {"figoStage.IIIc": true}]}},
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
                            survivalsEndoObj.stages[2].patientNumber = (42).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsEndoObj.stages[2].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsEndoObj.stages[2].patientNumber = (42).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        endometrial.aggregate([
                            { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"primaryTreatmentPerformed.SurgeryAdjuvantRT": true},
                                {"primaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
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
                                    survivalsEndoObj.stages[2].surgery = (18).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsEndoObj.stages[2].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsEndoObj.stages[2].surgery = (18).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                endometrial.aggregate([
                                    { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAdjuvantRT": true}]}},
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
                                            survivalsEndoObj.stages[2].radioTherapy = (12).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{

                                            //survivalsEndoObj.stages[2].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsEndoObj.stages[2].radioTherapy = (12).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        endometrial.aggregate([
                                            { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
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
                                                    survivalsEndoObj.stages[2].chemoTherapy = (8).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsEndoObj.stages[2].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsEndoObj.stages[2].chemoTherapy = (8).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Hormonal therapy patients
                                                endometrial.aggregate([
                                                    { $match: {$or: [{"primaryTreatmentPerformed.AdjuvantHT": true},//with surgery treatment
                                                        {"primaryTreatmentPerformed.HormonalPrimaryTherapy": true}]}},
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
                                                            survivalsEndoObj.stages[2].hormonalTherapy = (4).toString(); //number of patients with hormonalTherapy treatment
                                                        }
                                                        else{
                                                            //survivalsEndoObj.stages[2].hormonalTherapy = (result[0].count).toString(); //number of patients with hormonalTherapy treatment
                                                            survivalsEndoObj.stages[2].hormonalTherapy = (4).toString(); //number of patients with hormonalTherapy treatment
                                                        }

                                                        //Relapsed cervical patients
                                                        endometrial.aggregate([
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
                                                                    survivalsEndoObj.stages[2].relapse = (24).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsEndoObj.stages[2].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsEndoObj.stages[2].relapse = (24).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //AliveNoDisease cervical patients
                                                                endometrial.aggregate([
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
                                                                            survivalsEndoObj.stages[2].aliveNoDisease = (10).toString(); //number of patients with Chemotherapy treatment
                                                                        }
                                                                        else{
                                                                            //survivalsEndoObj.stages[2].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsEndoObj.stages[2].aliveNoDisease = (10).toString(); //number of patients with Chemotherapy treatment

                                                                        }

                                                                        //AliveDisease cervical patients
                                                                        endometrial.aggregate([
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
                                                                                    survivalsEndoObj.stages[2].aliveDisease = (24).toString(); //number of patients aliveDisease
                                                                                }
                                                                                else{

                                                                                    //survivalsEndoObj.stages[2].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                                    survivalsEndoObj.stages[2].aliveDisease = (24).toString(); //number of patients aliveDisease
                                                                                }

                                                                                //Dead patients
                                                                                endometrial.aggregate([
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
                                                                                            survivalsEndoObj.stages[2].dead = (8).toString(); //number of patients dead
                                                                                        }
                                                                                        else{

                                                                                            //survivalsEndoObj.stages[2].dead = (result[0].count).toString(); //number of patients dead
                                                                                            survivalsEndoObj.stages[2].dead = (8).toString(); //number of patients dead

                                                                                        }
                                                                                        console.log(survivalsEndoObj.stages[2].patientNumber);
                                                                                        callback(null, survivalsEndoObj);
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
                });

            },
            //for Endometrial cancer stage 4
            function(callback){

                endometrial.aggregate([
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
                            survivalsEndoObj.stages[3].patientNumber = (10).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsEndoObj.stages[3].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsEndoObj.stages[3].patientNumber = (10).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        endometrial.aggregate([
                            { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"primaryTreatmentPerformed.SurgeryAdjuvantRT": true},
                                {"primaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
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
                                    survivalsEndoObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsEndoObj.stages[3].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsEndoObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                endometrial.aggregate([
                                    { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAdjuvantRT": true}]}},
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
                                            survivalsEndoObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{

                                            //survivalsEndoObj.stages[3].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsEndoObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        endometrial.aggregate([
                                            { $match: {$or: [{"primaryTreatmentPerformed.SurgeryAdjuvantCT": true}]}},
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
                                                    survivalsEndoObj.stages[3].chemoTherapy = (10).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsEndoObj.stages[3].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsEndoObj.stages[3].chemoTherapy = (10).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Hormonal therapy patients
                                                endometrial.aggregate([
                                                    { $match: {$or: [{"primaryTreatmentPerformed.AdjuvantHT": true},//with surgery treatment
                                                        {"primaryTreatmentPerformed.HormonalPrimaryTherapy": true}]}},
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
                                                            survivalsEndoObj.stages[3].hormonalTherapy = (0).toString(); //number of patients with hormonalTherapy treatment
                                                        }
                                                        else{

                                                            //survivalsEndoObj.stages[3].hormonalTherapy = (result[0].count).toString(); //number of patients with hormonalTherapy treatment
                                                            survivalsEndoObj.stages[3].hormonalTherapy = (0).toString(); //number of patients with hormonalTherapy treatment
                                                        }

                                                        //Relapsed cervical patients
                                                        endometrial.aggregate([
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
                                                                    survivalsEndoObj.stages[3].relapse = (2).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsEndoObj.stages[3].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsEndoObj.stages[3].relapse = (2).toString(); //number of patients with Chemotherapy treatment
                                                                }

                                                                //AliveNoDisease cervical patients
                                                                endometrial.aggregate([
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
                                                                            survivalsEndoObj.stages[3].aliveNoDisease = (5).toString(); //number of patients with Chemotherapy treatment
                                                                        }
                                                                        else{
                                                                            //survivalsEndoObj.stages[3].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                            survivalsEndoObj.stages[3].aliveNoDisease = (5).toString(); //number of patients with Chemotherapy treatment

                                                                        }

                                                                        //AliveDisease cervical patients
                                                                        endometrial.aggregate([
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
                                                                                    survivalsEndoObj.stages[3].aliveDisease = (5).toString(); //number of patients aliveDisease
                                                                                }
                                                                                else{

                                                                                    //survivalsEndoObj.stages[3].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                                    survivalsEndoObj.stages[3].aliveDisease = (5).toString(); //number of patients aliveDisease
                                                                                }

                                                                                //Dead patients
                                                                                endometrial.aggregate([
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
                                                                                            survivalsEndoObj.stages[3].dead = (0).toString(); //number of patients dead
                                                                                        }
                                                                                        else{

                                                                                            //survivalsEndoObj.stages[3].dead = (result[0].count).toString(); //number of patients dead
                                                                                            survivalsEndoObj.stages[3].dead = (0).toString(); //number of patients dead

                                                                                        }

                                                                                        console.log(survivalsEndoObj.stages[3].patientNumber);
                                                                                        callback(null, survivalsEndoObj);
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
                });

            }

        ],
        function(err, results){

            if (err) {
                console.log(err);
                return endoCallback(err);
                //return res.send(400);
                //winston log error too


                //return res.send(400);//res.json(response); //arrSend should be a json object
            }

            if(results == null || results[0] == null) {
                console.log("null");

                //return res.send(400);
                return endoCallback(null);
            }

            //console.log(results[0]);
            //console.log(results[1]);
            /*console.log(results[2]);
             console.log(results[3]);*/

            return endoCallback(results);

        });

};




/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/


//maybe transfer this to getSurvivalStats.js
var getFallopianSurvivals = function(fallopianCallback){
    async.parallel([
            //for Fallopian cancer stage one
            function(callback){
                fallopianTube.aggregate([
                    { $match: {$or: [{"figoStage.Ia": true},//with cancer stage one
                        {"figoStage.Ib": true},
                        {"figoStage.Ic": true}]} },
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
                            survivalsFallopianObj.stages[0].patientNumber = (141).toString();
                        }
                        else{

                            //survivalsFallopianObj.stages[0].patientNumber = (result[0].count).toString(); //number of patients with stage one cancer
                            survivalsFallopianObj.stages[0].patientNumber = (141).toString(); //number of patients with stage one cancer
                        }

                        //Surgery
                        fallopianTube.aggregate([
                            { $match: {$or: [{"TreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"TreatmentPerformed.SurgeryAdjuvantRT": true},
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
                                    survivalsFallopianObj.stages[0].surgery = (28).toString();
                                }
                                else{
                                    //survivalsFallopianObj.stages[0].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsFallopianObj.stages[0].surgery = (28).toString(); //number of patients with surgery treatment
                                }


                                //Radiotherapy
                                fallopianTube.aggregate([
                                    { $match: {$or: [{"TreatmentPerformed.RTAlone": true},//with surgery treatment
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
                                            survivalsFallopianObj.stages[0].radioTherapy = (52).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsFallopianObj.stages[0].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsFallopianObj.stages[0].radioTherapy = (52).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        fallopianTube.aggregate([
                                            { $match: {$or: [{"TreatmentPerformed.NeoAdjuvantCTSurgery": true},//with surgery treatment
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
                                                    survivalsFallopianObj.stages[0].chemoTherapy = (75).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsFallopianObj.stages[0].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsFallopianObj.stages[0].chemoTherapy = (75).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                fallopianTube.aggregate([
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
                                                            survivalsFallopianObj.stages[0].relapse = (58).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsFallopianObj.stages[0].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsFallopianObj.stages[0].relapse = (58).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        fallopianTube.aggregate([
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
                                                                    survivalsFallopianObj.stages[0].aliveNoDisease = (20).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsFallopianObj.stages[0].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsFallopianObj.stages[0].aliveNoDisease = (20).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                fallopianTube.aggregate([
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
                                                                            survivalsFallopianObj.stages[0].aliveDisease = (90).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{
                                                                            //survivalsFallopianObj.stages[0].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsFallopianObj.stages[0].aliveDisease = (90).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead fallopian patients
                                                                        fallopianTube.aggregate([
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
                                                                                    survivalsFallopianObj.stages[0].dead = (21).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsFallopianObj.stages[0].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsFallopianObj.stages[0].dead = (21).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsFallopianObj.stages[0].patientNumber);
                                                                                callback(null, survivalsFallopianObj);
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
            //for stage 2 Fallopian cancer
            function(callback){
                fallopianTube.aggregate([
                    { $match: {$or: [{"figoStage.IIa": true},//with cancer stage two
                        {"figoStage.IIb": true},
                        {"figoStage.IIc": true}]} },
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
                            survivalsFallopianObj.stages[1].patientNumber = (58).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsFallopianObj.stages[1].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsFallopianObj.stages[1].patientNumber = (58).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        fallopianTube.aggregate([
                            { $match: {$or: [{"TreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"TreatmentPerformed.NeoAdjuvantCTSurgery": true},
                                {"TreatmentPerformed.SurgeryAdjuvantRT": true},
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
                                    survivalsFallopianObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsFallopianObj.stages[1].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsFallopianObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                fallopianTube.aggregate([
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
                                            survivalsFallopianObj.stages[1].radioTherapy = (18).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsFallopianObj.stages[1].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsFallopianObj.stages[1].radioTherapy = (18).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        fallopianTube.aggregate([
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
                                                    survivalsFallopianObj.stages[1].chemoTherapy = (40).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsFallopianObj.stages[1].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsFallopianObj.stages[1].chemoTherapy = (40).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Relapsed cervical patients
                                                fallopianTube.aggregate([
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
                                                            survivalsFallopianObj.stages[1].relapse = (15).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsFallopianObj.stages[1].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsFallopianObj.stages[1].relapse = (15).toString(); //number of patients with Chemotherapy treatment
                                                        }


                                                        //AliveNoDisease cervical patients
                                                        fallopianTube.aggregate([
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
                                                                    survivalsFallopianObj.stages[1].aliveNoDisease = (20).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsFallopianObj.stages[1].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsFallopianObj.stages[1].aliveNoDisease = (20).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                fallopianTube.aggregate([
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
                                                                            survivalsFallopianObj.stages[1].aliveDisease = (38).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsFallopianObj.stages[1].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsFallopianObj.stages[1].aliveDisease = (38).toString(); //number of patients aliveDisease
                                                                        }



                                                                        //Dead fallopian patients
                                                                        fallopianTube.aggregate([
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
                                                                                    survivalsFallopianObj.stages[1].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsFallopianObj.stages[1].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsFallopianObj.stages[1].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsFallopianObj.stages[1].patientNumber);
                                                                                callback(null, survivalsFallopianObj);
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

                fallopianTube.aggregate([
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
                            survivalsFallopianObj.stages[2].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsFallopianObj.stages[2].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsFallopianObj.stages[2].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        fallopianTube.aggregate([
                            { $match: {$or: [{"TreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"TreatmentPerformed.NeoAdjuvantCTSurgery": true},
                                {"TreatmentPerformed.SurgeryAdjuvantRT": true},
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
                                    survivalsFallopianObj.stages[2].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsFallopianObj.stages[2].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsFallopianObj.stages[2].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                fallopianTube.aggregate([
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
                                            survivalsFallopianObj.stages[2].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsFallopianObj.stages[2].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsFallopianObj.stages[2].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        fallopianTube.aggregate([
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
                                                    survivalsFallopianObj.stages[2].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsFallopianObj.stages[2].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsFallopianObj.stages[2].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed cervical patients
                                                fallopianTube.aggregate([
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
                                                            survivalsFallopianObj.stages[2].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{
                                                            //survivalsFallopianObj.stages[2].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsFallopianObj.stages[2].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease cervical patients
                                                        fallopianTube.aggregate([
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
                                                                    survivalsFallopianObj.stages[2].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsFallopianObj.stages[2].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsFallopianObj.stages[2].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                fallopianTube.aggregate([
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
                                                                            survivalsFallopianObj.stages[2].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsFallopianObj.stages[2].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsFallopianObj.stages[2].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }


                                                                        //Dead fallopian patients
                                                                        fallopianTube.aggregate([
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
                                                                                    survivalsFallopianObj.stages[2].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsFallopianObj.stages[2].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsFallopianObj.stages[2].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsFallopianObj.stages[2].patientNumber);
                                                                                callback(null, survivalsFallopianObj);
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

                fallopianTube.aggregate([
                    { $match: {"figoStage.IV": true}},
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
                            survivalsFallopianObj.stages[3].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsFallopianObj.stages[3].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsFallopianObj.stages[3].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        fallopianTube.aggregate([
                            { $match: {$or: [{"TreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"TreatmentPerformed.NeoAdjuvantCTSurgery": true},
                                {"TreatmentPerformed.SurgeryAdjuvantRT": true},
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
                                    survivalsFallopianObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsFallopianObj.stages[3].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsFallopianObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                fallopianTube.aggregate([
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
                                            survivalsFallopianObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsFallopianObj.stages[3].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsFallopianObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }


                                        //Chemotherapy
                                        fallopianTube.aggregate([
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
                                                    survivalsFallopianObj.stages[3].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsFallopianObj.stages[3].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsFallopianObj.stages[3].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Relapsed cervical patients
                                                fallopianTube.aggregate([
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
                                                            survivalsFallopianObj.stages[3].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsFallopianObj.stages[3].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsFallopianObj.stages[3].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }


                                                        //AliveNoDisease cervical patients
                                                        fallopianTube.aggregate([
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
                                                                    survivalsFallopianObj.stages[3].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsFallopianObj.stages[3].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsFallopianObj.stages[3].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease cervical patients
                                                                fallopianTube.aggregate([
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
                                                                            survivalsFallopianObj.stages[3].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{
                                                                            //survivalsFallopianObj.stages[3].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsFallopianObj.stages[3].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead fallopian patients
                                                                        fallopianTube.aggregate([
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
                                                                                    survivalsFallopianObj.stages[3].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsFallopianObj.stages[3].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsFallopianObj.stages[3].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsFallopianObj.stages[3].patientNumber);
                                                                                callback(null, survivalsFallopianObj);
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
                return fallopianCallback(err);
                //return res.send(400);
                //winston log error too


                //return res.send(400);//res.json(response); //arrSend should be a json object
            }

            if(results == null || results[0] == null) {
                console.log("null");

                //return res.send(400);
                return fallopianCallback(null);
            }

            //console.log(results[0]);
            //console.log(results[1]);

            return fallopianCallback(results);

        });

};




/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/
/*******************************************************************************Do later**************************************************************************************************************************************/


//maybe transfer this to getSurvivalStats.js
var getOvarianSurvivals = function(ovarianCallback){
    async.parallel([
            //for ovarianCancer stage one
            function(callback){
                ovarianCancer.aggregate([
                    { $match: {$or: [{"figoStage.Ia": true},//with cancer stage one
                        {"figoStage.Ib": true},
                        {"figoStage.Ic": true}]} },
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
                            //survivalsOvarianObj.stages[0].patientNumber = (0).toString();
                            survivalsOvarianObj.stages[0].patientNumber = (128).toString(); //number of patients with stage one cancer
                        }
                        else{

                            //survivalsOvarianObj.stages[0].patientNumber = (result[0].count).toString(); //number of patients with stage one cancer
                            survivalsOvarianObj.stages[0].patientNumber = (128).toString(); //number of patients with stage one cancer
                        }


                        //Surgery
                        ovarianCancer.aggregate([
                            { $match: {$or: [{"TreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"TreatmentPerformed.SurgeryAdjuvantRT": true},
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
                                    //survivalsOvarianObj.stages[0].surgery = (0).toString();
                                    survivalsOvarianObj.stages[0].surgery = (26).toString(); //number of patients with surgery treatment
                                }
                                else{

                                    //survivalsOvarianObj.stages[0].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsOvarianObj.stages[0].surgery = (26).toString(); //number of patients with surgery treatment
                                }


                                //Radiotherapy
                                ovarianCancer.aggregate([
                                    { $match: {$or: [{"TreatmentPerformed.RTAlone": true},//with Radiotherapy treatment
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
                                            //survivalsOvarianObj.stages[0].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                            survivalsOvarianObj.stages[0].radioTherapy = (29).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsOvarianObj.stages[0].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsOvarianObj.stages[0].radioTherapy = (29).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        ovarianCancer.aggregate([
                                            { $match: {$or: [{"TreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with Radiotherapy treatment
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
                                                    //survivalsOvarianObj.stages[0].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsOvarianObj.stages[0].chemoTherapy = (73).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsOvarianObj.stages[0].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsOvarianObj.stages[0].chemoTherapy = (73).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed ovarianCancer patients
                                                ovarianCancer.aggregate([
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
                                                            ///survivalsOvarianObj.stages[0].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsOvarianObj.stages[0].relapse = (41).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsOvarianObj.stages[0].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsOvarianObj.stages[0].relapse = (41).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease ovarianCancer patients
                                                        ovarianCancer.aggregate([
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
                                                                    //survivalsOvarianObj.stages[0].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsOvarianObj.stages[0].aliveNoDisease = (14).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsOvarianObj.stages[0].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsOvarianObj.stages[0].aliveNoDisease = (14).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease ovarianCancer patients
                                                                ovarianCancer.aggregate([
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
                                                                            //survivalsOvarianObj.stages[0].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                            survivalsOvarianObj.stages[0].aliveDisease = (98).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsOvarianObj.stages[0].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsOvarianObj.stages[0].aliveDisease = (98).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead  patients
                                                                        ovarianCancer.aggregate([
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
                                                                                    //survivalsOvarianObj.stages[0].dead = (0).toString(); //number of patients dead
                                                                                    survivalsOvarianObj.stages[0].dead = (11).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsOvarianObj.stages[0].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsOvarianObj.stages[0].dead = (11).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsOvarianObj.stages[0].patientNumber);
                                                                                callback(null, survivalsOvarianObj);
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
            //for stage 2 ovarianCancer cancer
            function(callback){

                ovarianCancer.aggregate([
                    { $match: {$or: [{"figoStage.IIa": true},//with cancer stage two
                        {"figoStage.IIb": true},
                        {"figoStage.IIc": true}]} },
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
                            survivalsOvarianObj.stages[1].patientNumber = (60).toString(); //number of patients with stage two cancer
                        }
                        else{

                            //survivalsOvarianObj.stages[1].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsOvarianObj.stages[1].patientNumber = (60).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        ovarianCancer.aggregate([
                            { $match: {$or: [{"TreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"TreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"TreatmentPerformed.SurgeryAdjuvantRT": true},
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
                                    survivalsOvarianObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsOvarianObj.stages[1].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsOvarianObj.stages[1].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                ovarianCancer.aggregate([
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
                                            survivalsOvarianObj.stages[1].radioTherapy = (10).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsOvarianObj.stages[1].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsOvarianObj.stages[1].radioTherapy = (10).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        ovarianCancer.aggregate([
                                            { $match: {$or: [{"TreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with Chemotherapy treatment
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
                                                    survivalsOvarianObj.stages[1].chemoTherapy = (50).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsOvarianObj.stages[1].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsOvarianObj.stages[1].chemoTherapy = (50).toString(); //number of patients with Chemotherapy treatment
                                                }


                                                //Relapsed ovarianCancer patients
                                                ovarianCancer.aggregate([
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
                                                            survivalsOvarianObj.stages[1].relapse = (40).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsOvarianObj.stages[1].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsOvarianObj.stages[1].relapse = (40).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease ovarianCancer patients
                                                        ovarianCancer.aggregate([
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
                                                                    survivalsOvarianObj.stages[1].aliveNoDisease = (8).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsOvarianObj.stages[1].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsOvarianObj.stages[1].aliveNoDisease = (8).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease ovarianCancer patients
                                                                ovarianCancer.aggregate([
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
                                                                            survivalsOvarianObj.stages[1].aliveDisease = (52).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsOvarianObj.stages[1].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsOvarianObj.stages[1].aliveDisease = (52).toString(); //number of patients aliveDisease
                                                                        }


                                                                        //Dead ovarianCancer patients
                                                                        ovarianCancer.aggregate([
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
                                                                                    survivalsOvarianObj.stages[1].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsOvarianObj.stages[1].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsOvarianObj.stages[1].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsOvarianObj.stages[1].patientNumber);
                                                                                callback(null, survivalsOvarianObj);
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
            //for ovarianCancer cancer stage 3
            function(callback){

                ovarianCancer.aggregate([
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
                            survivalsOvarianObj.stages[2].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsOvarianObj.stages[2].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsOvarianObj.stages[2].patientNumber = (0).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        ovarianCancer.aggregate([
                            { $match: {$or: [{"TreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"TreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"TreatmentPerformed.SurgeryAdjuvantRT": true},
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
                                    survivalsOvarianObj.stages[2].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsOvarianObj.stages[2].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsOvarianObj.stages[2].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                ovarianCancer.aggregate([
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
                                            survivalsOvarianObj.stages[2].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{
                                            //survivalsOvarianObj.stages[2].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsOvarianObj.stages[2].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }

                                        //Chemotherapy
                                        ovarianCancer.aggregate([
                                            { $match: {$or: [{"TreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with Chemotherapy treatment
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
                                                    survivalsOvarianObj.stages[2].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{
                                                    //survivalsOvarianObj.stages[2].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsOvarianObj.stages[2].chemoTherapy = (0).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed ovarianCancer patients
                                                ovarianCancer.aggregate([
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
                                                            survivalsOvarianObj.stages[2].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsOvarianObj.stages[2].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsOvarianObj.stages[2].relapse = (0).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease ovarianCancer patients
                                                        ovarianCancer.aggregate([
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
                                                                    survivalsOvarianObj.stages[2].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsOvarianObj.stages[2].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsOvarianObj.stages[2].aliveNoDisease = (0).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease ovarianCancer patients
                                                                ovarianCancer.aggregate([
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
                                                                            survivalsOvarianObj.stages[2].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsOvarianObj.stages[2].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsOvarianObj.stages[2].aliveDisease = (0).toString(); //number of patients aliveDisease
                                                                        }


                                                                        //Dead  patients
                                                                        ovarianCancer.aggregate([
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
                                                                                    survivalsOvarianObj.stages[2].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    survivalsOvarianObj.stages[2].dead = (result[0].count).toString(); //number of patients dead
                                                                                    //survivalsOvarianObj.stages[2].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log(survivalsOvarianObj.stages[2].patientNumber);
                                                                                callback(null, survivalsOvarianObj);
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
            //for ovarianCancer cancer stage 4
            function(callback){

                ovarianCancer.aggregate([
                    { $match: {"figoStage.IV": true}},
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
                            survivalsOvarianObj.stages[3].patientNumber = (3).toString(); //number of patients with stage two cancer
                        }
                        else{
                            //survivalsOvarianObj.stages[3].patientNumber = (result[0].count).toString(); //number of patients with stage two cancer
                            survivalsOvarianObj.stages[3].patientNumber = (3).toString(); //number of patients with stage two cancer
                        }

                        //Surgery
                        ovarianCancer.aggregate([
                            { $match: {$or: [{"TreatmentPerformed.SurgeryAlone": true},//with surgery treatment
                                {"TreatmentPerformed.NeoAdjuvantCTAndSurgery": true},
                                {"TreatmentPerformed.SurgeryAdjuvantRT": true},
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
                                    survivalsOvarianObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }
                                else{
                                    //survivalsOvarianObj.stages[3].surgery = (result[0].count).toString(); //number of patients with surgery treatment
                                    survivalsOvarianObj.stages[3].surgery = (0).toString(); //number of patients with surgery treatment
                                }

                                //Radiotherapy
                                ovarianCancer.aggregate([
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
                                            survivalsOvarianObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }
                                        else{

                                            //survivalsOvarianObj.stages[3].radioTherapy = (result[0].count).toString(); //number of patients with radiotherapy treatment
                                            survivalsOvarianObj.stages[3].radioTherapy = (0).toString(); //number of patients with radiotherapy treatment
                                        }


                                        //Chemotherapy
                                        ovarianCancer.aggregate([
                                            { $match: {$or: [{"TreatmentPerformed.NeoAdjuvantCTAndSurgery": true},//with Chemotherapy treatment
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
                                                    survivalsOvarianObj.stages[3].chemoTherapy = (3).toString(); //number of patients with Chemotherapy treatment
                                                }
                                                else{

                                                    //survivalsOvarianObj.stages[3].chemoTherapy = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                    survivalsOvarianObj.stages[3].chemoTherapy = (3).toString(); //number of patients with Chemotherapy treatment
                                                }

                                                //Relapsed ovarianCancer patients
                                                ovarianCancer.aggregate([
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
                                                            survivalsOvarianObj.stages[3].relapse = (1).toString(); //number of patients with Chemotherapy treatment
                                                        }
                                                        else{

                                                            //survivalsOvarianObj.stages[3].relapse = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                            survivalsOvarianObj.stages[3].relapse = (1).toString(); //number of patients with Chemotherapy treatment
                                                        }

                                                        //AliveNoDisease ovarianCancer patients
                                                        ovarianCancer.aggregate([
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
                                                                    survivalsOvarianObj.stages[3].aliveNoDisease = (1).toString(); //number of patients with Chemotherapy treatment
                                                                }
                                                                else{

                                                                    //survivalsOvarianObj.stages[3].aliveNoDisease = (result[0].count).toString(); //number of patients with Chemotherapy treatment
                                                                    survivalsOvarianObj.stages[3].aliveNoDisease = (1).toString(); //number of patients with Chemotherapy treatment

                                                                }

                                                                //AliveDisease ovarianCancer patients
                                                                ovarianCancer.aggregate([
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
                                                                            survivalsOvarianObj.stages[3].aliveDisease = (2).toString(); //number of patients aliveDisease
                                                                        }
                                                                        else{

                                                                            //survivalsOvarianObj.stages[3].aliveDisease = (result[0].count).toString(); //number of patients aliveDisease
                                                                            survivalsOvarianObj.stages[3].aliveDisease = (2).toString(); //number of patients aliveDisease
                                                                        }

                                                                        //Dead ovarianCancer patients
                                                                        ovarianCancer.aggregate([
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
                                                                                    survivalsOvarianObj.stages[3].dead = (0).toString(); //number of patients dead
                                                                                }
                                                                                else{

                                                                                    //survivalsOvarianObj.stages[3].dead = (result[0].count).toString(); //number of patients dead
                                                                                    survivalsOvarianObj.stages[3].dead = (0).toString(); //number of patients dead

                                                                                }

                                                                                console.log("Ovarian 4 " + survivalsOvarianObj.stages[3].patientNumber);
                                                                                callback(null, survivalsOvarianObj);
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
                return ovarianCallback(err);
                //return res.send(400);
                //winston log error too


                //return res.send(400);//res.json(response); //arrSend should be a json object
            }

            if(results == null || results[0] == null) {
                console.log("null");

                //return res.send(400);
                //console.log("ovary null");
                return ovarianCallback(null);
            }
            return ovarianCallback(results);

        });

};




module.exports = {
    getEndometrialSurvivals: getEndometrialSurvivals,
    getCervicalSurvivals: getCervicalSurvivals,
    getFallopianSurvivals: getFallopianSurvivals,
    getOvarianSurvivals: getOvarianSurvivals
};







