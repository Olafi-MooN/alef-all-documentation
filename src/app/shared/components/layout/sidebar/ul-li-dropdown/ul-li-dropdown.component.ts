import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'alef-ul-li-dropdown',
  templateUrl: './ul-li-dropdown.component.html',
  styleUrls: ['./ul-li-dropdown.component.css']
})
export class LiDropdownComponent implements OnInit, AfterViewInit {
  public openUl: boolean = false;
  @Input() title: string = '';
  @Input() items: any[] = [] as any;

  @ViewChild('getHeight', {static: true}) dropdown: ElementRef = {} as ElementRef;
  @ViewChildren('getSelected') selected: QueryList<ElementRef> = {} as  QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selected.forEach((item: ElementRef, index) => {
     let div = item.nativeElement as HTMLDivElement;
     div.addEventListener('click', (item) => {
      this.selected.forEach((item: ElementRef, index) => {
        let div = item.nativeElement as HTMLDivElement;
        div.classList.remove('selected');
        div.children[0].classList.remove('selected');
      })
        div.classList.add('selected');
        div.children[0].classList.add('selected')
     })
    });
  }

  actionClickOpenUl() {
    this.openUl = !this.openUl;
  }

  changeSelected() {
  }

}
