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
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home/create', component: CreateComponent, canActivate: [AuthGuard] },

  //child's
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home/create/view', component: ViewComponent, canActivate: [AuthGuard]},
      { path: 'home/create/view', component: ViewComponent, canActivate: [AuthGuard]},
      { path: 'home/create/view/:id', component: ViewComponent, canActivate: [AuthGuard]},
    ],
  },

  // redirects
  { path: '', redirectTo: 'home', pathMatch: 'prefix'},
  { path: 'view', redirectTo: 'home/create/view', pathMatch: 'prefix'},
  { path: 'create', redirectTo: 'home/create', pathMatch: 'prefix'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
