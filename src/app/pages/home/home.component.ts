import { Component, OnInit } from '@angular/core';

import { getUser } from 'src/app/shared/utils/getUser';
@Component({
  selector: 'alef-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user!: any;

  constructor() { }

  ngOnInit(): void {
   const { user } = getUser();
   this.user = user;
  }

}
