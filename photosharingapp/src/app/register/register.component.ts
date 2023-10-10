import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthServiceService } from '../services/auth.service';
import { SnackbarService } from '../snackbar.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  invalidPassword: string = '';
  invalidEmail: string ='';

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });



  isSignUpFailed: boolean = false;
  isSuccessful: boolean = false;
  errorMessage: any;


  constructor(
    
    private authService: AuthServiceService,
    private _snackBar: SnackbarService
   
    ) { }

  ngOnInit() :void {
   
}

register(): void {
  const { username, email, password, confirmPassword } = this.registerForm.value;
 
  if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g.test(
    email
  )===false
  ) {
    this.invalidEmail = 'Invalid email';
  } else if (
    password !==
    confirmPassword
  ){
    this.invalidPassword = "Passwords don't match"
    return 
  }
    
  this.authService.register(this.registerForm.value).subscribe({
    next: data => {
      this._snackBar.openSnackBar('Registered Successfully', 'Done')
      this.isSuccessful = true;
      window.location.replace('login')
    },
    error: ()=> {
      console.log()
      this._snackBar.openSnackBar('User Already Exists', 'Failed')
      this.isSignUpFailed = true;
    }
  });
}
}






