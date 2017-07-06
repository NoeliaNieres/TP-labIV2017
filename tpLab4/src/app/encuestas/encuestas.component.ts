import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { RatingModule } from "ng2-rating";
import { Input, Output, HostListener,Self, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-encuestas',
   templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
 @Input() private max:number;
 
miEncuesta:Array<any>;
 number = 0;

  constructor(public datos: AuthService) {
      this.miEncuesta = new Array();
      
  }
  Encuestalista()
  {
      this.datos.traerAllEncuestas().subscribe(
      data => {
         this.miEncuesta = data.encuesta;
         console.log(data);
      },
      error => console.log(error)
    )
  }
  
  ngOnInit() {
    this.Encuestalista();
  }
}
