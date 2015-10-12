var express = require('express');
var router = express.Router();
var submodules = "../sub-modules/";
var models = require(submodules + 'pims-database/database');
var https = require('https');
var GS = models.gynaecologySurgery;
var AD = models.addmissionDischarge;

var FC = models.fallopianTubeCancer;
var EC = models.endometrialCancer;
var OC = models.overianCancer;
var CC = models.cervicalCancer;
var VUC = models.vulvaCancer;
var VC = models.vaginalCancer;
var GTN = models.gTNCancer;


router.post('/', function(req, res) {

var arr = [];
var arrIntraOperative=[];
var arrPostOperative=[];
var NumOfCancers=[];
var FCA=[];
var ECA=[];
var OCA=[];
var CCA=[];
var VUCA=[];
var VCA=[];
var GTNA=[];
 

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

								arr[0] = arrIntraOperative; 	//Adding intra operative to array
								
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
				     arr[1] = arrPostOperative;			//Adding Post operative to array
				   
			FC.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }

			] , function(err, countReturn)
			{	
			NumOfCancers[0] = countReturn[0].count;
			EC.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }

			] , function(err, countReturn)
			{	
			NumOfCancers[1] = countReturn[0].count;
			OC.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }

			] , function(err, countReturn)
			{	
			NumOfCancers[2] = countReturn[0].count;
			CC.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }

			] , function(err, countReturn)
			{	
			NumOfCancers[3] = countReturn[0].count;
			VUC.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }

			] , function(err, countReturn)
			{	
			NumOfCancers[4] = countReturn[0].count;
			VC.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }

			] , function(err, countReturn)
			{	
			NumOfCancers[5] = countReturn[0].count;
			GTN.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }

			] , function(err, countReturn)
			{	
			NumOfCancers[6] = countReturn[0].count;
			
			arr[2] = NumOfCancers; 			//Adding NumOfCancers to array
			
			
			//Checking for Living status for each cancer
			//Fallopian
			FC.find( { "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }}, function(err, variableReturned)
			{	
					
						FCA[0] = variableReturned.length;
					
				FC.find({ "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }} , function(err, variableReturned)
			{	
				
						FCA[1] = variableReturned.length;
					
				FC.find( { "LastKnownVitalStatus.AliveWithDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
						FCA[2] = variableReturned.length;
					
				FC.find( { "LastKnownVitalStatus.Dead" : { $exists : true }} , function(err, variableReturned)
			{	
				
						FCA[3] = variableReturned.length;
					
				
				arr[3] = FCA;
				
			// End of Fallopian
			
			//Endometrial
			EC.find( { "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }} , function(err, variableReturned)
			{	
				
						ECA[0] = variableReturned.length;
					
				EC.find({ "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
				
						ECA[1] = variableReturned.length;
					
				EC.find( { "LastKnownVitalStatus.AliveWithDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
				
						ECA[2] = variableReturned.length;
					
				EC.find( { "LastKnownVitalStatus.Dead" : { $exists : true }} , function(err, variableReturned)
			{	
				
				
						ECA[3] = variableReturned.length;
					
				
				arr[4] = ECA;
			// End of Endometrial
			
			//Ovarian
			OC.find( { "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true } }, function(err, variableReturned)
			{	
				
				
						OCA[0] = variableReturned.length;
					
				OC.find({ "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
						OCA[1] = variableReturned.length;
					
					OC.find( { "LastKnownVitalStatus.AliveWithDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
						OCA[2] = variableReturned.length;
					
				OC.find( { "LastKnownVitalStatus.Dead" : { $exists : true }} , function(err, variableReturned)
			{	
				
						OCA[3] = variableReturned.length;
					
				
				arr[5] = OCA;
			// End of Ovarian
			
			//Cervical Cancer
			CC.find( { "lastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
						CCA[0] = variableReturned.length;
					
				CC.find({ "lastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }} , function(err, variableReturned)
			{	
				
						CCA[1] = variableReturned.length;
					
		CC.find( { "lastKnownVitalStatus.AliveWithDisease" : { $exists : true }} , function(err, variableReturned)
			{	
		
						CCA[2] = variableReturned.length;
					
		CC.find( { "lastKnownVitalStatus.Dead" : { $exists : true }} , function(err, variableReturned)
			{	
			
						CCA[3] = variableReturned.length;
					
				
				arr[6] = CCA;
			// End of Cervical
			
		   //Vulva Cancer
			VUC.find( { "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
						VUCA[0] = variableReturned.length;
				
				VUC.find({ "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }} , function(err, variableReturned)
			{	
				
						VUCA[1] = variableReturned.length;
					
				VUC.find( { "LastKnownVitalStatus.AliveWithDisease" : { $exists : true }} , function(err, variableReturned)
			{	
				
						VUCA[2] = variableReturned.length;
					
				VUC.find( { "LastKnownVitalStatus.Dead" : { $exists : true }}, function(err, variableReturned)
			{	
				
						VUCA[3] = variableReturned.length;
					
				arr[7] = VUCA;
			// End of Vulva
			
		   //Vaginal Cancer
			VC.find( { "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }} , function(err, variableReturned)
			{	
				
						VCA[0] = variableReturned.length;
					
				VC.find({ "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
						VCA[1] = variableReturned.length;
					
				VC.find( { "LastKnownVitalStatus.AliveWithDisease" : { $exists : true }} , function(err, variableReturned)
			{	
				
						VCA[2] = variableReturned.length;
					
				VC.find( { "LastKnownVitalStatus.Dead" : { $exists : true }} , function(err, variableReturned)
			{	
				
						VCA[3] = variableReturned.length;
					
				
				arr[8] = VCA;
			// End of Vaginal
			
		  //GTN Cancer
			GTN.find( { "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true } }, function(err, variableReturned)
			{	
				
						GTNA[0] = variableReturned.length;
					
				GTN.find({ "LastKnownVitalStatus.AliveAndNoEvidenceOfDisease" : { $exists : true }} , function(err, variableReturned)
			{	
				
						GTNA[1] = variableReturned.length;
					
				GTN.find( { "LastKnownVitalStatus.AliveWithDisease" : { $exists : true }}, function(err, variableReturned)
			{	
				
						GTNA[2] = variableReturned.length;
					
				GTN.find(  { "LastKnownVitalStatus.Dead" : { $exists : true }}, function(err, variableReturned)
			{	
				
						GTNA[3] = variableReturned.length;
				
				
				arr[9] = GTNA;
				
			// End of GTN
			
							  res.json(arr);
							  console.log("POST response sent.");
			
			});});});});  });});});})  ;});});});});  });});});}); });});});});  });});});}); });});});});
			});});});});});});});
		   });});});});});});});});});});});});});
		  
});
module.exports = router;
