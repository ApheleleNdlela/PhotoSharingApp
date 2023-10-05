import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
// import { FormsModule } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  invalidPassword: string = '';
  invalidEmail: string ='';

  // registerForm: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   password2: new FormControl(''),
  // });

  registerForm: any = {
    username: '',
    email: '',
    password: '',
    password2: ''
  }

 

  isSignUpFailed: boolean = false;
  isSuccessful: boolean = false;
  errorMessage: any;


  constructor(
    
    private service: BackendApiService,
    private authService: AuthService,
    private routes: Router,
    private location: Location,
    // @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() :void {
    // this.auth;
}

register(): void {
  const { username, email, password, password2 } = this.registerForm;
 
  this.authService.register(username, email, password, ).subscribe({
    next: data => {
      console.log(data);
      this.isSuccessful = true;
      
      
      // this.routes.navigateByUrl()
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  });
}
}






