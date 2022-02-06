import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _currentUser: any;

  constructor(public auth: AngularFireAuth) { }

  public async login() {
    this.auth.createUserWithEmailAndPassword('Alefmastertutor@gmail.com', '119182098102900');
    console.log(this.auth.signInWithEmailAndPassword('Alefmastertutor@gmail.com', '119182098102900'));

    // const user = this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public get currentUser(): any {
    return this._currentUser;
  }

  public set currentUser(value: any) {
    this._currentUser = this.auth.currentUser;
  }

}
