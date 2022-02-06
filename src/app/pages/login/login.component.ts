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
    public messageError: string = '';
    public messageSuccess: string = '';

    constructor(private fb: FormBuilder, public loginService: LoginService) {
      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

  ngOnInit(): void {

  }

  public async login() {
    if (this.form.valid) {
      this.loading = true;
      try {
        if (this.createAccount === false) {
          const result = await this.loginService.login(this.form.controls['email'].value, this.form.controls['password'].value);
          console.log(result)
        } else {
          const result = await this.loginService.createAccount(this.form.controls['email'].value, this.form.controls['password'].value);
          if (result?.additionalUserInfo?.isNewUser) {
            this.createAccount = false;
            this.messageSuccess = 'Clique novamente em "ENTRAR", para fazer login!';
          }
        }
      } catch (error: any) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.messageError = 'Não é possível utilizar esse e-mail, para criar uma conta!';
            break;
          case 'auth/wrong-password':
            this.messageError = 'O seu usuário ou a sua senha são inválidos';
            break;
          default:
            break;
        }
        console.log(JSON.stringify(error))
      } finally {
        this.loading = false;
      }
    } else {
    }
  }
}
