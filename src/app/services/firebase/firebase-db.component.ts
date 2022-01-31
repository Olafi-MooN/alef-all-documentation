import { Firestore, getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';

import { Firebase } from './firebase.component';
import { FirebaseAuthComponent } from './firebase-auth.component';

export class FirebaseDb {
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
      console.log(documentations)
    } catch (error) {
      await new FirebaseAuthComponent().login();
      await this.index();
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
      await new FirebaseAuthComponent().login();
      await this.store(object);
    }

  }
}
