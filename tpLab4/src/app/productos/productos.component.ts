import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { AuthProvider } from './../servicios/auth';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

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
user: any; 
foto: any;

  constructor(private router: Router, private route: ActivatedRoute,public datos: ServiciosService,private auth: AuthProvider) {
      this.datosProductos = new Array();
     this.user = localStorage.getItem('useremail');
     console.log(this.user);
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
  exportarDatos()
  {

      this.datos.traerAllProducts().subscribe(
      data => {
         this.datosProductos = data.productos;
         new Angular2Csv(data.productos, 'misDatos');
      })
        
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
    fotos($id)
  {
    //console.log($id);
    this.foto = $id;
      
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
  agregarProducto()
  {
    console.log(this.datosMostrar);
      this.datos.agregar(this.datosMostrar).subscribe(
      data => {
        console.log(data);
        this.data = data;
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