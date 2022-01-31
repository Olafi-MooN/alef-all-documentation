import { Component, OnInit } from '@angular/core';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  browserLocalPersistence,
  reauthenticateWithCredential,
  User,
  AuthCredential
} from '@firebase/auth';
import {
  OAuthCredential,
  Auth,
  UserCredential,
} from '@firebase/auth/dist/auth-public';

import { Firebase } from './firebase.component';

export interface IFirebaseAuthUserModel {
  result: UserCredential;
  token: string | null | undefined;
  credential: OAuthCredential | null;
}

type userCredentialFunction = (
  a: UserCredential
) => Promise<IFirebaseAuthUserModel | null>;
@Component({
  selector: 'alef-firebase',
  template: '',
})
export class FirebaseAuthComponent implements OnInit {
  public provider: GoogleAuthProvider = new GoogleAuthProvider();

  constructor() {}

  ngOnInit(): void {}

  public scopes(): void {
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    this.provider.setCustomParameters({
      login_hint: 'user@example.com',
    });
  }

  public async login(): Promise<IFirebaseAuthUserModel | null> {
    this.scopes();
    const app = new Firebase().configInitialFirebase();
    let firebaseAuthUser!: IFirebaseAuthUserModel;

    const auth: Auth = getAuth(app);
    auth.useDeviceLanguage();

    const getLogin = (userCredential?: UserCredential) => {
      const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(userCredential as UserCredential);
      const token = credential ? credential.accessToken : null;
      localStorage.setItem('token', JSON.stringify({ token, result: userCredential, credential } as IFirebaseAuthUserModel))
      return { token, result: userCredential, credential } as IFirebaseAuthUserModel;
    };

    await setPersistence(auth, browserLocalPersistence);
    firebaseAuthUser = getLogin(await signInWithPopup(auth, this.provider));

    return firebaseAuthUser;
  }

  public singOut() {
    const app = new Firebase().configInitialFirebase();
    const auth: Auth = getAuth(app);
    signOut(auth)
      .then(() => {
        alert('Desconectado!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
