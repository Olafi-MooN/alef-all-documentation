import { Component, OnInit } from '@angular/core';
import highlight from 'highlight.js';
import { marked } from 'marked';
import { v4 as uuidv4 } from 'uuid';

import { ICardListViewModel } from 'src/app/shared/components/card-list-view/card-list-view.component';

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

  public model: ICardListViewModel = {} as ICardListViewModel;

  constructor() {}

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
    // new FirebaseDb().store({
    //   uuid: uuidv4(),
    //   title: this.model.title,
    //   conteudo: this.html,
    //   nameUser: getStorage().result.user.displayName,
    //   imgPost: this.model.imgPost,
    //   imgProfile: getStorage().result.user.photoURL
    // })
  }
}
