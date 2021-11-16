import { Injectable } from '@angular/core';
//importaciones
import {HttpClient} from '@angular/common/http'
import {Login} from '../interfaces/login'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URI ='http://localhost:4000/apiLogin'

  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user:any) {
    return this.http.post<any>(this.URI + '/signup', user);
  }

  signIn(user:any) {
    return this.http.post<any>(this.URI + '/signin', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/signin'])
  }
}



