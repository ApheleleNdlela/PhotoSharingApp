import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { AddProfileComponent } from './add-profile/add-profile.component';
>>>>>>> 9dabbf353cb7776dc3b079defdf448022bcfc2bb

const routes: Routes = [

  {path: "", redirectTo: "app", pathMatch:"full"},

  {path:"view", component: ViewComponent},
<<<<<<< HEAD

  {path:"navbar", component: NavbarComponent}
=======
  {path: "profile", component: AddProfileComponent}
>>>>>>> 9dabbf353cb7776dc3b079defdf448022bcfc2bb
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
