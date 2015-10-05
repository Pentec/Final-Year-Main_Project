var fileName, trainingObject, fs, perceptron;

function AI(JSONFile){
    var Architect = require('synaptic').Architect;
    fs = require('fs');
    fileName = JSONFile;
    trainingObject = JSON.parse(fs.readFileSync(fileName));
    perceptron = new Architect.Perceptron(2,3,1);
    console.log("Neural Network Created");
}

/** Function activates using the form inputs and determines the length of admission for the patient
 *  @param input
 * */
 AI.prototype.activate = function(input){
    return perceptron.activate(input);
};

/**
 * Trains the neural network on the newer data.
 */
AI.prototype.train = function(){
    perceptron.trainer.train(trainingObject);
    console.log("Training occurred");
};

/**
 * Adds a new set of input data to the training data
 * @param input
 */
//TODO Updating JSON file via javascript
AI.prototype.addTrainer = function(input){
    if(trainingObject.length>10){
        trainingObject.push(input);
        fs.writeFile(fileName, JSON.stringify(trainingObject), function(err){
            if(err) return console.log(err);
            console.log(JSON.stringify(file));
            console.log("Writing to " + fileName);
        })
    }else{
        trainingObject.push(input);
        fs.writeFile(fileName, JSON.stringify(trainingObject), function(err){
            if(err) return console.log(err);
            console.log(JSON.stringify(trainingObject));
            console.log("Writing to " + fileName);
        })
    }
};

module.exports = AI;