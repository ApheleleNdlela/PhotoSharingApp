import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProfileComponent } from './add-profile/add-profile.component';

const routes: Routes = [

  {path: "", redirectTo: "/view", pathMatch:"full"},

  {path:"view", component: ViewComponent},

  {path:"navbar", component: NavbarComponent},
  {path: "profile", component: AddProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
