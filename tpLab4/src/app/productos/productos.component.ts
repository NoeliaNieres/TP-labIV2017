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

}
