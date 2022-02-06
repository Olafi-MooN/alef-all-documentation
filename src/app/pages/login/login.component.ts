import { LoginService } from './../../services/firebase/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'alef-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public form: FormGroup = {} as FormGroup;
    public accessDenied: boolean = false;
    public loading: boolean = false;
    public createAccount: boolean = false;

    constructor(private fb: FormBuilder, public loginService: LoginService) {
      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

  ngOnInit(): void {

  }

  public async login() {

  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.form.value);
  }

}
