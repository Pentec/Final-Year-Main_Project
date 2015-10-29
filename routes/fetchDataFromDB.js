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
var login = require(submodules + 'pims-login/login');
var sess;


router.post('/', login.isLoggedIn,function(req, res) {
sess = req.session;

var arr = [];
var arrIntraOperative=[];
var arrPostOperative=[];
var NumOfCancers=[];
//Cancer arrays
var FCA=[];
var ECA=[];
var OCA=[];
var CCA=[];
var VUCA=[];
var VCA=[];
var GTNA=[];

//Arrays for surgical procedures

//1
var ONEMiscarriage = [];
	var ONEthreatening = [];
	var ONEcomplete = [];
	var ONEincomplete = [];
	var ONEseptic = [];
//2
var TWOSalpingitis = [];
	var TWOASOI = [];
	var TWOASOII = [];
	var TWOASOIII = [];
	var TWOASOIV = [];
//3
var THREEEctopic = [];
	var THREERuptured = [];
	var THREEUnruptured = [];
//4
var FOUROncology = [];
	var FOURCervix = [];
	var FOUREndometrium = [];
	var FOUROvarian = [];
	var FOURVulva = [];
	var FOURVagina = [];
	var FOURChorioGTD = [];

	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
		  
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
			

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
			
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			
		
		
		//Checking for Diagnosis
			//Miscarriage
	   AD.aggregate([ {$match:{ "Miscarriage.Threatening" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
						//console.log(myvar[0].count);
						ONEMiscarriage[0] = myvar[0].count;
					
	   AD.aggregate([ {$match:{ "Miscarriage.Complete" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						ONEMiscarriage[1] = myvar[0].count;
					
		AD.aggregate([ {$match:{ "Miscarriage.Incomplete" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						ONEMiscarriage[2] = myvar[0].count;
					
		AD.aggregate([ {$match:{ "Miscarriage.Septic" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						ONEMiscarriage[3] = myvar[0].count;
					
				
				arr[10] = ONEMiscarriage;
				
			// End of Miscarriage

			//Salpingitis
		AD.aggregate([ {$match:{ "Salpingitis.ASOI" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
						TWOSalpingitis[0] = myvar[0].count;
		AD.aggregate([ {$match:{ "Salpingitis.ASOII" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						TWOSalpingitis[1] = myvar[0].count;
						
		AD.aggregate([ {$match:{ "Salpingitis.ASOIII" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						TWOSalpingitis[2] = myvar[0].count;
						
		AD.aggregate([ {$match:{ "Salpingitis.ASOIV" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						TWOSalpingitis[3] = myvar[0].count;
					
				
				arr[11] = TWOSalpingitis;
			// End of Salpingitis

			//Ectopic
		AD.aggregate([ {$match:{ "Ectopic.Ruptured" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						THREEEctopic[0] = myvar[0].count;
						
		AD.aggregate([ {$match:{ "Ectopic.Unruptured" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)					
			{	
				
						THREEEctopic[1] =myvar[0].count;
					
				
				arr[12] = THREEEctopic;
			// End of Ectopic

			//Oncology
			AD.aggregate([ {$match:{ "Oncology.Cervix" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						FOUROncology[0] = myvar[0].count;
			AD.aggregate([ {$match:{ "Oncology.Endometrium" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
				
						FOUROncology[1] = myvar[0].count;
			AD.aggregate([ {$match:{ "Oncology.Ovarian" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)	
			{	
		
						FOUROncology[2] = myvar[0].count;
		AD.aggregate([ {$match:{ "Oncology.Vulva" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)	
			{	
			
						FOUROncology[3] = myvar[0].count;
		AD.aggregate([ {$match:{ "Oncology.Vagina" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
		
						FOUROncology[4] = myvar[0].count;
		AD.aggregate([ {$match:{ "Oncology.ChorioGTD" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, myvar)
			{	
			
						FOUROncology[5] = myvar[0].count;
				
				
				arr[13] = FOUROncology;
			// End of Oncology
			
			
			//Check for each firm *************************************************************************************************************
			//Miscarriage Threatening
		AD.aggregate([ {$match:{ "Miscarriage.Threatening" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEthreatening[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Miscarriage.Threatening" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEthreatening[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Miscarriage.Threatening" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEthreatening[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Miscarriage.Threatening" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEthreatening[3] = resResult[0].count;
					
					arr[14] = ONEthreatening;
					
			//Miscarriage Complete	
		AD.aggregate([ {$match:{ "Miscarriage.Complete" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEcomplete[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Miscarriage.Complete" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEcomplete[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Miscarriage.Complete" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEcomplete[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Miscarriage.Complete" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEcomplete[3] = resResult[0].count;
					
					arr[15] = ONEcomplete;

			//Miscarriage Incomplete	
		AD.aggregate([ {$match:{ "Miscarriage.Incomplete" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEincomplete[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Miscarriage.Incomplete" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEincomplete[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Miscarriage.Incomplete" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEincomplete[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Miscarriage.Incomplete" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEincomplete[3] = resResult[0].count;
					
					arr[16] = ONEincomplete;
					
			//Miscarriage Septic	
		AD.aggregate([ {$match:{ "Miscarriage.Septic" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEseptic[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Miscarriage.Septic" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEseptic[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Miscarriage.Septic" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEseptic[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Miscarriage.Septic" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					ONEseptic[3] = resResult[0].count;
					
					arr[17] = ONEseptic;
					
	//-----------------------------------------------------------------------------------------------------------------------------------------------
			//Salpingitis ASOI
		AD.aggregate([ {$match:{ "Salpingitis.ASOI" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOI[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Salpingitis.ASOI" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOI[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Salpingitis.ASOI" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOI[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Salpingitis.ASOI" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOI[3] = resResult[0].count;
					
					arr[18] = TWOASOI;
					
			//Salpingitis ASOII	
		AD.aggregate([ {$match:{ "Salpingitis.ASOII" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOII[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Salpingitis.ASOII" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOII[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Salpingitis.ASOII" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOII[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Salpingitis.ASOII" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOII[3] = resResult[0].count;
					
					arr[19] = TWOASOII;

			//Salpingitis ASOIII	
		AD.aggregate([ {$match:{ "Salpingitis.ASOIII" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOIII[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Salpingitis.ASOIII" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOIII[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Salpingitis.ASOIII" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOIII[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Salpingitis.ASOIII" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOIII[3] = resResult[0].count;
					
					arr[20] = TWOASOIII;
					
			//Salpingitis ASOIV	
		AD.aggregate([ {$match:{ "Salpingitis.ASOIV" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOIV[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Salpingitis.ASOIV" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOIV[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Salpingitis.ASOIV" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOIV[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Salpingitis.ASOIV" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					TWOASOIV[3] = resResult[0].count;
					
					arr[21] = TWOASOIV;
					
//-----------------------------------------------------------------------------------------------------------------------------------------------
			//Ectopic Ruptured
		AD.aggregate([ {$match:{ "Ectopic.Ruptured" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					THREERuptured[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Ectopic.Ruptured" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					THREERuptured[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Ectopic.Ruptured" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					THREERuptured[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Ectopic.Ruptured" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					THREERuptured[3] = resResult[0].count;
					
					arr[22] = THREERuptured;
					
			//Ectopic Unruptured
		AD.aggregate([ {$match:{ "Ectopic.Unruptured" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					THREEUnruptured[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Ectopic.Unruptured" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					THREEUnruptured[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Ectopic.Unruptured" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					THREEUnruptured[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Ectopic.Unruptured" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					THREEUnruptured[3] = resResult[0].count;
					
					arr[23] = THREEUnruptured;

		//-----------------------------------------------------------------------------------------------------------------------------------------------
			//Oncology Cervix
		AD.aggregate([ {$match:{ "Oncology.Cervix" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURCervix[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Oncology.Cervix" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURCervix[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Oncology.Cervix" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURCervix[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Oncology.Cervix" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURCervix[3] = resResult[0].count;
					
					arr[24] = FOURCervix;
					
			//Oncology Endometrium	
		AD.aggregate([ {$match:{ "Oncology.Endometrium" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOUREndometrium[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Oncology.Endometrium" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOUREndometrium[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Oncology.Endometrium" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOUREndometrium[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Oncology.Endometrium" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOUREndometrium[3] = resResult[0].count;
					
					arr[25] = FOUREndometrium;

			//Oncology Ovarian	
		AD.aggregate([ {$match:{ "Oncology.Ovarian" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOUROvarian[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Oncology.Ovarian" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOUROvarian[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Oncology.Ovarian" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOUROvarian[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Oncology.Ovarian" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOUROvarian[3] = resResult[0].count;
					
					arr[26] = FOUROvarian;
					
			//Oncology Vulva	
		AD.aggregate([ {$match:{ "Oncology.Vulva" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURVulva[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Oncology.Vulva" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURVulva[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Oncology.Vulva" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURVulva[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Oncology.Vulva" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURVulva[3] = resResult[0].count;
					
					arr[27] = FOURVulva;
					
		//Oncology Vagina
		AD.aggregate([ {$match:{ "Oncology.Vagina" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURVagina[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Oncology.Vagina" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURVagina[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Oncology.Vagina" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURVagina[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Oncology.Vagina" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURVagina[3] = resResult[0].count;
					
					arr[28] = FOURVagina;
					
			//Oncology ChorioGTD	
		AD.aggregate([ {$match:{ "Oncology.ChorioGTD" : true, "firm.G1" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURChorioGTD[0] = resResult[0].count;
		AD.aggregate([ {$match:{ "Oncology.ChorioGTD" : true, "firm.G2" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURChorioGTD[1] = resResult[0].count;
	    AD.aggregate([ {$match:{ "Oncology.ChorioGTD" : true, "firm.G3" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURChorioGTD[2] = resResult[0].count;
	     AD.aggregate([ {$match:{ "Oncology.ChorioGTD" : true, "firm.ONC" : true}},{$group: {_id: null, count: {$sum: 1}}}], function(err, resResult)
			{	
					FOURChorioGTD[3] = resResult[0].count;
					
					arr[29] = FOURChorioGTD;
					
					
				     	     //*******************************
							  res.json(arr);
							  console.log("POST response sent.");
				             //*******************************
	
			});});});});   });});});}); });});});});   });});});});  });});});});   });});});});  //Oncology
			});});});});   });});});});  //ectopic
			});});});});   });});});});  });});});});   });});});}); //sal
			});});});});   });});});});  });});});});   });});});}); //miscarriage
			});});});});  });});});})  ;});});});});  });});});});
			});});});});  });});});})  ;});});});});  });});});}); });});});});  });});});}); });});});});
			});});});});});});});
		   });});});});});});});});});});});});});

});
module.exports = router;
