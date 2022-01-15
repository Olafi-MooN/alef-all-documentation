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

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.changeTheme(null).toDark();
  }

  changeTheme(event: EventTarget | null) : IChangeDarkModel {
    let element = event as HTMLInputElement;

    const changeToLight = () => {
      this.iconToggle.nativeElement.classList.add('light')
      document.documentElement.setAttribute('data-theme', 'light');
    }

    const changeToDark = () => {
      this.iconToggle.nativeElement.classList.remove('light')
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    element?.checked ? changeToLight() : changeToDark();

    return {
      toLight: () => changeToLight(),
      toDark: () => changeToDark(),
    };
  }
}
