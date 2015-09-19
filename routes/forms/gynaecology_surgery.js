var express = require('express');
var router = express.Router();
var saveFunctions  = require('../../controllers/forms/submitForm');

router.post('/', function(req, res, next) {
    var success = saveFunctions.submitGynaecologySurgery(req);
    console.log(success);

    if(!success){
        res.redirect('/gynae_surgery.html');
    }
    else{
        res.redirect('/myAdminSpace');
    }
});
module.exports = router;