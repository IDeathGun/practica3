// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnListado').on ('tap',function (){
		$.ajax({
			type:"POST",
			url:"http://192.168.1.35/practica3/buscartodas.php",
			data:"",
			error: function(){
			alert("error en conecxion");},
			success: function(respuesta){ var producto = JSON.parse(respuesta);
			$('#contenido').empty();
			for(var $x=0; $x < producto.peliculas.lenght;$x++)
			{$('#contenido').append('  ');}
			$(':mobile-pagecontainer').pagecontainer('change','#todas', { transition: 'pop'});
			}
			});
			});
			
}); 
});

