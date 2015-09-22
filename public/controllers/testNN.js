var runApp = angular.module('runAI', [
    'ui.router',
    'ui.bootstrap']);

runApp.controller('AIControl', ['$scope',function($scope, $timeout, $location){
    $scope.test = 'hello World!';
    $scope.startedTraining = false;

    var getNNCanvas = function(){
        var htmlCanvas = document.getElementById('neuralCanvas'),
            context = htmlCanvas.getContext('2d');
    }

    $scope.addNumber = function(){
        var res = 2 + 5;
        $scope.test = res;
    };

    var patientNNInput = document.getElementById('patientNeural');

    $scope.useValue = function(patientNeural) {
        $scope.patientNeural = patientNeural
    };

    /*$scope.NameValue = "";
    function useValue() {
        if(patientNNInput.value != '')
        {
            $scope.patientNeural = patientNNInput.value;
            // use it
            //alert(NameValue); // just to show the new value
        }

    }*/

    var myNetwork = null;
    $scope.outputNodes = [];

    var myPercept = null;
    var iteration = 0;
    var inputs = 0;
    var nTrials = 2000,//for some number of epochs train network and feed nodes until desired output is obtained
        learningRate = .12,
        maxEpochs = 2000,
        momentum = 0,
        dataseperation = 0.5;//for testing the NN 50%
    var check = 0;
    var i =0;

    $scope.stopTrain = function(){

        $scope.test = 100;//just to test and see if Angular front-end is working

        //clearInterval(trainNetwork);
        if(i < maxEpochs)
        {
            $scope.startedTraining = false;
            i = maxEpochs;
        }
        else
            i = 0;


    }


    $scope.startTrain = function(){
        //var myPercept = new Perceptron(10, 7, 2);
        //Number of hidden nodes, approximately average of Number(inputNodes) and Number(outputNodes)
        myPercept = new synaptic.Architect.Perceptron(13, 9, 2); //13 input nodes

        $scope.test = 200;//just to test and see if Angular front-end is working
        $scope.startedTraining = true;//tells UI front-end when to begin showing the training

        if($scope.startedTraining)
        {
            //$scope.startedTraining = true;
            //trainNetwork();
            setTimeout(trainNetwork, 5000);

        }


        //testNetwork();
        //preview(maxEpochs);//will display an changes to NN here and will call testNetwork() method in here
        //preview(check);
    }

    var trainNetwork = function(){
        console.log("trainNetwork ");


        /*check = myPercept.activate([0.5,0.7,0.3,0.5568950,0.2478956,0.568945,0.7254698416,0.412356940,0.15,0.6784,0.325648,0.55578415,0.433333]);
        console.log("check " + check);
        //myPercept.propagate(learningRate, [1]);//back-propagate learning rate and target of 1; survive cancer;
        myPercept.propagate(learningRate, [0.874656945]);//back-propagate learning rate and target of 1; survive cancer;*/


        //train network
        //loop through for each set of inputs;
        // will have to figure out how to feed test data
        // when testing NN, either directly from database or store somewhere
        //depending on inputs loop will train for survival or death
        for(i = 0; i < maxEpochs; i++) {
            //call function that standardizes inputs from each schema
            //at each iteration through loop, same inputs will be fed through network
            //inputs = normalizeInputs(); (will have to be an array)

            //console.log("Hello " + i);
            iteration = 0;

            //check = myPercept.activate([1,1,1,1,1,1,1,1,1,1]);
            check = myPercept.activate([0.5,0.7,0.3,0.5568950,0.2478956,0.568945,0.7254698416,0.412356940,0.15,0.6784,0.325648,0.55578415,0.433333]);
            //console.log("check " + check);
            //myPercept.propagate(learningRate, [1]);//back-propagate learning rate and target of 1; survive cancer;
            //myPercept.propagate(learningRate, [0.874656945]);//back-propagate learning rate and target of 1; survive cancer;
            myPercept.propagate(learningRate, [0.674656945, 0.267895525]);//back-propagate learning rate and target of 1; survive cancer;


            //myPercept.activate([0,0,0,0,0,0,0,0,0,0]);
            //myPercept.propagate(learningRate, [0]);//back-propagate learning rate and target of 0;  die from cancer

            if(i + 1 == maxEpochs)
            {
                alert('done');
            }


        }




    }

    //function that will return target values for NN
    var getTargetVals = function(){

    }


    var preview = function(){
        //iterations to display on UI (for testing purposes whilst training and testing the network)
        //can perhaps show some Fun animation to keep user calm during processing

        $('#iterate').text(++iteration);
        setTimeout(trainNetwork, 100);

        /*if ($location.$$path == '/neural')
            setTimeout(trainNetwork, 100);*/


    }

    var testNetwork = function(){
        //test network
        $scope.outputNodes = [];

        $scope.outputNodes.push({
            input: '0 0 0 0 0 0 0 0 0 0',
            output: myPercept.activate([0,0,0,0,0,0,0,0,0,0])[0].toFixed(3),
            target: 0
        });
        $scope.outputNodes.push({
            input: '0 1 0 1 0 1 0 1 0 0',
            output: myPercept.activate([0,1,0,1,0,1,0,1,0,0])[0].toFixed(3),
            target: 0
        });
        $scope.outputNodes.push({
            input: '1 1 1 1 1 0 0 0 0 0',
            output: myPercept.activate([1,1,1,1,1,0,0,0,0,0])[0].toFixed(3),
            target: 1
        });
        $scope.outputNodes.push({
            input: '1 1 1 1 1 1 1 1 1 1',
            output: myPercept.activate([1,1,1,1,1,1,1,1,1,1])[0].toFixed(3),
            target: 1
        });

        var checkVal = myPercept.activate([0,0,0,0,0,0,0,0,0,0]); //check output
        console.log(checkVal);
    }

    var trainFromFile = function(myNetwork){

        $scope.myTrain = new Trainer(myNetwork);//for later use
        //will only use train() once network has been trained well enough
        $scope.myTrain.train(trainingSet,{
            rate: 0.6,
            iterations: 200,
            error: .005,
            shuffle: true,
            log: 50
        });

    }

    /*var exported = myNetwork.toJSON();
    var imported = Network.fromJSON(exported);*/
}]);

runApp.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state(
            'login',
            {
                url: '/login',
                templateUrl: '../../views/login',
                controller: 'runAI'
            });

        $stateProvider.state(
            'neural',
            {
                url: '/neural',
                templateUrl: '../../pims-neuralnet/testAI',
                controller: 'runAI'
            });

        $urlRouterProvider.otherwise('login')
    }
]);



