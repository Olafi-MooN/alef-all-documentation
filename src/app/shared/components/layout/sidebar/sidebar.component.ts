import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'alef-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public isOpen: boolean | undefined = true;

  public listItem: any[] = [
    {
      title: 'React',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'Angular',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'VueJs',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'React',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'Angular',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'VueJs',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'React',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'Angular',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'VueJs',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'React',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'Angular',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'VueJs',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'React',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'Angular',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
    {
      title: 'VueJs',
      listLi: [
        { name: 'Getting starting', router: '/' },
        { name: 'Hooks', router: '/' },
        { name: 'Components', router: '/' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
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
