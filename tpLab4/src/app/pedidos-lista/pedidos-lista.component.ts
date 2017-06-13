import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-pedidos-lista',
  templateUrl: './pedidos-lista.component.html',
  styleUrls: ['./pedidos-lista.component.css']
})
export class PedidosListaComponent implements OnInit {
datosPedidos: Array<any>;

  constructor(public datos: PedidosService) {
      this.datosPedidos = new Array();
      
  }
  Pedidoslista()
  {
      this.datos.traerAllPedidos().subscribe(
      data => {
         this.datosPedidos = data.pedidos;
         console.log(data);
      },
      error => console.log(error)
    )
  }
  
  ngOnInit() {
    this.Pedidoslista();
  }
}
