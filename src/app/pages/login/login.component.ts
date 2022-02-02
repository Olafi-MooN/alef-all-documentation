import { LoginService } from './../../services/firebase/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alef-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.login();
  }

  public async login() {

  }

}
