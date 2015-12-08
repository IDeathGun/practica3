// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#btntodas").on('tap', function(){
		 $.ajax({
			  type: "POST",
			  url: "http://192.168.1.198/practica03/buscartodas.php",
			  data: "",
			  error: function(){
				  alert("No se puede conectar al servidor");
				  },
		      success: function(respuesta)
			  {
				  var producto =JSON.parse(respuesta);
				  
			   $('#contenido').empty();
			   
			   
			   
			   for(var $x=0; $x<producto.peliculas.length;$x++)
			   
			   {
				   
				   $('#contenido').append('<div><div>Nombre de la Película:'+ producto.peliculas[$x].nombrePelicula +'</div><div><div><img src="http://192.168.1.198/practica03/recursos/imagenes/fotos/'+ producto.peliculas[$x].clavePelicula +'.jpg"></div><div><div><div>Clasificación:'+ producto.peliculas[$x].clasificacionPelicula +'</div><div >Género:'+ producto.peliculas[$x].genero +'</div></div><div style="clear:both;"><div>Idioma:'+ producto.peliculas[$x].idiomaPelicula +'</div><div >Duración:'+ producto.peliculas[$x].duracionPelicula +'</div></div></div></div><div style="clear:both;">Sinópsis:'+ producto.peliculas[$x].sinopsis +'</div></div>');
				   }
			   $(':mobile-pagecontainer').pagecontainer('change','#todas',{
				transition:'pop'
				});
				}
		 });
		 });
					 
		  $("#btnbuscar").on('tap', function(){
		 $.ajax({
			  type: "POST",
			  url: "http://192.168.1.127/proyecto/BusquedaNombre.php",
			  data: "nombrePeli=" + $('#txtnombrePelicula').val(),
			  error: function(){
				  alert("No se puede conectar al servidor");
				  },
		      success: function(respuestanombre)
			  {
				  var productonombre =JSON.parse(respuestanombre);
				  
			   $('#contenidoNombre').empty();
			   
			   
			   
			   for(var $x=0; $x<productonombre.peliculas.length;$x++)
			   
			   {
				   
				   $('#contenidoNombre').append('<div><div>Nombre de la Película:'+ productonombre.peliculas[$x].nombrePelicula +'</div><div><div style="float:left; width:30%;"><img src="http://192.168.1.127/proyecto/recursos/imagenes/fotos/'+ productonombre.peliculas[$x].clavePelicula +'.jpg" style="height:20px;width:20px;"></div><div style="float:left; width:70%;"><div><div style="float:left; width:50%;">Clasificación:'+ productonombre.peliculas[$x].clasificacion +'</div><div style="float:left; width:50%;">Género:'+ productonombre.peliculas[$x].genero +'</div></div><div style="clear:both;"><div style="float:left; width:50%;">Idioma:'+ productonombre.peliculas[$x].idioma +'</div><div style="float:left; width:50%;">Duración:'+ productonombre.peliculas[$x].duracion +'</div></div><div style="clear:both;">Director:'+ productonombre.peliculas[$x].director +'</div></div></div><div style="clear:both;">Sinópsis:'+ productonombre.peliculas[$x].sinopsis +'</div></div>');
				   }
			   $(':mobile-pagecontainer').pagecontainer('change','#ResultadoNombre',{
				transition:'pop'
				});
				}
		 });
		 });
        
}); 										
});