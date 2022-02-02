import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'alef-base-form',
  template: "",
  styles: [
  ]
})
export class BaseFormComponent {
  public id: number | string = '';

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id'] )
  }

}
