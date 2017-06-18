import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { producto } from '../productos/productos.component';

@Injectable()
export class ServiciosService {

 url = 'https://pizzeria-nieres.000webhostapp.com/servidor/index.php';

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
    eliminar(id: number) {
        return this.http.delete(this.url +'/productos/' + id, this.jwt()).map((response: Response) => response.json());
    }
    agregar(product: producto) {
        return this.http.post(this.url +'/productos', product, this.jwt()).map((response: Response) => response.json());
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
