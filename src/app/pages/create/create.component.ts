import { Router } from '@angular/router';
import { FirestoreService } from './../../services/firebase/documents.service';
import { Component, OnInit } from '@angular/core';
import highlight from 'highlight.js';
import { marked } from 'marked';
import { v4 as uuidv4 } from 'uuid';

import { IDocumentsModel } from 'src/app/model/IDocumentsModel';
import { getUser } from 'src/app/shared/utils/getUser';

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
  public messageValidation: string = '';
  public spinnerActive = false;
  private uuid: string = uuidv4();

  public model: IDocumentsModel = {} as IDocumentsModel;

  constructor(public firestoreService: FirestoreService, public router: Router) {}

  ngOnInit(): void {
    const { user } = getUser();
    this.model.uuid = `${user?.uid} - ${this.uuid}`  as string;
    this.model.imgProfile = user?.photoURL as string;
    this.model.nameUser = user?.displayName as string;
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

    this.model.conteudo = marked.parse(value);
  }

  public async salvar(): Promise<void> {
    if (this.model.title.length > 0) {
      this.spinnerActive = true;
      try {
        const { user } = getUser();
        const result = await this.firestoreService.createDocumentations(this.model);
        if (result.id) this.router.navigateByUrl(`view/${user?.uid} - ${this.uuid}`)
      } catch (error) {
        alert('Ocorreu um erro: \n'+JSON.stringify(error))
      } finally {
        this.spinnerActive = false;
      }
    }
  }
}
