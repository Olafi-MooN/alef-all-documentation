import { FirebaseDbComponent } from './firebase/firebase-db.component';
import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DocumentationService extends FirebaseDbComponent {

  constructor() {
    super();
    this.configInitialFirebase();
  }

  async index(): Promise<any[]> {
    let documentations: any[] = [];

    try {
      const querySnapshot = await getDocs(collection(this.db, 'documentations'));
      querySnapshot.forEach((doc) => {
        documentations.push(doc.data())
      });
    } catch (error) {
      console.log(error);
    }

    return documentations;
  }

  async store(object: any): Promise<void> {
    try {
      const docRef = await addDoc(collection(this.db, "documentations"), object );
      if(docRef.id) {
        alert("O documento foi salvo com sucesso!")
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
}
