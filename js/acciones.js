// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnListado').on ('tap',function (){
		$.ajax({
			type:"POST",
<<<<<<< HEAD
			url:"http://192.168.1.198/practica03/buscartodas.php",
=======
			url:"http://192.168.1.35/practica3/buscartodas.php",
>>>>>>> origin/master
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

