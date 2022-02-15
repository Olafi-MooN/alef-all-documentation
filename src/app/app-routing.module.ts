import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewComponent } from './pages/view/view.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'prefix'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home/create', component: CreateComponent, canActivate: [AuthGuard] },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home/create/view', component: ViewComponent, canActivate: [AuthGuard]},
      { path: 'home/create/view', component: ViewComponent, canActivate: [AuthGuard]},
      { path: 'home/create/view/:id', component: ViewComponent, canActivate: [AuthGuard]},
    ],
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
