var express = require('express');
var router = express.Router();
var submitFunctions  = require('../../controllers/forms/submitForm');

router.post('/', function(req, res, next) {
    if(req.body.isNotCompeleted == true)
    {
    }
    else
    {
        submitFunctions.submitVaginalCancer(req);
    }

});
  
module.exports = router;