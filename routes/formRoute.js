var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Schema   = mongoose.Schema;
mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims');
