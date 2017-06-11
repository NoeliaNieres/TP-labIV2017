import { Component, OnInit } from '@angular/core';
import { AuthProvider } from './../servicios/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  form: any ={};
  value: number = 0; // Default is 0

  constructor(private auth: AuthProvider) {
    this.form = {
      email: '',
      password: ''
    }
  }

  ngOnInit() {
  }
    login() {
    
    this.auth.loginWithEmail(this.form).subscribe(
     data => {
         
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