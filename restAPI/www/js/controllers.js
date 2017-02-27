angular.module('starter')

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})


.controller('PeoplelistCtrl',['$scope','$stateParams','$http',
  function($scope, $stateParams,$http) {

  var vm = this;
  vm.people = [];

        $http({
          method: 'GET',
            url: 'http://swapi.co/api/people/'
        })

        .then(function successCallback(response) {
            // this callback will be called asynchronously when the response is available
            var results = [];
              console.log("success, ",response);
              //$scope.people = response.data.results;
              response.data.results.forEach(function(elem){
                $http({
                  method: 'GET',
                    url: elem.species[0]
                })
                .then(function successCallback(response) {
                    // this callback will be called asynchronously when the response is available
                      console.log("success, ",response);
                      //$scope.people = response.name;
                      elem.species=response.data.name;
                      results.push(elem);
                      console.log(results);
                  }, function errorCallback(response) {

                    console.log("failure, ",response);
                    return null;
                    // called asynchronously if an error occurs or server returns response with an error status.
                  });

              });
              $scope.people=results;


          }, function errorCallback(response) {

            console.log("failure, ",response);
            // called asynchronously if an error occurs or server returns response with an error status.
          });



}])

// .controller('SingleViewCtrl', function($scope) {
//
// });

.controller('SearchCtrl', function($scope) {

});
