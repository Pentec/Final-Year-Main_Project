var express = require('express');
var router = express.Router();
var submitFunctions  = require('../../controllers/forms/submitForm');
var saveFunctions  = require('../../controllers/forms/saveForm');

router.post('/', function(req, res, next) {

   var success =  submitFunctions.submitOncologyFollowUp(req);

    if(!success){
        res.redirect('/gynae_surgery.html');
    }

    else{
        res.redirect('/FormSubmited');
    }

});
module.exports = router;