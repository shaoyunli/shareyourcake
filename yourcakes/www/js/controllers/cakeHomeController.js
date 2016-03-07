var cakeHomeController = angular.module('cakeApp');

cakeHomeController.controller('cakeHomeController',

	function ($scope, $ionicModal, cakeSvc, notifications) {
    
    cakeSvc.getCakes().then(function (results) {
        $scope.cakes = results;
    }, function () {
        notifications.showError('Error occurs when getting the data.');
    });
    
    // Cake Detail Modal
    $ionicModal.fromTemplateUrl('modal/cakeDetails.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.cakeDetailsModal = modal;
    });
    
    $scope.viewDetails = function (id) {
        if (id != null) {
            cakeSvc.get(id).then(function (result) {                
                $scope.cake = result;
            }, function () {                
                notifications.showError('Error occurs when getting the data.');
            });            

            $scope.cakeDetailsModal.show();
        }
    }

    $scope.closeDetailModal = function () {
        $scope.cakeDetailsModal.hide();
    }

    // Add Cake Modal
    $ionicModal.fromTemplateUrl('modal/addCake.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.addCakeModal = modal;
    });

    $scope.addCake = function (){
        var newCake = {
            name: "",
            comment: "",
            imageUrl: "",
            yumFactor: 0
        }
        
        $scope.newCake = newCake;
        $scope.addCakeModal.show();
    }

    $scope.closeAddCakeModal = function () {
        $scope.addCakeModal.hide();
    }

    $scope.save = function () {
        cakeSvc.add($scope.newCake).then(function () {
            cakeSvc.getCakes().then(function (results) {
                $scope.cakes = results;
                $scope.addCakeModal.hide();
            }, function (payload) {                
                notifications.showError('Error occurs when getting the data.');
            })
        }, 
        function (payload) {
            notifications.showError('Error occurs when saving the data.');
        }, function(message) {
                console.log(message);
            }
        )
    }
})