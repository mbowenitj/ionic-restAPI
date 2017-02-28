angular.module('starter')
  // .run(function($ionicPlatform) {
  //   $ionicPlatform.ready(function() {
  //     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
  //     // for form inputs)
  //     if(window.cordova && window.cordova.plugins.Keyboard) {
  //       //Comment out this line if you want the next and previous buttons
  //       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  //     }
  //     if(window.StatusBar) {
  //       // Set the statusbar to use the default style, tweak this to
  //       // remove the status bar on iOS or change it to use white instead of dark colors.
  //       StatusBar.styleDefault();
  //     }
  //     })
  // })
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('PeoplelistCtrl',['$scope','$stateParams','$http',
  function($scope, $stateParams,$http) {
    var next;
    var previous;
    $scope.count=0;
    url="http://swapi.co/api/people/";
  var vm = this;
  vm.people = [];

    function get(someUrl){
        $http({
          method: 'GET',
            url: someUrl

        })

        .then(function successCallback(response) {
            // this callback will be called asynchronously when the response is available
            var results = [];
            console.log(response.data.next);
            next=response.data.next;
            previous=response.data.previous;
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
        }
              get(url);
               $scope.previous = function(){
                 if(previous){
                    get(previous);
                    previous=null;
                    $scope.count--;
                 }

               }
               $scope.next = function(){
                 if(next){
                   get(next);
                   next=null;
                   $scope.count++;
                 }

               }
}])

.controller('SingleViewCtrl',['$scope','$stateParams','$http',
  function($scope, $stateParams,$http) {
    var next;
    var previous;
    $scope.count=0;
    url="http://swapi.co/api/people/";
  var vm = this;
  vm.people = [];

    function get(someUrl){
        $http({
          method: 'GET',
            url: someUrl

        })
        .then(function successCallback(response) {
            // this callback will be called asynchronously when the response is available
            var results = [];
            console.log(response.data.next);
            next=response.data.next;
            previous=response.data.previous;
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
        }
        get(url);
         $scope.previous = function(){
           if(previous){
              get(previous);
              previous=null;
              $scope.count--;
           }

         }
         $scope.next = function(){
           if(next){
             get(next);
             next=null;
             $scope.count++;
           }

         }
}])

.controller('SearchCtrl',['$scope','$stateParams','$http',
  function($scope, $stateParams,$http) {
    var next;
    var previous;
    $scope.count=0;
    url="http://swapi.co/api/people/";
    var vm = this;
    vm.people = [];

    function get(someUrl){
        $http({
          method: 'GET',
            url: someUrl

        })

        .then(function successCallback(response) {
            // this callback will be called asynchronously when the response is available
            var results = [];
            console.log(response.data.next);
            next=response.data.next;
            previous=response.data.previous;
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
        }
        get(url);
         $scope.previous = function(){
           if(previous){
              get(previous);
              previous=null;
              $scope.count--;
           }

         }
         $scope.next = function(){
           if(next){
             get(next);
             next=null;
             $scope.count++;
           }

         }

}])
.controller('PeoplelistCtrl',['$scope','$stateParams','$http',
  function($scope, $stateParams,$http) {
    var next;
    var previous;
    $scope.count=0;
    url="http://swapi.co/api/people/";
  var vm = this;
  vm.people = [];

    function get(someUrl){
        $http({
          method: 'GET',
            url: someUrl

        })

        .then(function successCallback(response) {
            // this callback will be called asynchronously when the response is available
            var results = [];
            console.log(response.data.next);
            next=response.data.next;
            previous=response.data.previous;
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
        }
              get(url);
               $scope.previous = function(){
                 if(previous){
                    get(previous);
                    previous=null;
                    $scope.count--;
                 }

               }
               $scope.next = function(){
                 if(next){
                   get(next);
                   next=null;
                   $scope.count++;
                 }

               }
}])

.controller('SingleViewCtrl',['$scope','$stateParams','$http',
  function($scope, $stateParams,$http) {
    var next;
    var previous;
    $scope.count=0;
    url="http://swapi.co/api/people/";
  var vm = this;
  vm.people = [];

    function get(someUrl){
        $http({
          method: 'GET',
            url: someUrl

        })
        .then(function successCallback(response) {
            // this callback will be called asynchronously when the response is available
            var results = [];
            console.log(response.data.next);
            next=response.data.next;
            previous=response.data.previous;
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
        }
        get(url);
         $scope.previous = function(){
           if(previous){
              get(previous);
              previous=null;
              $scope.count--;
           }

         }
         $scope.next = function(){
           if(next){
             get(next);
             next=null;
             $scope.count++;
           }

         }
}])

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  }, function(error){
    console.log("Could not get location");
  });

});
