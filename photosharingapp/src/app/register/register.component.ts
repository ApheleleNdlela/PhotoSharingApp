import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { FormsModule } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: any ={
    username: '',
    email: '',
    password: '',
    password2: ''
   }

  invalidPassword: string = '';
  invalidEmail: string ='';

  // registerForm: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   password2: new FormControl(''),
  // });

 

  isSignUpFailed: boolean = false;
  isSuccessful: boolean = false;
  errorMessage: any;
  private _auth: any;
  storage: any;


  constructor(
    
    private service: BackendApiService,
    private auth: AuthService,
    private routes: Router,
    private storageService: StorageService,
    
    // @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {

}
 register(){

const { username, email, password, password2 } = this.registerForm;

this.auth.register(username, email, password, password2).subscribe({

  next: data => {
    console.log(data);

    this.storage.saveUser(data);

    this.isSuccessful = true;

    if(this.isSuccessful){
      // this.authService.login(username,password).subscribe()
    }
    this.isSignUpFailed = false;
    window.location.replace("user-profile") // last line
  },
 
  error: err => {
    this.errorMessage = err.error.message;
    this.isSignUpFailed = true;
  }
});
 }

}




