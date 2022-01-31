import { DocumentationService } from './../../services/documentation.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { marked } from 'marked';

import highlight from 'highlight.js';

@Component({
  selector: 'alef-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {

  public html = marked.parse('# Alef All Documentation\n\nCreated by **Alef Santos**.\n\n ```js \n\n var a = "teste code"; \n\n ``` ');
  public preview: boolean = false;
  public optionHidden: boolean = false;
  public title: string = '';

  constructor(public documentationService: DocumentationService) {}

  ngOnInit(): void {
    // this.documentationService.index().then(a => console.log(a));
  }

  changePreview(e: any): void {
   this.preview = e.target.checked;
  }

  changeOptionHidden(): void {
   this.optionHidden = !this.optionHidden;
   this.optionHidden? this.preview = true : this.preview = false;
  }

  markdownVisualizer(event: string) {
    let value = event;

    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, lang) {
        const hljs = highlight;
        const language = hljs.getLanguage(lang) ? lang : 'javascript';
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-',
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });

    this.html = marked.parse(value);
  }

  public salvar(): void{
    if(this.title === "" || this.html === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // this.documentationService.store({
    //   title: this.title,
    //   conteudo: this.html
    // })
  }


}
