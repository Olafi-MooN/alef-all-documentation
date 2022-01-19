import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';

// Types
export type ITypeToggle = boolean | undefined;

@Component({
  selector: 'alef-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  private _toggle: ITypeToggle = undefined;
  @Input() public opened!: ITypeToggle;
  @Output() public emitToggle: EventEmitter<ITypeToggle> = new EventEmitter<ITypeToggle>(this._toggle);

  constructor() { }

  ngOnInit(): void {
    if(this.opened) this.toggleDropdown(this.opened);
  }

  public toggleDropdown(value?: ITypeToggle): void {
    this._toggle = !this._toggle;
    this.emitToggle.emit(this._toggle);
  }

  // GETTERS E SETTERS
  public get toggle(): ITypeToggle {
    return this._toggle;
  }

  public set toggle(value: ITypeToggle) {
    this._toggle = value;
  }

}
