import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

import { BackendApiService } from '../services/backend-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SnackbarService } from '../services/snackbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  invalidPassword = '';
  invalidEmail = '';
  invalidUsername = '';

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    
    private authService: AuthService,
    private storageService: StorageService,
    private snackBar: SnackbarService
    ) {}

  ngOnInit() {
 
  }
  
  login() {
   
    const { username, password } = this.loginForm.value

    if(!password){
      this.invalidPassword = 'Please enter your password'
    } else if(!username){
      this.invalidUsername = 'Please enter a correct username'
    }

    this.authService.login(username, password).subscribe({
      next: data => {
      
        this.storageService.saveUser(data);
        this.storageService.saveToken(data.token)
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.snackBar.openSnackBar('Login successful','Done')
        window.location.replace("view") 
      },
      error: err => {
        this.snackBar.openSnackBar('Login failed', 'Failed')
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

      }
    })
    
  }

}