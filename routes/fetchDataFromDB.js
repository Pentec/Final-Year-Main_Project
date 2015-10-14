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
			
			//Checking for Diagnosis
			//Miscarriage
			
			AD.find( { "Miscarriage.Threatening" : { $exists : true }}, function(err, myvar)
			{	
						console.log(myvar);
						ONEMiscarriage[0] = myvar.length;
					
				AD.find({ "Miscarriage.Complete" : { $exists : true }} , function(err, myvar)
			{	
				
						ONEMiscarriage[1] = myvar.length;
					
				AD.find( { "Miscarriage.Incomplete" : { $exists : true }}, function(err, myvar)
			{	
				
						ONEMiscarriage[2] = myvar.length;
					
				AD.find( { "Miscarriage.Septic" : { $exists : true }} , function(err, myvar)
			{	
				
						ONEMiscarriage[3] = myvar.length;
					
				
				arr[10] = ONEMiscarriage;
				
			// End of Miscarriage

			//Salpingitis
			AD.find( { "Salpingitis.ASOI" : { $exists : true }} , function(err, myvar)
			{	
				
						TWOSalpingitis[0] = myvar.length;
					
				AD.find({ "Salpingitis.ASOII" : { $exists : true }}, function(err, myvar)
			{	
				
				
						TWOSalpingitis[1] = myvar.length;
					
				AD.find( { "Salpingitis.ASOIII" : { $exists : true }}, function(err, myvar)
			{	
				
				
						TWOSalpingitis[2] = myvar.length;
					
				AD.find( { "Salpingitis.ASOIV" : { $exists : true }} , function(err, myvar)
			{	
				
				
						TWOSalpingitis[3] = myvar.length;
					
				
				arr[11] = TWOSalpingitis;
			// End of Salpingitis

			//Ectopic
			AD.find( { "Ectopic.Ruptured" : { $exists : true } }, function(err, myvar)
			{	
				
				
						THREEEctopic[0] = myvar.length;
					
				AD.find({ "Ectopic.Unruptured" : { $exists : true }}, function(err, myvar)
			{	
				
						THREEEctopic[1] = myvar.length;
					
				
				arr[12] = THREEEctopic;
			// End of Ectopic

			//Oncology
		AD.find( { "Oncology.Cervix" : { $exists : true }}, function(err, myvar)
			{	
				
						FOUROncology[0] = myvar.length;
					
		AD.find({ "Oncology.Endometrium" : { $exists : true }} , function(err, myvar)
			{	
				
						FOUROncology[1] = myvar.length;
					
		AD.find( { "Oncology.Ovarian" : { $exists : true }} , function(err, myvar)
			{	
		
						FOUROncology[2] = myvar.length;
					
		AD.find( { "Oncology.Vulva" : { $exists : true }} , function(err, myvar)
			{	
			
						FOUROncology[3] = myvar.length;
		AD.find( { "Oncology.Vagina" : { $exists : true }} , function(err, myvar)
			{	
		
						FOUROncology[4] = myvar.length;
					
		AD.find( { "Oncology.ChorioGTD" : { $exists : true }} , function(err, myvar)
			{	
			
						FOUROncology[5] = myvar.length;
				
				
				arr[13] = FOUROncology;
			// End of 
			
			

			var myString = "Neon";
							  res.json(myString);
							  console.log("POST response sent.");
	
			});});});}); });});});})  ;});});});});  });});});}); 
			
		  
});
module.exports = router;
