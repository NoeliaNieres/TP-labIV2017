import {Component, trigger, state, style, transition, animate} from '@angular/core';
import { AuthProvider } from './servicios/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
   title = 'app works!';

  menuState:string = 'out';
  public user: string;
  returnUrl: string;

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  constructor(private auth: AuthProvider,private router: Router) {
    this.isLoggedIn();
       this.user = localStorage.getItem('useremail');
       console.log(this.user);
    
    this.returnUrl = this.router['returnUrl'] || '/';

    
  }
   refresh(): void {
    window.location.reload();
  }
  public isLoggedIn() : boolean {
      if(this.auth.isLoggedIn().valueOf() == true )
      {
         return true;
      }
      return false;
      
    }
  logout(){
    console.log("llego");
    this.auth.logout();
    this.user = null;
    console.log(this.user);
    this.router.navigate([this.returnUrl]);
     this.refresh();
  }
}