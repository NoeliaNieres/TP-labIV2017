import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { producto } from '../productos/productos.component';

@Injectable()
export class ServiciosService {

 url = 'http://localhost:8080';

    constructor(public http:Http) { }

    traerAllProducts()
    {
      return this.http.get(this.url + '/productos', this.jwt()).map((response: Response) => response.json());
    }
    traerPorId(id: number) {
        return this.http.get(this.url +'/productos/' + id, this.jwt()).map((response: Response) => response.json());
    }
    modificar(product: producto) {
        return this.http.put(this.url +'/productos', product, this.jwt()).map((response: Response) => response.json());
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
