import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//pages
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';

import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

//animacion
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//servicios
import { ServiciosService } from './servicios/servicios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataProvider } from './servicios/data';
import { AuthProvider } from './servicios/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { PedidosService } from './servicios/pedidos.service';
import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';

export const appRoutes: Routes = [
    { 
      path: 'home',
      component: HomeComponent
    },
     {
      path:'', 
      redirectTo:'/home', 
      pathMatch:'full'
    },
    { 
      path: 'login',
      component: LoginComponent 
    },
    { 
      path: 'productos', 
      component: ProductosComponent 
    },
    { 
      path: 'pedidoslista', 
      component: PedidosListaComponent
    },
    { 
      path: 'registro', 
      component: RegistroComponent 
    },
    { 
      path: '**', 
      redirectTo: '' 
    }
    
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductosComponent,
    MenuComponent,
    RegistroComponent,
    PedidosListaComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ServiciosService,DataProvider, AuthProvider,PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routingComponents = [HomeComponent, LoginComponent,ProductosComponent,RegistroComponent,PedidosListaComponent ];