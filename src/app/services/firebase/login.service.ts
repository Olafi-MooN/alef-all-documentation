import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _currentUser: any;

  constructor(public auth: AngularFireAuth, public router: Router) { }

  public async login(email: string, password: string) {
    const result = await this.auth.signInWithEmailAndPassword(email, password);
    if(result?.user?.email) {
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigateByUrl(window.history.state.prevPath ?? 'home');
    }
    return result;
  }

  public async createAccount(email: string, password: string, displayName: string, photoURL: string) {
    const user = await this.auth.createUserWithEmailAndPassword(email, password)
    if(user?.user) user?.user.updateProfile({displayName, photoURL});
    return user;
  }



  public get currentUser(): any {
    return this._currentUser;
  }

  public set currentUser(value: any) {
    this._currentUser = this.auth.currentUser;
  }

}
