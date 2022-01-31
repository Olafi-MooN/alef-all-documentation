import { Component, OnInit } from '@angular/core';

import { FirebaseAuthComponent, IFirebaseAuthUserModel } from './../../services/firebase/firebase-auth.component';
import { DocumentationService } from './../../services/documentation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'alef-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public documentationService: DocumentationService, public router: Router) { }

  ngOnInit(): void {
    this.login();
  }

  public async login() {
    const firebaseAuth: IFirebaseAuthUserModel | null = await new FirebaseAuthComponent().login();
    if(firebaseAuth !== null && firebaseAuth.token) {
      this.router.navigateByUrl('/view');
    }
  }

}
