import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  template: `
              <ul>
                 <li class="nav-item"><a class="nav-link" routerLink="login" routerLinkActive="active">Login</a></li>
                  <li class="nav-item"><a class="nav-link" routerLink="productos" routerLinkActive="active">Productos</a></li>
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
