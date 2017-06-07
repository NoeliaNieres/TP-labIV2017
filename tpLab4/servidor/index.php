<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once "vendor/autoload.php";

// This Slim setting is required for the middleware to work


$app = new Slim\App([
    "settings"  => [
        "determineRouteBeforeAppMiddleware" => true,
    ]
]);

// This is the middleware
// It will add the Access-Control-Allow-Methods header to every request

$app->add(function($request, $response, $next) {
    $route = $request->getAttribute("route");

    $methods = [];

    if (!empty($route)) {
        $pattern = $route->getPattern();

        foreach ($this->router->getRoutes() as $route) {
            if ($pattern === $route->getPattern()) {
                $methods = array_merge_recursive($methods, $route->getMethods());
            }
        }
        //Methods holds all of the HTTP Verbs that a particular route handles.
    } else {
        $methods[] = $request->getMethod();
    }
    
    $response = $next($request, $response);


    return $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ;
});


#PRODUCTOS
 //Alta de producto
	$app->post("/productos", function($request, $response, $args){
		
		$producto = json_decode($request->getBody()); 
	
		try{
			require_once "./Productos.php";
			$respuesta["idAgregado"] = Producto::InsertarProducto($producto);
			$respuesta["mensaje"] = "Se agregó el producto #".$respuesta["idAgregado"];
		}
		catch (Exception $e){
			$respuesta["idAgregado"] = "ERROR";
			$respuesta["error"] = $e;
		}
		
		$response->getBody()->write(json_encode($respuesta));
		return $response;
	});
    //Tomar todos los productos
	$app->get("/productos", function($request, $response, $args){
		//Traigo todos los productos
		require_once "./Productos.php";
		$productos = Producto::TraerTodosLosProductos();		
		$respuesta["productos"] = $productos;
		//Escribo la respuesta en el body del response y lo retorno
		$response->getBody()->write(json_encode($respuesta));
		return $response;		
	});
	
	 //Tomar un solo productos
	$app->get("/productos/{id}", function($request, $response, $args){
		//Recupero los datos del formulario de alta del producto en un stdClass
		$id = json_decode($args["id"]);// $producto->nombre = "Mika"
		//Modifico el producto
	
		//Traigo todos los productos
		require_once "./Productos.php";
		$productos = Producto::TraerUnProducto($id);
		$respuesta["productos"] = $productos;
		//Escribo la respuesta en el body del response y lo retorno
		$response->getBody()->write(json_encode($respuesta));
		return $response;		
	});
	
    //Borrar producto segun su id.
	$app->delete("/productos/{id}", function($request, $response, $args){
		//Recupero el Id del producto
		$id = json_decode($args["id"]);
		//Elimino el producto
		try{
			require_once "./Productos.php";
			$respuesta["cantidad"] = Producto::BorrarProducto($id);
			$respuesta["mensaje"] = "Se eliminaron ".$respuesta["cantidad"]." productos";
		}
		catch (Exception $e){
			$respuesta["nuevoId"] = "ERROR";
			$respuesta["error"] = $e;
		}
		//Escribo la respuesta en el body del response y lo retorno
		$response->getBody()->write(json_encode($respuesta));
		return $response;
	});
    //Modificar producto
	$app->put("/productos", function($request, $response, $args){
		//Recupero los datos del formulario de modificación del producto en un stdClass
		$producto = json_decode($request->getBody()); // $producto->nombre = "Mika" 
		//Modifico el producto
		try{
			require_once "./Productos.php";
			$respuesta["cantidad"] = Producto::ModificarProducto($producto);
			$respuesta["mensaje"] = "Se modificaron ".$respuesta["cantidad"]." productos";
		}
		catch (Exception $e){
			$respuesta["nuevoId"] = "ERROR";
			$respuesta["error"] = $e;
		}
		//Escribo la respuesta en el body del response y lo retorno
		$response->getBody()->write(json_encode($respuesta));
		return $response;
	});

$app->run();