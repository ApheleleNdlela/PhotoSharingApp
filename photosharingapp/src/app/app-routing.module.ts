import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProfileComponent } from './add-post/add-profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: "", redirectTo: "/view", pathMatch:"full"},

  {path:"view", component: ViewComponent},

  {path:"navbar", component: NavbarComponent},
  {path: "profile", component: AddProfileComponent},
  {path:"login",component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
