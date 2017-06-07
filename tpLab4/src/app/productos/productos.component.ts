import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

 datosProductos: Array<any>;
id: number = 0; 
datosMostrar: any = {};
data: any= {};

  constructor(private router: Router, private route: ActivatedRoute,public datos: ServiciosService) {
      this.datosProductos = new Array();
      
  }
  Productoslista()
  {
      this.datos.traerAllProducts().subscribe(
      data => {
         this.datosProductos = data.productos;
         console.log(data);
      },
      error => console.log(error)
    )
  }
  
  ngOnInit() {
    this.Productoslista();
  }
  traerProducto($id)
  {
    console.log($id);
      this.datos.traerPorId($id).subscribe(
      data => {
        this.datosMostrar = data.productos;
        console.log(data);
        console.log(this.datosMostrar);
      },
      error => console.log(error)
    )
  }
  modificarProducto()
  {
    console.log(this.datosMostrar);
      this.datos.modificar(this.datosMostrar).subscribe(
      data => {
        console.log(data);
        this.data = data;
        this.Productoslista();
      },
      error => console.log(error)
    )
  }
  eliminarProducto($id)
  {
    console.log($id);
      this.datos.eliminar($id).subscribe(
      data => {
        console.log(data);
        this.Productoslista();
      },
      error => console.log(error)
    )
  }
}
export class producto {
    id: number;
	  nombre : string;
    precio: number;
}