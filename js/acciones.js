// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btn_todas').on('tap', function(){
      $.ajax({
		 url: "http://192.168.1.170/practica03/buscartodas.php",
		 error: function(){
			alert ("ERROR, no me puedo conectar"); 
		 },
		 success: function(respuesta){
		  alert(respuesta);
		 }
		  
	  });//ajax todas

	});//tap todas
}); 
});

