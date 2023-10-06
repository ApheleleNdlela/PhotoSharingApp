import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProfileComponent } from './add-post/add-profile.component';
// import { ServicesComponent } from './services/services.component';


import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    AddProfileComponent,
    ViewComponent,
    NavbarComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
