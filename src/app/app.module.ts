import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MakeTheJobModule } from '@olafi-moon/make-the-job';

import { AppComponent } from './app.component';
import { DarkModeComponent } from './shared/components/dark-mode/dark-mode.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
import { LiListComponent } from './shared/components/layout/sidebar/li-list/li-list.component';
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeComponent,
    LayoutComponent,
    SidebarComponent,
    LiListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MakeTheJobModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
