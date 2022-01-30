import { Component, OnInit } from '@angular/core';

import { FirebaseAuthComponent } from './../../services/firebase/firebase-auth.component';

@Component({
  selector: 'alef-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.login();
  }

  public login() {
    const firebaseAuth: FirebaseAuthComponent = new FirebaseAuthComponent();
    firebaseAuth.login();
  }

}
