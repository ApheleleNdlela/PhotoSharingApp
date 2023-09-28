import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

  {path: "", redirectTo: "app", pathMatch:"full"},

  {path:"view", component: ViewComponent},

  {path:"navbar", component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
