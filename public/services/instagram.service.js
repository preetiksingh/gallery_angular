angular.module('galPhoto')

.factory('instagram', function($http){
    return {
        getImages: function() {
            return $http({ 
                method: 'JSONP',
                url: 'https://pixabay.com/api?callback=JSON_CALLBACK',
                params:{
                	key : '3137249-1bdd94c608c4647b54ec81e37',
                	q: 'yellow-flower'
                }
            });
        }
    };
});