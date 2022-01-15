import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MakeTheJobModule } from '@olafi-moon/make-the-job';

import { AppComponent } from './app.component';
import { DarkModeComponent } from './shared/components/dark-mode/dark-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeComponent
  ],
  imports: [
    BrowserModule,
    MakeTheJobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
