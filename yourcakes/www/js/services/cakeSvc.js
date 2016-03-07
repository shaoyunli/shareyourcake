
angular.module('cakeApp')
.factory('cakeSvc', function($http, $q) {
	
    return service = {
        getCakes: function () {
            
            var deferred = $q.defer();            

            $http.get('/js/data/cakes.json')
            .success(function (data, status) {
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config){
                deferred.reject(data);
            })

            return deferred.promise;
        },

        get: function (id, callback) {
            var deferred = $q.defer();

            $http.get('/js/data/cakes.json')
            .success(function (data, status) {
                var cake = null;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        cake = data[i];
                        break;
                    }
                }

                deferred.resolve(cake);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            })
            
            return deferred.promise;
        },

        add: function (cake, callback) {
            var deferred = $q.defer();

            $http.get('/js/data/cakes.json')
            .success(function (data, status) {
                data.push(cake);                
                deferred.resolve(data);
            })
            .error(function (data, status, headers, config) {
                deferred.reject(data);
            })
            
            return deferred.promise;
        }

    };
    
})
