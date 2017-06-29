import { Component, OnInit } from '@angular/core';
import { AuthProvider } from './../servicios/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  form: any ={};
  value: number = 0; // Default is 0
  returnUrl: string;
  constructor(private auth: AuthProvider,  private router: Router) {
    this.form = {
      email: '',
      password: ''
    }
  }

  ngOnInit() {
       this.returnUrl = this.router['returnUrl'] || '/';
  }
    login() {
    
    this.auth.loginWithEmail(this.form).subscribe(
     data => {
         console.log("funciona login");
          this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error),
        this.error = error;
      }
    )
      
  }
  administrador() {
    this.form ={
      email: "noe@hotmail.com",
      password: "viole1212"
    }
  }
  empleado() {
    this.form ={
      email: "empleado@hotmail.com",
      password: "empleado1234"
    }
  }
  cliente() {
    this.form ={
      email: "cliente@hotmail.com",
      password: "cliente2334"
    }
  }
  encargado() {
    this.form ={
      email: "encargado@hotmail.com",
      password: "encargado4567"
    }
  }
}
export class persona {
    id: number;
	  email : string;
    password : string;
    
}