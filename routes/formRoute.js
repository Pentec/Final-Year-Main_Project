var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

router.post('/collectData', function(req, res) {
  res.send('hellllllllooooooo');//'You sent the name "' + req.body.name + '".');
});

module.exports = router;