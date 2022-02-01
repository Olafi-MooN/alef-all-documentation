import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { FirebaseDb } from './../../services/firebase/firebase-db.component';

@Component({
  selector: 'alef-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
  }

  async ngOnInit() {
    const firebaseDb: FirebaseDb = new FirebaseDb();
    firebaseDb.index().then(() => {
      console.log(firebaseDb.listDocuments)
    })
  }

  getFiltered(text?: string) {
    if(!text) new FirebaseDb().index();
  }
}
