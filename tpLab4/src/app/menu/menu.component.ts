import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  template: `
              <ul>
                 
                 <li class="nav-item"><a class="nav-link" routerLink="inicio" routerLinkActive="active">Iniciar sesión</a></li>
                  <li class="nav-item"><a *ngIf="user" class="nav-link" routerLink="productos" routerLinkActive="active">Productos</a></li>
                  <li class="nav-item"><a *ngIf="user" class="nav-link" routerLink="pedidoslista" routerLinkActive="active">Lista de pedidos</a></li>
                   <li class="nav-item"><a *ngIf="user" class="nav-link" routerLink="ofertas" routerLinkActive="active">Ofertas</a></li>
                    <li class="nav-item"><a *ngIf="user" class="nav-link" routerLink="usuarios" routerLinkActive="active">Usuarios</a></li>
              </ul>              
  `,
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
user: any; 

  constructor(private router: Router, private route: ActivatedRoute) {
    this.user = localStorage.getItem('useremail');
     console.log(this.user);
  }

  ngOnInit() {
    this.user = localStorage.getItem('useremail');
     console.log(this.user);
  }

}
