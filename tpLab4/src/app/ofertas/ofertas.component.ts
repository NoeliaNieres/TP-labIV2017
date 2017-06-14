import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../servicios/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
datosOfertas: Array<any>;


  constructor(public datos: OfertasService) {
      this.datosOfertas = new Array();
      
  }
  Productoslista()
  {
      this.datos.traerAllOfertas().subscribe(
      data => {
         this.datosOfertas = data.ofertas;
         console.log(data);
      },
      error => console.log(error)
    )
  }
  
  ngOnInit() {
    this.Productoslista();
  }
}
