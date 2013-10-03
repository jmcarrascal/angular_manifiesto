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
		},
		{
			"mData" : function (oObj)                              
                  {
                      // call Modal
                      var a = "<div class='btn-group'><button class='btn glow'>Accion</button> <button data-toggle='dropdown' class='btn glow dropdown-toggle'><span class='caret'></span></button><ul class='dropdown-menu'><li><a  onclick=\"editManifiesto('1')\"');\"><i class='icon-pencil'></i> Editar</a></li><li><a href='http://54.232.16.128:8080/FormRender/formulario/display.xhtml?id=C1.1&repeat=1' target='_blank'><i class='icon-desktop'></i> Adicionar Items</a></li></ul></div>";                            
                      return a;
                  }
                  }
		]
	});

}

function editManifiesto(idManifiesto){
	window.location = "#/manifiestoCAEdit/" + idManifiesto;
}

