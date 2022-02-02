import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _currentUser: any;

  constructor(public auth: AngularFireAuth) { }

  public async login(): Promise<firebase.auth.UserCredential> {
    return this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(_ => {
      return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    });
  }

  public get currentUser(): any {
    return this._currentUser;
  }

  public set currentUser(value: any) {
    this._currentUser = this.auth.currentUser;
  }

}
