import { FirebaseDbComponent } from './../../services/firebase/firebase-db.component';
import { Component, OnInit } from '@angular/core';

import { DocumentationService } from 'src/app/services/documentation.service';

@Component({
  selector: 'alef-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    new FirebaseDbComponent().index();
  }

  getFiltered(text?: string) {
    if(!text) new FirebaseDbComponent().index();
  }
}
