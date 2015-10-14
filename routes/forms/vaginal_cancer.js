var express = require('express');
var router = express.Router();
var submitFunctions  = require('../../controllers/forms/submitForm');

router.post('/', function(req, res, next) {

     var success =   submitFunctions.submitVaginalCancer(req);

    if(!success){
        res.redirect('/gynae_surgery.html');
    }

    else{
        res.redirect('/myAdminSpace');
    }


});
  
module.exports = router;