var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	
    console.log("You are " + req.body.Age + "  years old.");
});

module.exports = router;