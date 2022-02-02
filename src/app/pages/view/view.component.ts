import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';
import { IDocumentsModel } from 'src/app/model/IDocumentsModel';
import { Observable, Subject } from 'rxjs';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { FirestoreService } from './../../services/firebase/documents.service';
import { ActivatedRoute } from '@angular/router';

type IModelType = IDocumentsModel[];
@Component({
  selector: 'alef-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent extends BaseFormComponent implements OnInit{
  public model: IModelType = [] as IDocumentsModel[];

  constructor(
    route: ActivatedRoute,
    public firestoreService: FirestoreService) {
      super(route)
  }

  async ngOnInit() {
    this.id ?
      this.firestoreService.getDocumentationsUuid('62827eb9-c4f8-4649-94cc-afe0005c1c72').subscribe(document => this.model = document)
        :
      this.firestoreService.getDocumentations().subscribe(documents => this.model = documents)
  }

  getFiltered(text?: string) {

  }
}
