  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
var app = angular.module('cakeApp', ['ionic', 'ngRoute', 'ngResource', 'ionic.rating', 'ngNotificationsBar']);

app.run(function ($ionicPlatform, $http) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            
            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }        
    });
});

app.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['Content-Type'] = 'application/json';
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'cakeHomeController'
    })
    $urlRouterProvider.otherwise("/");
});
            
  

