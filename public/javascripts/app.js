// define angular module
const formSubmissionApp = angular.module('formSubmissionApp', []);

// define angular controller
formSubmissionApp.controller('MainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache){

    // setup default data
    $scope.formdata = {
        "id": "",
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        country: "",
        zip: "",
        phone: 1234567890,
        comments: "",
        createdDate: "",
        updatedDate: "",
        subscribed: true
    };


    // use POST method on form submit: Add new data
    $scope.addNewSubmission = function(){
        if($scope.formdata){
            $http.post('/api/submission', $scope.formdata).then(function(response){
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
        }
    };

    // use GET method to retrieve submission data
    $scope.viewSubmission = function(){
        if($scope.formdata.id){
            $http.get('/api/submission/' + $scope.formdata.id).then(function(response){
                $scope.status = response.status;
                $scope.data = response.data;
                console.log(response.data);
            }, function(response){
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
        }
    };

    // use POST method to update submission data
    $scope.updateSubmission = function(){
        if($scope.formdata.id){
            $http.post('/api/submission/' + $scope.formdata.id, $scope.formdata).then(function(response){
                $scope.status = response.status;
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
        }
    };

    // use DELETE method to delete submission data
    $scope.deleteSubmission = function(){
        if($scope.formdata.id){
            $http.delete('/api/submission/' + $scope.formdata.id).then(function(response){
                $scope.data = response.data;
                $scope.status = response.status;
            }, function(response){
                $scope.status = response.status || 'Request failed';
                $scope.data = response.data;
            });
        }
    };


}]);