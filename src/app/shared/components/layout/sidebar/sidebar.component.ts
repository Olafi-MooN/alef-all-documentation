import { referencesTechnologies } from './../../../utils/getReferencesTechnology';
import { AfterViewInit, Component, OnInit } from '@angular/core';

import { IReferenceString, ListLiType } from 'src/app/model/IReferenceTechnology';
import { FirestoreService } from 'src/app/services/firebase/documents.service';
import { IDocumentsModel } from 'src/app/model/IDocumentsModel';

export interface ISidebarListModel<T, U> {
  title: T,
  listLi: U;
}

@Component({
  selector: 'alef-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public isOpen: boolean | undefined = true;
  public listItem: ISidebarListModel<IReferenceString, ListLiType[]>[] = [] as ISidebarListModel<IReferenceString, ListLiType[]>[]
  public documentsList: (IDocumentsModel[] | undefined)[]= [] as IDocumentsModel[][];
  public referencesTechnologies: IReferenceString[] = referencesTechnologies();

  constructor(public firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreService.getDocumentations().subscribe(documents => {
      this.documentsList = this.referencesTechnologies.map(referenceTechnology => {
        let documentList = documents.filter(a => a?.referenceTechnology === referenceTechnology)
        if(documentList?.length > 0) {
          return documentList
        }
        return;
      }).filter(a => a !== undefined)

      this.listItem = this.documentsList?.map(documentsFiltered => {
        let listLi = documentsFiltered?.map(a => {
          return { name: a.title, router: a.uuid } as ListLiType;
        });

        let referenceTechnology = (documentsFiltered as IDocumentsModel[])[0].referenceTechnology

        return {
          title: referenceTechnology,
          listLi
        } as ISidebarListModel<IReferenceString, ListLiType[]>
      })
    });
  }

  ngAfterViewInit(): void {}

  public animationOpenDropdown(event: EventTarget | null) : void{
    let element = event as HTMLDivElement;
    if(element?.children[0]?.classList.contains('active-icon')) {
      element?.children[0]?.classList.remove('active-icon');
    } else {
      element?.children[0]?.classList.add('active-icon');
    }
  }

}
