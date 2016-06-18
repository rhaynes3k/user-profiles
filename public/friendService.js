angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login( user ) {
      return $http.post("/api/login", user);

      }/* FIX ME */
  };

    // getFriends() {
    // 	/* FIX ME */
    // }

});
