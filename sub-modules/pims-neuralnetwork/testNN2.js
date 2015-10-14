//Maybe have it as an AI class
var synaptic = require('synaptic'), // this line is not needed in the browser
    fs = require('fs'),
    logging = require('../../utils/logging.js').logger(),
    meld = require('meld');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


//nTrials may have to be the number of patients for overall cancer type; just for training
var nTrials = 20000,//for some number of epochs train network and feed nodes until desired output is obtained
    learningRate = .12,
    maxEpochs = 2000,
    doneTraining = false;


// extend the prototype chain
Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;
function Perceptron(input, hidden, output)
{
    // create the layers
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    // connect the layers
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers
    Perceptron.prototype.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

//this variable may be used across different functions
var myPercept = new Perceptron(13, 7, 2);
var myPerceptTest = new Perceptron(13, 7, 2);

myPercept.project(myPerceptTest);

//will test network on file
var writeNetworkToFile = function(JsonNetwork){
    console.log('json ');
    fs.writeFileSync("./lib/pims-neuralnetwork/trained/survive.json", JsonNetwork);

    console.log('done writing');
    //    myPercept = null

}


var checkNumPatients = 0;

/**
 * will read multiple names from database to train network on many patients
 * dataNormalizer will be called so that it will be fed names from db and then
 * it will normalize input values from patient information and array will be fed
 * into network 'activate' method and 'propagate' method will be called
 * //write network to file when done
 * may have to call timer to regularly update network
 *
 * @param inputValuesArray
 * @param callback
 */
var trainMany = function(inputValuesArray, numPatients, callback){
    //call activate and propagate

    console.log('in training ');
    var checkOutput0 = 0;
    checkNumPatients++;

    for(var i = 0; i < nTrials; i++){

        if(i + 1 == nTrials){
            checkOutput0 = myPercept.activate(inputValuesArray);
            myPerceptTest.activate();
            //first target says survival; second target says death
            myPercept.propagate(learningRate, [0.874656945, 0.127895525]);//back-propagate learning rate and target of 1; survive cancer;
            console.log('Done Hello 0 ' + i + "   " + checkOutput0);
            doneTraining = false;
        }
        else{
            myPercept.activate(inputValuesArray);
            myPerceptTest.activate();
            myPercept.propagate(learningRate, [0.874656945, 0.267895525]);//back-propagate learning rate and target of 1; survive cancer;
            doneTraining = false;
        }



    }


    if(checkNumPatients + 1 == numPatients){
        //write trained Network to JSON file
        doneTraining = true;
        var exported = Perceptron.prototype.toJSON();
        writeNetworkToFile(JSON.stringify(exported, null, 4));//pretty print JSON

    }

    /*console.log('json ' + JSON.stringify(exported));
     console.log('json import ' + JSON.stringify(imported));*/
    return callback(doneTraining);
    //will return output values when testing network
    //will return output values when testing network
}

trainMany = meld.before(trainMany, function() {
    if(arguments[0].user != null)
        logging.info("pims-neuralnetwork module | trainMany service request | for User: [" + arguments[0].user.username +  "] | with Access rights [" + arguments[0].user.user_rights + "]");

});



/**
 * Read from file here and file will have already trained network
 * to test network per patient name, will call dataNormalize method
 * and feed patient input values and will call trained network
 *
 * @param filename
 */
var testNetwork = function(req, filename, callback){
    fs.readFile('./sub-modules/pims-neuralnetwork/trained/survive.json', 'utf8', function(err, data){
        if(err){
            throw err;
            return callback(false);
        }
        else{
            if(filename != null || filename != ""){
                //console.log(data);

                var testingSet = [
                    {
                        input: filename,
                        output: [0.874656945, 0.127895525]
                    }

                ];

                //Try out to test NN
                var imported = Network.fromJSON(JSON.parse(data));
                /*var importTest = Network.fromJSON(JSON.parse(data));
                 imported.project(importTest);
                 var tester1 = imported.activate(filename);
                 var tester = importTest.activate();
                 console.log('Testing NN 1' + tester1);
                 console.log('Testing NN' + tester);
                 */

                /*var output = 0;
                 for(var c = 0; c < 20000; c++){

                 if(c + 1 == 20000){
                 output = imported.activate(filename);
                 //imported.propagate(learningRate, [0.874656945, 0.127895525]);
                 console.log("-----------------------------------------");
                 console.log(output);

                 }
                 else{
                 imported.activate(filename);
                 //imported.propagate(learningRate, [0.874656945, 0.127895525]);
                 }

                 //imported.activate(filename);
                 //myPercept.propagate(learningRate, [0.874656945, 0.127895525]);

                 }*/
                var trainer = new Trainer(imported);
                var output = trainer.test(testingSet, {
                    rate: .12,
                    iterations: 2000,
                    error: .143,
                    shuffle: true
                });

                /*console.log("-----------------------------------------");
                console.log(output);*/
                return callback(output.error);
            }
            else{
                return callback(null);
            }

        }
    });
}


testNetwork = meld.before(testNetwork, function() {
    if(arguments[0].user != null)
        logging.info("pims-neuralnetwork module | testNetwork service request | for User: [" + arguments[0].user.username +  "] | with Access rights [" + arguments[0].user.user_rights + "]");

});

var calculatePercentage = function(req, total, survive, die, callback){
    var percentSurvive = 0, percentDie = 0;

    if(total <= 0)
    {
        var allPercent = {
            percentSurvive: 0,
            percentDie : 0
        }
        return callback(allPercent);
    }
    else{
        percentSurvive = ((survive/total).toFixed(3)) * 100;
        percentDie = ((die/total).toFixed(3)) * 100;

        if(percentSurvive >= 0 && percentDie >= 0){
            var allPercent = {
                percentSurvive: percentSurvive,
                percentDie : percentDie
            }

            return callback(allPercent);
        }
        else{
            var allPercent = {
                percentSurvive: 0,
                percentDie : 0
            }

            return callback(allPercent);
        }
    }

}

calculatePercentage = meld.before(calculatePercentage, function() {
    if(arguments[0].user != null)
        logging.info("pims-neuralnetwork module | calculatePercentage service request | for User: [" + arguments[0].user.username +  "] | with Access rights [" + arguments[0].user.user_rights + "]");

});


/**
 *
 * @param inputValuesArray
 * @param callback
 */
var trainNetwork = function(inputValuesArray, callback){


    //call activate and propagate
    var checkOutput0 = 0;

    for(var i = 0; i < nTrials; i++){

        if(i + 1 == nTrials){
            checkOutput0 = myPercept.activate(inputValuesArray);
            //first target says survival; second target says death
            myPercept.propagate(learningRate, [0.874656945, 0.127895525]);//back-propagate learning rate and target of 1; survive cancer;
            console.log('Done Hello 0 ' + i + "   " + checkOutput0);
            doneTraining = true;
        }
        else{
            myPercept.activate(inputValuesArray);
            myPercept.propagate(learningRate, [0.874656945, 0.267895525]);//back-propagate learning rate and target of 1; survive cancer;
            doneTraining = false;
        }



    }


    if(doneTraining){
        //write trained Network to JSON file
        //var exported = Perceptron.prototype.toJSON();
        //writeNetworkToFile(JSON.stringify(exported, null, 4));//pretty print JSON
        //doneTraining = false;
    }

    //var imported = Network.fromJSON(exported);

    /*console.log('json ' + JSON.stringify(exported));
    console.log('json import ' + JSON.stringify(imported));*/
    return callback(checkOutput0);
    //will return output values when testing network

}


trainNetwork = meld.before(trainNetwork, function() {
    if(arguments[0].user != null)
        logging.info("pims-neuralnetwork module | trainNetwork service request | for User: [" + arguments[0].user.username +  "] | with Access rights [" + arguments[0].user.user_rights + "]");

});









module.exports = {
    calculatePercentage: calculatePercentage,
    trainMany: trainMany,
    trainNetwork: trainNetwork,
    testNetwork: testNetwork
}



