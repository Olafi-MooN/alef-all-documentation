import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';
import highlight from 'highlight.js';

@Component({
  selector: 'alef-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // public html = marked.parse('# Alef All Documentation\n\nCreated by **Alef Santos**.');
  public html = marked.parse('# Alef All Documentation\n\nCreated by **Alef Santos**.\n\n ```js \n\n var a = "teste code"; \n\n ``` ');

  constructor() { }

  ngOnInit(): void { }

  markdownVisualizer(event: string) {
    let value = event;

    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, lang) {
        const hljs = highlight;
        const language = hljs.getLanguage(lang) ? lang : 'javascript';
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

    this.html = marked.parse(value);
  }
}
