import { Component, OnInit, Input } from '@angular/core';

export interface ICardListViewModel {
  title?: string;
  imgProfile?: string;
  nameUser?: string;
  imgPost?: string;
  uuid: string;
}

@Component({
  selector: 'alef-card-list-view',
  templateUrl: './card-list-view.component.html',
  styleUrls: ['./card-list-view.component.css']
})
export class CardListViewComponent implements OnInit {

  @Input() public card: ICardListViewModel = {} as ICardListViewModel;

  constructor() { }

  ngOnInit() {
  }

}
