angular.module('galPhoto')

.controller('GalleryCtrl', ['$scope','instagram',function($scope, instagram){
	$scope.images = [];

    var imageSuccess = function(data, status) {
        $scope.images = data;
        console.log(data);
        // console.log($scope.images);
    };

    instagram.getImages().success(imageSuccess);

}])