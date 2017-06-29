import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListFactory, FirebaseObjectFactory } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { persona } from '../login/login.component';

// Providers
import {DataProvider} from './data';

@Injectable()
export class AuthProvider {
  
 user: any;
  
  constructor(private af: AngularFireAuth, private data: DataProvider) {
     this.user = firebase.auth().currentUser;
  }

  getUserData() {
    return Observable.create(observer => {
      this.af.authState.subscribe(authData => {
        if (authData) {
          this.data.object('users/' + authData.uid).subscribe(userData => {
            console.log(userData);
            this.user = userData;
            localStorage.setItem('useremail', authData.email);
            observer.next(userData);
          });
        } else {
          observer.error();
        }
      });
    });
  }

  registerUser(form: persona) {
    return Observable.create(observer => {
      this.af.auth.createUserWithEmailAndPassword(form.email,form.password).
      then((authData: any) => {
        this.data.list('users').update(authData.uid, {
          name: form.email,
          email: form.email,
          emailVerified: false,
          provider: 'email',
          image: 'https://freeiconshop.com/files/edd/person-solid.png'
        });
        
        observer.next(authData);
      }).catch((error: any) => {
        if (error) {
          switch (error.code) {
            case 'INVALID_EMAIL':
              observer.error('Email inválido.');
              break;
            case 'EMAIL_TAKEN':
              observer.error('Este email ya está siendo utilizado.');
              break;
            case 'NETWORK_ERROR':
              observer.error('Ha ocurrido algún error al intentar conectarse al servidor, vuelva a intentarlo más tarde.');
              break;
            default:
              observer.error(error);
          }
        }
      });
    });
  }

   loginWithEmail(form: persona) {
    return Observable.create(observer => {
      this.af.auth.signInWithEmailAndPassword(form.email,form.password).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
}
     
  logout() {
      firebase.auth().signOut().then(function() {
      console.log("funciona");
       localStorage.removeItem('useremail');
      }, function(error) {
	    console.log(error); 
     });
    
  }
  public isLoggedIn(): boolean {
        let IsUserExists = localStorage.getItem('useremail') !== null ? true : false
        return IsUserExists;
    }
}
