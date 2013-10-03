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
  		  controller: ListManifiestoCAController,
  		  requireLogin: true
	  }).
	  
	  when('/manifiestoCANew', {
  		  templateUrl: 'src/views/newManifiestoCA.html',
  		  controller: NewManifiestoCAController
	  }).
	  
      otherwise({
		  redirectTo: '/login'});

}]).config(['$routeProvider', function($routeProvider){

    //this loads up our routes dynamically from the previous object 
    for(var path in window.routes) {
        $routeProvider.when(path, window.routes[path]);
    }
    $routeProvider.otherwise({redirectTo: '/login'});

}]).run(function(){

    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        for(var i in window.routes) {
            if(next.indexOf(i) != -1) {
                if(window.routes[i].requireLogin && !SessionService.getUserAuthenticated()) {
                    alert("You need to be authenticated to see this page!");
                    event.preventDefault();
                }
            }
        }
    });

});

