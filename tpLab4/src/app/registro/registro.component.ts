import { Component, OnInit } from '@angular/core';
import { AuthProvider } from './../servicios/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  error: any;
  form: any ={};

  constructor(private auth: AuthProvider) {
    this.form = {
      email: '',
      password: ''
    }
  }

  register() {
    
    this.auth.registerUser(this.form).subscribe(registerData => {
      this.auth.loginWithEmail(registerData).subscribe(loginData => {
        
      }, loginError => {
        
      });
    }, registerError => {
      
    });
  }

  ngOnInit() {
  }

}
