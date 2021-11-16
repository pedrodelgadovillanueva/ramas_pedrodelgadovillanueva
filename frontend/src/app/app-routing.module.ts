import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
//inicio
import {InicioComponent} from './components/inicio/inicio.component';
import {FiltroInicioComponent} from './components/filtro-inicio/filtro-inicio.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {Error404Component} from './components/error404/error404.component';
//admin
import {AdminComponent} from './components/admin/admin.component'
import {SigninComponent} from './components/signin/signin.component'
import {SignupComponent} from './components/signup/signup.component'




import {AuthGuard} from './auth.guard'

const routes: Routes = [

  { path: 'Inicio', component: InicioComponent},
  { path: 'filtroInicio', component: FiltroInicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '',   redirectTo: '/Inicio', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: Error404Component },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
