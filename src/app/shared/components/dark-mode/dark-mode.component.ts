import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

interface IChangeDarkModel<T = void> {
  toLight: () => T;
  toDark: () => T;
}

@Component({
  selector: 'alef-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css'],
})
export class DarkModeComponent implements OnInit, AfterViewInit {
  @ViewChild('addClass') iconToggle: ElementRef<HTMLSpanElement> = {} as ElementRef<HTMLSpanElement>;
  @ViewChild('statusToggle') statusToggle: ElementRef<HTMLInputElement> = {} as ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    localStorage.getItem("data-theme") === "dark" ? this.changeTheme(this.statusToggle.nativeElement, true).toDark() : this.changeTheme(this.statusToggle.nativeElement, true).toLight();
  }

  changeTheme(event: EventTarget | null, local: boolean = false) : IChangeDarkModel {
    let element = event as HTMLInputElement;


    const changeToLight = () => {
      this.iconToggle.nativeElement.classList.add('light')
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem("data-theme", 'light');
    }

    const changeToDark = () => {
      this.iconToggle.nativeElement.classList.remove('light')
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem("data-theme", 'dark');
    }

    if(!local) element?.checked ? changeToLight() : changeToDark();

    localStorage.getItem("data-theme") === "light" ? element.checked = true : null;

    return {
      toLight: () => changeToLight(),
      toDark: () => changeToDark(),
    };
  }
}
