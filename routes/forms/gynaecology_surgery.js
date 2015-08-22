var express = require('express');
var router = express.Router();
var saveFunctions  = require('../../controllers/forms/submitForm');

router.post('/', function(req, res, next) {
    saveFunctions.submitGynaecologySurgery(req);
});
module.exports = router;