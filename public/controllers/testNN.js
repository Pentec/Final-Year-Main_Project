var runApp = angular.module('runAI', [
    'ui.router',
    'ui.bootstrap']);

runApp.controller('AIControl', ['$scope',function($scope, $http){
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


    $scope.patient={
        name: $scope.patientNeural,
        sname: $scope.patientSNameNeural,
        form: "Cervical Cancer"
    };

    $scope.cancerforms=[
        "Cervical Cancer",
        "Endometrial Cancer",
        "Fallopian Tube Cancer",
        "Ovarian Cancer",
        "Vaginal Cancer",
        "Vulva Cancer"
    ];


    $scope.formData={

    };

    $scope.processFormOne = function($event){
        $event.preventDefault();
        $http({
            method: 'POST',
            url: '/neural/testOne',
            data: $.param($scope.formData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data){
            console.log(data);
            if(!data.success){
                console.log('error');
            }
            else{
                //console.log(data);
                $scope.patient.name = data.patientNeural;
                $scope.patient.form = data.cancerforms;
                $scope.patientNeural = data.patientNeural;
                $scope.patientSNameNeural = data.patientSNameNeural;

            }
        })

    };

    $scope.processFormAll = function(){

    };


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

var updateUI = function(output){
    console.log("in function "+ output);
    alert('Hey there ' + output);

}


$("#patientNeuralForm").on("submit", function (e) {
    e.preventDefault();
    var patientName = $('#patientNeural').text(),
        dataString = $("#patientNeuralForm").serialize();

    $.ajax({
        type: 'POST',
        url: '/neural',
        beforeSend: function(xhr){
            $("#search").html("<img src='../images/loader.gif' height = '30px' />");
        },
        data: {
            patient: patientName
        },
        success: function (response, jqXHR){
            alert(response);
            var res = JSON.parse(jqXHR.responseText);
            var resFromNormalize = JSON.stringify(res.outputNodes);
            //$("#NNDiv").html(resFromNormalize);

            if(jqXHR.status != null){
                var res = JSON.parse(jqXHR.responseText);
                var resFromNormalize = JSON.stringify(res.outputNodes);

                //updateUI(resFromNormalize);
            }
            else{
                console.log('heyu!!')
            }
            //$("#patientNNSearch").html("Query");


        },
        error: function() {
            console.log('process error');
        },
        dataType: "json",
        contentType: "application/json"
    });
});


$("#patientOverallForm").on("submit", function (e) {
    e.preventDefault();
    var patientName = $('#patientNeural').text(),
        dataString = $("#patientNeuralForm").serialize();

    $.ajax({
        type: 'POST',
        url: '/neural',
        beforeSend: function(xhr){
            $("#search").html("<img src='../images/loader.gif' height = '30px' />");
        },
        data: {
            patient: patientName
        },
        success: function (response, jqXHR){
            alert(response);
            var res = JSON.parse(jqXHR.responseText);
            var resFromNormalize = JSON.stringify(res.outputNodes);
            //$("#NNDiv").html(resFromNormalize);

            if(jqXHR.status != null){
                var res = JSON.parse(jqXHR.responseText);
                var resFromNormalize = JSON.stringify(res.outputNodes);

                //updateUI(resFromNormalize);
            }
            else{
                console.log('heyu!!')
            }
            //$("#patientNNSearch").html("Query");


        },
        error: function() {
            console.log('process error');
        },
        dataType: "json",
        contentType: "application/json"
    });
});


