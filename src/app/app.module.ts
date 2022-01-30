import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MakeTheJobModule } from '@olafi-moon/make-the-job';

import { AppComponent } from './app.component';
import { DarkModeComponent } from './shared/components/dark-mode/dark-mode.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { BaseFormComponent } from './shared/components/base-form/base-form.component';
import { CardListViewComponent } from './shared/components/card-list-view/card-list-view.component';
import { CodeEditorComponent } from './shared/components/code-editor/code-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirebaseDbComponent } from './services/firebase/firebase-db.component';
import { FirebaseAuthComponent } from './services/firebase/firebase-auth.component';
import { ViewComponent } from './pages/view/view.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeComponent,
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    DropdownComponent,
    HomeComponent,
    CreateComponent,
    BaseFormComponent,
    CodeEditorComponent,
    FirebaseDbComponent,
    FirebaseAuthComponent,
    ViewComponent,
    CardListViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MakeTheJobModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
