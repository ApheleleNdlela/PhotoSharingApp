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
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthServiceService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.loginForm.value);
  }
}
