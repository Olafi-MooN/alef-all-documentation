import { FirebaseAuthComponent, IFirebaseAuthUserModel } from './firebase-auth.component';
import { Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';

import { environment } from '../../../environments/environment';
import { Firebase } from './firebase.component';

@Component({
  selector: 'alef-firebase',
  template: '',
})
export class FirebaseDbComponent {
  public db!: Firestore;
  public app = new Firebase().configInitialFirebase();

  constructor() {}

  async index(): Promise<any[]> {
    let documentations: any[] = [];

    try {
      const querySnapshot = await getDocs(collection(getFirestore(this.app), 'documentations'));
      querySnapshot.forEach((doc) => {
        documentations.push(doc.data())
      });
    } catch (error) {
      new FirebaseAuthComponent().login().then(() => this.index());
    }

    return documentations;
  }

  async store(object: any): Promise<void> {
    try {
      const docRef = await addDoc(collection(getFirestore(this.app), "documentations"), object );
      if(docRef.id) {
        alert("O documento foi salvo com sucesso!")
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
}
