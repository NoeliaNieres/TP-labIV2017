import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UsuariosService {

    url = 'https://pizzeria-nieres.000webhostapp.com/servidor/index.php';

    constructor(public http:Http) { }

    traerAllUsuarios()
    {
      return this.http.get(this.url + '/usuarios', this.jwt()).map((response: Response) => response.json());
    }
       private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}