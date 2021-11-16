import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

//componenetes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminComponent } from './components/admin/admin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';

//servicios
import {AuthGuard} from './auth.guard'
import {TokenInterceptorService} from './services/token-interceptor.service';
import {CargarScriptsService} from './services/cargar-scripts.service';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FiltroInicioComponent } from './components/filtro-inicio/filtro-inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo/catalogo.component'




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AdminComponent,
    InicioComponent,
    Error404Component,
    NosotrosComponent,
    ContactoComponent,
    FiltroInicioComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CargarScriptsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
