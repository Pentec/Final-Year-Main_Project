var express = require('express');
var router = express.Router();
var submodules = "../sub-modules/";
var models = require(submodules + 'pims-database/database');
var stats = require(submodules + 'pims-statistics/statistics');
var https = require('https');


router.post('/', function(req, res) {

    stats.getCervicalSurvival(function(arrSend){
        if(arrSend){
            stats.getCervicalStageOne(function(stageOne){
                if(stageOne){

                    var response = {
                        arrSend: arrSend,
                        stageOne: stageOne
                    }

                    res.json(response); //arrSend should be a json object
                    console.log("POST sent.   " + response.stageOne[2]);
                }


            });


        }
        else{
            console.log("ooops!")
        }

    });



});

module.exports = router;
