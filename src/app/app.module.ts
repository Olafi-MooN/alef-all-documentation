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

@NgModule({
  declarations: [
    AppComponent,
    DarkModeComponent,
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    DropdownComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MakeTheJobModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
