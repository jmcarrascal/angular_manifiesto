angular.module('app', []).

	factory('serviceShare', function() {  
		return {
			form : {},
			user : {
					url_service: 'http://localhost:8080/SprintRestService/rest'										
			}
		};
	}).

  //definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {
  
  $routes.
     
  	  when('/login', {
  		  templateUrl: 'login.html',
  		  controller: LoginController
	  }).
	  
	  when('/getManifiestoCAAll', {
  		  templateUrl: 'src/views/listManifiestoCA.html',
  		  controller: ListManifiestoCAController
	  }).
	  
	  when('/manifiestoCANew', {
  		  templateUrl: 'src/views/newManifiestoCA.html',
  		  controller: NewManifiestoCAController
	  }).
	  
      otherwise({
		  redirectTo: '/login'});

}]);
