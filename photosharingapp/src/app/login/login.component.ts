import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

import { BackendApiService } from '../services/backend-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  invalidPassword = '';
  invalidEmail = '';
  invalidUsername = '';

  constructor(
    private authService: AuthServiceService,
    private storageService: StorageService,
    private snackBar: SnackbarService
  ) {}

  ngOnInit() {}

  login() {
    const { username, password } = this.loginForm.value;

    if (!password) {
      this.invalidPassword = 'Please enter your password';
    } else if (!username) {
      this.invalidUsername = 'Please enter a correct username';
    }

    this.authService.login(this.loginForm.value);
  }
}
