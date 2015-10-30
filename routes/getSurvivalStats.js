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
                    cervcb(null, cerv);
                }
            });

        },
        function(endoCb){//1
            stats.getEndometrialSurvivals(function(endo){
                if(endo){
                    endoCb(null, endo);
                }

                //concat response
            })

        },
        function(gtnCb){//2
            statsTwo.getGTNSurvivals(function(gtn){
                if(gtn){
                    gtnCb(null, gtn);
                }

                //concat response
            });

        },
        function(vaginalCb){//3
            statsTwo.getVaginalSurvivals(function(vaginal){
                if(vaginal){
                    vaginalCb(null, vaginal);
                }
            });

        },
        function(ovarianCb){//4
            stats.getOvarianSurvivals(function(ovarian){
                if(ovarian){
                    ovarianCb(null, ovarian);
                }
            });

        },
        function(fallopianCb){//5
            stats.getFallopianSurvivals(function(fallopian){
                if(fallopian){
                    fallopianCb(null, fallopian);
                }
            })

        },
        function(vulvaCb){//6
            statsTwo.getVulvaSurvivals(function(vulva){
                if(vulva){
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
