var express = require('express');
var router = express.Router();
var submitFunctions  = require('../../controllers/forms/submitForm');
var saveFunctions  = require('../../controllers/forms/saveForm');

router.post('/', function(req, res, next) {
    if(req.body.isNotCompeleted == true)
   {
       // saveFunctions.saveGynaecologySurgery(req, req.session.username);
       res.redirect('/FormSaved');
   }
else
    {
   var success = submitFunctions.submitGynaecologySurgery(req);
        // console.log(success);
         if(!success){
             res.redirect('/addmission_discharge.html');
        }

         else{
             res.redirect('/FormSubmited');
             }
  }

});
module.exports = router;