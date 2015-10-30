var express = require('express');
var router = express.Router();
var submodules = "../sub-modules/";
var models = require(submodules + 'pims-database/database');
var stats = require(submodules + 'pims-statistics/statistics');
var statsTwo = require(submodules + 'pims-statistics/statsTwo');
var https = require('https');
var async = require('async');


router.post('/', function(req, res) {

    var response = {};

    async.parallel([
        function(cervcb){//0
            stats.getCervicalSurvivals(function(cerv){
                if(cerv){
                    console.log("POST sent cerv.   " + cerv[0].stages[0].patientNumber);
                    cervcb(null, cerv);
                }
            });

        },
        function(endoCb){//1
            stats.getEndometrialSurvivals(function(endo){
                if(endo){
                    console.log("POST sent endo.   " + endo[0].stages[0].patientNumber);
                    endoCb(null, endo);
                }

                //concat response
            })

        },
        function(gtnCb){//2
            statsTwo.getGTNSurvivals(function(gtn){
                if(gtn){
                    console.log("POST sent gtn.   " + gtn[0].stages[0].patientNumber);
                    gtnCb(null, gtn);
                }

                //concat response
            });

        },
        function(vaginalCb){//3
            statsTwo.getVaginalSurvivals(function(vaginal){
                if(vaginal){
                    console.log("POST sent vaginal.   " + vaginal[0].stages[0].patientNumber);
                    vaginalCb(null, vaginal);
                }
            });

        },
        function(ovarianCb){//4
            stats.getOvarianSurvivals(function(ovarian){
                if(ovarian){
                    console.log("POST sent ovarian.   " + ovarian[1].stages[1].patientNumber);
                    ovarianCb(null, ovarian);
                }
            });

        },
        function(fallopianCb){//5
            stats.getFallopianSurvivals(function(fallopian){
                if(fallopian){
                    console.log("POST sent fallopian.   " + fallopian[1].stages[1].patientNumber);
                    fallopianCb(null, fallopian);
                }
            })

        },
        function(vulvaCb){//6
            statsTwo.getVulvaSurvivals(function(vulva){
                if(vulva){
                    console.log("POST sent vulva.   " + vulva[1].stages[1].patientNumber);
                    vulvaCb(null, vulva);
                }
            })

        }
    ],
    function(err, results){
        if (err) {
            console.log(err);
            return res.send(400);
            //winston log error too


            //return res.send(400);//res.json(response); //arrSend should be a json object
        }

        if(results == null || results[0] == null) {
            console.log("null");

            return res.send(400);
        }

        return res.json(results);


    });


});

module.exports = router;
