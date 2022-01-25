import { Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'alef-firebase',
  template: '',
})
export class FirebaseComponent implements OnInit {
  public db!: Firestore;

  constructor() {}

  ngOnInit(): void {
    this.configInitialFirebase()
  }

  configInitialFirebase() {
    let app = initializeApp(environment.firebaseConfig);
    this.dBFirebase(app);
  }

  dBFirebase(firebase: FirebaseApp) {
    this.db = getFirestore(firebase);
  }
}
