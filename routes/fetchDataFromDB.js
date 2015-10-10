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
								
AD.aggregate(
		   [
			 { $match : {"PostOperativeComplications.None": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 }} 
			 
			  }
			  
		   ] , function(err, myResultt)
		   {	
							arrPostOperative[0] = myResultt[0].count;
AD.aggregate(
		   [
			 { $match : {"PostOperativeComplications.BladderInjury": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 }} 
			 
			  }
			  
		   ] , function(err, myResultt)
		   {	
				   arrPostOperative[1] = myResultt[0].count;		
				   
AD.aggregate(
		   [
			 { $match : {"PostOperativeComplications.BowelInjury": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 }} 
			 
			  }
			  
		   ] , function(err, myResultt)
		   {	
				   arrPostOperative[2] = myResultt[0].count;		
				   
AD.aggregate(
		   [
			 { $match : {"PostOperativeComplications.UretericInjury": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 }} 
			 
			  }
			  
		   ] , function(err, myResultt)
		   {	
				   arrPostOperative[3] = myResultt[0].count;
AD.aggregate(
		   [
			 { $match : {"PostOperativeComplications.AnaestheticComplication": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 }} 
			 
			  }
			  
		   ] , function(err, myResultt)
		   {	
				   arrPostOperative[4] = myResultt[0].count;
				   
AD.aggregate(
		   [
			 { $match : {"PostOperativeComplications.ProcedureNotCompleted": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 }} 
			 
			  }
			  
		   ] , function(err, myResultt)
		   {	
				   arrPostOperative[5] = myResultt[0].count;
AD.aggregate(
		   [
			 { $match : {"PostOperativeComplications.BRUBT": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 }} 
			 
			  }
			  
		   ] , function(err, myResultt)
		   {	
				   arrPostOperative[6] = myResultt[0].count;
				   
AD.aggregate(
		   [
			 { $match : {"PostOperativeComplications.VascularInjury": true } },
			  {
				  $group : { _id : null ,count: { $sum: 1 }} 
			 
			  }
			  
		   ] , function(err, myResultt)
		   {	
				   arrPostOperative[7] = myResultt[0].count;
								
							  console.log(arrPostOperative);
							  arr[1] = arrPostOperative;
							  res.json(arr);
							  console.log("POST response sent.");
			   
		   });});});});});}); });});});});});});});
		  
});

module.exports = router;