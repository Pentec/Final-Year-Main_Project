var express = require('express');
var router = express.Router();
var models = require('pims-database');
var AD = models.addmissionDischarge;

router.post('/', function(req, res, next) {

    var jsonString = JSON.stringify(req.body);
    var changedString = jsonString.replace(/([./])/g, "");

    console.log(changedString);
    console.log(JSON.parse(changedString));

  // var Form = new AD({
  // });
   

//Form.save(function(err){
//    if(err) {
   /* throw err;*/
 //   console.log('An error occurred while trying to add data');
//    }
//    else{console.log('The data has been saved.');
//    }
//});

});
  
module.exports = router;