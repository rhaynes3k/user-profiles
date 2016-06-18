angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	$scope.currentUser = userInfo.currentUser;//FIX ME
	$scope.friends = userInfo.friends;//FIX ME
});
