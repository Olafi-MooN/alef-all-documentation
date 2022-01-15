import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MakeTheJobModule } from '@olafi-moon/make-the-job';

import { AppComponent } from './app.component';
import { DarkModeComponent } from './shared/components/dark-mode/dark-mode.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    MakeTheJobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
