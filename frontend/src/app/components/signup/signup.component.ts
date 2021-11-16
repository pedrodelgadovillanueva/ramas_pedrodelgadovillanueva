import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }



  signUp(){
    this.authService.signUpUser(this.user)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
