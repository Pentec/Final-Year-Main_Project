var express = require('express');
var router = express.Router();
var submitFunctions  = require('../../controllers/forms/submitForm');
var saveFunctions  = require('../../controllers/forms/saveForm');

router.post('/', function(req, res, next) {
    if(req.body.isNotCompeleted == true)
    {
        saveFunctions.saveAdmissionDischarge(req, req.session.username);
    }
    else
    {
        submitFunctions.submitAdmissionDischarge(req);
    }
});
module.exports = router;