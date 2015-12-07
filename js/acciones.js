// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnListado').on ('tap',function (){
		$.ajax({
			type:"POST",
			url:"http://192.168.1.198/practica03/buscartodas.php",
			data:"",
			error: function(){
			alert("error en conecxion");},
			success: function(respuesta){ var producto = JSON.parse(respuesta);
			$('#contenido').empty();
			for(var $x=0; $x < producto.peliculas.length;$x++)
			{$('#contenido').append('<div align="center"><div align="left"><img src="http://192.168.1.198/practica03/recursos/imagenes/fotos/'+ producto.peliculas[$x].clavePelicula  +'.jpg" /></div><div align="center"><h1>Nombre pelicula: '+ producto.peliculas[$x].nombrePelicula +'</h1></div><div align="center"><h1>Genero: '+  producto.peliculas[$x].generoPelicula +'</h1></div><div align="center"><h1>Clasificacion: '+  producto.peliculas[$x].clasificacionPelicula +'</h1></div><div align="center"><h1>Duracion: '+  producto.peliculas[$x].duracionPelicula +'</h1></div><div align="center"><h1>Idioma: '+  producto.peliculas[$x].idiomaPelicula +'</h1></div><div align="left"><h1>Sipnosis: '+  producto.peliculas[$x].sipnosisPelicula +'</h1></div></div></div>');}
			$(':mobile-pagecontainer').pagecontainer('change','#todas', { transition: 'pop'});
			}
			});
			});
			
}); 
});

