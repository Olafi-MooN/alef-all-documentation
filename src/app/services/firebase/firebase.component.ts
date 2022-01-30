import { FirebaseApp, initializeApp } from 'firebase/app';

import { environment } from '../../../environments/environment';

export class Firebase {
  constructor() {}

  configInitialFirebase(): FirebaseApp {
    const app: FirebaseApp = initializeApp(environment.firebaseConfig);
    return app;
  }
}
