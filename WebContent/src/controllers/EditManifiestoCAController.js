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
				$scope.selectedPlaca = result.placa.id;
				$scope.selectedAduanaPartida = result.aduanaPartida.id;
				$scope.selectedAduanaDestino = result.aduanaDestino.id;
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
	      
	      $('#editManifiestoForm').submit(function(e) {
	        $.post(serviceShare.user.url_service + "/manifiesto/edit", $(this).serialize(), function(response) {
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

