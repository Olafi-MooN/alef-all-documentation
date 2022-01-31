import { Component, OnInit } from '@angular/core';

import { FirebaseDb } from './../../services/firebase/firebase-db.component';

@Component({
  selector: 'alef-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor() {}

  async ngOnInit() {
    console.log(await new FirebaseDb().index());
  }

  getFiltered(text?: string) {
    if(!text) new FirebaseDb().index();
  }
}
