/**
* LoginController
* Controlador de Login
*/
function LoginController($scope, $http, serviceShare) {
	
	
	$(document).ready(function() {
        
	      
	      $('#validateUserForm').submit(function(e) {
	        $.post(serviceShare.user.url_service + "/usuario/validate", $(this).serialize(), function(response) {
	        	console.log(response);
	        	$.each(response, function(i, item) {
	        		console.log(i + ' ' + item);
	        		if (i == 'success') {
						
						if ( item == true) {
							
							window.location = "#/getManifiestoCAAll";
						}else{
							alert ("Error de Usuario")
						} 
					}
				});
	        	
	        });
	        
	        e.preventDefault(); // prevent actual form submit and page reload
	      });
	      
	  });
}
