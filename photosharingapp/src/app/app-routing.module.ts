import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProfileComponent } from './add-post/add-profile.component';
<<<<<<< HEAD
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> 2f40bbd4a2bd9d0bc765290afc6ce6844b0f4904
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

  {path: "", redirectTo: "/view", pathMatch:"full"},

  {path:"view", component: ViewComponent},

  {path:"navbar", component: NavbarComponent},

  {path: "post", component: AddProfileComponent},
<<<<<<< HEAD
  {path: "profile", component: UserProfileComponent},
  {path:"login",component: LoginComponent},
=======

  {path: "register", component: RegisterComponent},

  {path: "login", component: LoginComponent},
  {path: "profile", component: UserProfileComponent}
>>>>>>> 2f40bbd4a2bd9d0bc765290afc6ce6844b0f4904
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
