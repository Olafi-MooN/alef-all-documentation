import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from '@firebase/auth';
import { OAuthCredential, Auth, UserCredential } from '@firebase/auth/dist/auth-public';

import { Firebase } from './firebase.component';

export interface IFirebaseAuthUserModel {
  result: UserCredential,
  token: string | null | undefined;
  credential: OAuthCredential | null
}

@Component({
  selector: 'alef-firebase',
  template: '',
})
export class FirebaseAuthComponent implements OnInit {
  public provider: GoogleAuthProvider = new GoogleAuthProvider();

  constructor() {}

  ngOnInit(): void {
  }

  public scopes(): void{
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    this.provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });
  }

  public login(): Promise<IFirebaseAuthUserModel | null> {
    this.scopes();

    const app = new Firebase().configInitialFirebase();

    const auth: Auth = getAuth(app);
    auth.useDeviceLanguage();

    return new Promise<IFirebaseAuthUserModel | null>((resolve, reject) => {
      signInWithPopup(auth, this.provider)
        .then((result) => {
          const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
          const token = credential? credential.accessToken : null;
          resolve({ token, result, credential} as IFirebaseAuthUserModel);
        }).catch((error) => {
          reject(error);
        });
    })
  }

  public singOut() {
    const app = new Firebase().configInitialFirebase();
    const auth: Auth = getAuth(app);
    signOut(auth).then(() => {
      alert('Desconectado!');
    }).catch((error) => {
      console.log(error);
    });
  }
}
