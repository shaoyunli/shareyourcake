
angular.module('cakeApp')
.factory('cakeSvc', function($http, $q) {
    
    return service = {

        getCakes: function() {
            var deferred = $q.defer();
        
            $http.get('http://52.31.91.48:5000/api/cakes')
                .success(function (data, status) {
                deferred.resolve(data);
            })
                .error(function (data, status, headers, config) {
                deferred.reject(data);
            })
        
            return deferred.promise;
        },

        get: function (id, callback) {
            var deferred = $q.defer();

            $http.get('http://52.31.91.48:5000/api/cakes/' + id)
            .success(function (data, status) {  
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            })
            
            return deferred.promise;
        },

        add: function (cake, callback) {
            //var deferred = $q.defer();
            
            return $http({
                url: 'http://52.31.91.48:5000/api/cakes/',
                method: 'POST',                
                data: cake,
                headers: { 'Content-Type': 'application/json' } 
            });

            //$http.post('http://52.31.91.48:5000/api/cakes/', cake)
            //.success(function (data, status) {                
            //        deferred.resolve(data);
            //})
            //.error(function (data, status, headers, config) {
            //    deferred.reject(data);
            //})
            
            //return deferred.promise;
        }

    };
    
})
