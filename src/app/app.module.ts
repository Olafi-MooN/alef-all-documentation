import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MakeTheJobModule } from '@olafi-moon/make-the-job';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

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
import { ViewComponent } from './pages/view/view.component';
import { LoginComponent } from './pages/login/login.component';
import { environment } from 'src/environments/environment';
import { PERSISTENCE, SETTINGS as AUTH_SETTINGS  } from '@angular/fire/compat/auth';
import { LoadingComponent } from './shared/components/loading/loading.component';

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
    ViewComponent,
    CardListViewComponent,
    LoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    MakeTheJobModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
    { provide: PERSISTENCE, useValue: 'local' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
