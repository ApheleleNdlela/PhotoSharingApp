import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddProfileComponent } from './add-profile/add-profile.component';

const routes: Routes = [

  {path: "", redirectTo: "app", pathMatch:"full"},

  {path:"view", component: ViewComponent},
  {path: "profile", component: AddProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
