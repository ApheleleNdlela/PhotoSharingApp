import { Component, OnInit,Inject } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  invalidPassword: string = '';
  invalidEmail: string ='';

  // registerForm: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   password2: new FormControl(''),
  // });

 registerForm: any ={
  username: '',
  email: '',
  password: '',
  password2: ''
 }

  isSignUpFailed: boolean = false;
  isSuccessful: boolean = false;
  errorMessage: any;
  private _auth: any;


  constructor(
    
    private service: BackendApiService,
    private auth: AuthService,
    private routes: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {

}
 register(){

const { username, email, password, password2 } = this.registerForm;

this.auth.register(username, email, password, password2).subscribe({

  next: data => {
    console.log(data);
    this.isSuccessful = true;
    // this.isSignUpFailed = true;
    
    // this.location.back()
  },
  error: err => {
    this.errorMessage = err.error.message;
    this.isSignUpFailed = true;
  }
});
 }

}




