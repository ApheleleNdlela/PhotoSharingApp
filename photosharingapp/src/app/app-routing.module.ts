import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProfileComponent } from './add-post/add-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

  {path: "", redirectTo: "app", pathMatch:"full"},

  {path:"view", component: ViewComponent},

  {path:"navbar", component: NavbarComponent},
  {path: "post", component: AddProfileComponent},
  {path: "profile", component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
