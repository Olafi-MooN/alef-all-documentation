import { Router } from '@angular/router';
import { getUser } from '../../../utils/getUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alef-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public emailUser: string | null | undefined = '';
  public route: string[] = [] as string[];

  constructor(public router: Router) {
    this.route = this.router.url.split('/')

   }

  ngOnInit(): void {
    this.emailUser = getUser()?.user?.email;
  }

  convertNumber(a: number | string): number {
    return Number(a);
  }

  convertString(a: number | string): string {
    return String(a);
  }

  textLength(word: string, length: number): string {
    if(word.length > length) {
      return word.substring(0, length) + "...";
    }
    return word;
  }
}
