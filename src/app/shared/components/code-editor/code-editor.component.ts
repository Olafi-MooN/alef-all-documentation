import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'alef-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

  @Input() public textarea: string = "";
  @Output() public textareaEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public sendText(): void {
    this.textareaEmitter.emit(this.textarea);
  }

}
