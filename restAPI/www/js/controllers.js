angular.module('starter')
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        //Comment out this line if you want the next and previous buttons
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
      })
  })
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
