import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//pages
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { MenuComponent } from './menu/menu.component';

import { Routes, RouterModule} from '@angular/router';

//animacion
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const appRoutes: Routes = [
    { 
      path: 'home',
      component: HomeComponent
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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routingComponents = [HomeComponent, LoginComponent,ProductosComponent];