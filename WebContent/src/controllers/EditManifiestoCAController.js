/**
* 
* 
*/
function EditManifiestoCAController($scope, $http, serviceShare,$routeParams) {
  
	var id = $routeParams.idManifiesto;
	console.log(id);
	
	
	$(document).ready(function() {
		
		$http({
            method: 'GET',
            url: serviceShare.user.url_service + '/manifiestobykey/' +  id           
			}).success(function (result) {
				$scope.manifiestoCA = result;
			});

		
		$http({
            method: 'GET',
            url: serviceShare.user.url_service + '/aduana/getAll'            
			}).success(function (result) {
				$scope.aduanaList = result;
			});
		  
		$http({
            method: 'GET',
            url: serviceShare.user.url_service + '/placa/getAll'            
			}).success(function (result) {
				$scope.placaList = result;
			});
	      
	      $('#newManifiestoForm').submit(function(e) {
	        $.post(serviceShare.user.url_service + "/manifiesto/new", $(this).serialize(), function(response) {
	        	console.log(response);	        								
				window.location = "#/getManifiestoCAAll";
								
	        });
	        
	       
	      });});
	      
	
	      
	      $(function() {
	    	    $( "#fechaLlegada" ).datepicker({ dateFormat: 'dd/mm/yy' });
	    	  });
	      $(function() {
	    	    $( "#fechaPartida" ).datepicker({ dateFormat: 'dd/mm/yy' });
	    	  });
	     
	     
	 
	
}

