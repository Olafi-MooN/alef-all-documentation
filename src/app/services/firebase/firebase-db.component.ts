import { Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

import { environment } from '../../../environments/environment';
import { Firebase } from './firebase.component';

@Component({
  selector: 'alef-firebase',
  template: '',
})
export class FirebaseDbComponent implements OnInit {
  public db!: Firestore;

  constructor() {}

  ngOnInit(): void {
    this.configInitialFirebase()
  }

  configInitialFirebase() {
    this.dBFirebase(new Firebase().configInitialFirebase());
  }

  dBFirebase(firebase: FirebaseApp) {
    this.db = getFirestore(firebase);
  }
}
