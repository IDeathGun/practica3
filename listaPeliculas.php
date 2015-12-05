<?PHP
include("conf/config.inc.php");
session_start();
 
if (!isset($_SESSION['usuario']))
{
	header ('Location: index.php');
}
else//si existe la variable de sesion 'usuario'
{
	 $vars="";
 $consulta="SELECT clavePelicula, nombrePelicula FROM peliculas "; 
 $resultado=mysqli_query ($conexion,$consulta);
 if (!$resultado)
 {
	 die("ERROR en la consulta");
 }
}
 ?>