import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  template: `
              <ul>
                 <li class="nav-item"><a class="nav-link" routerLink="login" onclick="document.getElementById('id01').style.display='block'" routerLinkActive="active">Login</a></li>
                 <li class="nav-item"><a class="nav-link" routerLink="registro" onclick="document.getElementById('id02').style.display='block'" routerLinkActive="active">Registro</a></li>
                  <li class="nav-item"><a class="nav-link" routerLink="productos" routerLinkActive="active">Productos</a></li>
                  <li class="nav-item"><a class="nav-link" routerLink="pedidoslista" routerLinkActive="active">Lista de pedidos</a></li>
              </ul>              
  `,
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
