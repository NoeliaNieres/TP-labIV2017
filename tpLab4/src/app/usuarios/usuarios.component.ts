import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { AuthProvider } from './../servicios/auth';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
datosUsuarios: Array<any>;
user : any;

  constructor(private router: Router, private route: ActivatedRoute,public datos: UsuariosService,private auth: AuthProvider) {
      this.datosUsuarios = new Array();
     this.user = localStorage.getItem('useremail');
     console.log(this.user);
  }

   Usuarioslista()
  {
      this.datos.traerAllUsuarios().subscribe(
      data => {
         this.datosUsuarios = data.usuarios;
         console.log(data);
      },
      error => console.log(error)
    )
  }  
  ngOnInit() {
    this.Usuarioslista();
  }

}
  