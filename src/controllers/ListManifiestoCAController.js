/**
* ListOperadorJuridicoController
* Controlador del listado de libros
*/
function ListManifiestoCAController($scope, $http, serviceShare) {

  var oTable = $('#IdTableFormsList').dataTable({
		"bProcessing" : true,
		"sAjaxSource" : serviceShare.user.url_service + "/manifiestoCabecera/getAll" ,
		"sAjaxDataProp" : "",
		
		"aoColumns" : [{
			"mData" : "id" 
		}, 
		{
			"mData" : "placa.codigo"
		}, 
		{
			"mData" : "placa.descripcion"
		}, 
		{
			"mData" : "numeroViaje"
		}, 
		{
			"mData" : "aduanaPartida.descripcion"
		},
		{
			"mData" : "aduanaDestino.descripcion"
		}
		]
	});

}

