import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alef-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() public spinner: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
