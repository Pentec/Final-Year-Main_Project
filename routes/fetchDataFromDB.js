var express = require('express');
var router = express.Router();
var submodules = "../sub-modules/";
var models = require(submodules + 'pims-database/database');
var https = require('https');
var userModel = require('../models/userModel.js');
var GS = models.gynaecologySurgery;
var AD = models.addmissionDischarge;



router.post('/', function(req, res) {

var arr = [];
 var arrIntraOperative=[];
  var arrPostOperative=[];
 

  GS.aggregate(
		   [
			 { $match : {"IntraOperativeComplications.None": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
			  arrIntraOperative[0] = myResult[0].count;
			  
GS.aggregate(
		   [
			 { $match : {"IntraOperativeComplications.BladderInjury": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
				 arrIntraOperative[1] = myResult[0].count;
				 
GS.aggregate(
		   [
			 { $match : {"IntraOperativeComplications.BowelInjury": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
				 arrIntraOperative[2] = myResult[0].count;
GS.aggregate(
		   [
			 { $match : {"IntraOperativeComplications.BRUBT": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
				 arrIntraOperative[3] = myResult[0].count;
GS.aggregate(
		   [
			 { $match : {"IntraOperativeComplications.ProcedureNotCompleted": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
				 arrIntraOperative[4] = myResult[0].count;

								arr[0] = arrIntraOperative;
								
							  var myString = "LizJoseph";
							  arr[1] = myString;
							  res.json(arr);
							  console.log("POST response sent.");
			   
		   });});});});});
		  
});

module.exports = router;