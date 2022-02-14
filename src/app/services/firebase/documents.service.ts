import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentData, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';

import { IDocumentsModel } from 'src/app/model/IDocumentsModel';

type itemsSubject = Subject<any> | Observable<any> | void;

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  public items: any;

  constructor(private afs: AngularFirestore) { }

  getDocumentations(): Observable<IDocumentsModel[]> {
    return this.afs.collection<IDocumentsModel>('documentations').valueChanges();
  }

  getDocumentationsUuid(uuid: string): Observable<IDocumentsModel[]> {
    return this.afs.collection<IDocumentsModel>('documentations', ref => ref.where('uuid', '==', uuid)).valueChanges();
  }

  createDocumentations(data: IDocumentsModel) {
      return new Promise<DocumentReference<DocumentData> | DocumentData>((resolve, reject) =>{
          this.afs
              .collection("documentations")
              .add(data)
              .then(res => resolve(res), err => reject(err));
      });
  }

  addItem(model: IDocumentsModel) {
    this.afs.collection<IDocumentsModel>('documentations').add(model);
  }
}
