<?php
require_once"AccesoDatos.php";
class Producto
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $idProd;
	public $nombre;
	public $precio;
	public $foto1;
	public $foto2;
	public $foto3;
  	

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetIdProducto()
	{
		return $this->idProd;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetPrecio()
	{
		return $this->precio;
	}
	public function GetFoto1()
	{
		return $this->foto1;
	}
	public function GetFoto2()
	{
		return $this->foto2;
	}
	public function GetFoto3()
	{
		return $this->foto3;
	}

	public function SetIdProducto($valor)
	{
		$this->idProd = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetPrecio($valor)
	{
		$this->precio = $valor;
	}
	public function SetFoto1($valor)
	{
		$this->foto1= $valor;
	}
	public function SetFoto2($valor)
	{
		$this->foto2= $valor;
	}
	public function SetFoto3($valor)
	{
		$this->foto3= $valor;
	}

//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($id=NULL)
	{
		if($id != NULL){
			$obj = Producto::TraerUnProducto($id);
			
			$this->nombre = $obj->nombre;
			$this->precio = $obj->precio;
			$this->foto1 = $obj->foto1;
			$this->foto2 = $obj->foto2;
			$this->foto3 = $obj->foto3;
			
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->nombre."-".$this->precio."-".$this->foto1."-".$this->foto2."-".$this->foto3;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnProducto($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM productos WHERE idProd=:idProd");
		
		$consulta->bindValue(':idProd', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$productoBuscado= $consulta->fetchObject('producto');
		return $productoBuscado;	
					
	}
	
	public static function TraerTodosLosProductos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM productos ");
		
		$consulta->execute();			
		$arrProductos= $consulta->fetchAll(PDO::FETCH_CLASS, "producto");	
		return $arrProductos;
	}
	
	public static function BorrarProducto($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM productos WHERE idProd=:idProd");
			
		$consulta->bindValue(':idProd',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarProducto($producto)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				UPDATE productos 
				SET nombre=:nombre,
				precio=:precio,
				foto1=:foto1,
				foto2=:foto2,
				foto3=:foto3
				WHERE idProd=:idProd");
			
			$consulta->bindValue(':idProd',$producto->idProd, PDO::PARAM_INT);
			$consulta->bindValue(':nombre', $producto->nombre, PDO::PARAM_STR);
			$consulta->bindValue(':precio', $producto->precio, PDO::PARAM_INT);
			$consulta->bindValue(':foto1', $producto->foto1, PDO::PARAM_STR);
			$consulta->bindValue(':foto2', $producto->foto2, PDO::PARAM_STR);
			$consulta->bindValue(':foto3', $producto->foto3, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarProducto($producto)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into productos (nombre,precio) values(:nombre,:precio)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into productos (nombre,precio,foto1,foto2,foto3) values(:nombre,:precio,:foto1,:foto2,:foto3)");
		
		$consulta->bindValue(':nombre', $producto->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':precio', $producto->precio, PDO::PARAM_INT);
		//$consulta->bindValue(':foto1', $producto->foto1, PDO::PARAM_STR);
		//$consulta->bindValue(':foto2', $producto->foto2, PDO::PARAM_STR);
		//$consulta->bindValue(':foto3', $producto->foto3, PDO::PARAM_STR);
		
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//


}
