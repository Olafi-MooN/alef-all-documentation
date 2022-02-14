import { getUser } from '../../../utils/getUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alef-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public emailUser: string | null | undefined = '';

  constructor() { }

  ngOnInit(): void {
    this.emailUser = getUser()?.user?.email;
  }


}
