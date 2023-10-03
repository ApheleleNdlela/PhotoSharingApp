import { Component } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
    c_password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    
    private BackendApiService: BackendApiService,
    ) { }

  ngOnInit() {
    //  this.user.currentUserData.subscribe((userData: any) => this.userData = userData)
  //   if (this.storageService.isSuccessful()) {
  //     this.isSuccessful = true;
  // }
}
  // register(){
    // const { username, email, password } = this.form;
    
//     console.log(this.form)
//     this.BackendApiService.(username,email,password).subscribe({
//       next: data => {
//         console.log(data)

//         this.BackendApiService.(data);
      
//         this.isSuccessful = true;
//         if(this.isSuccessful){
//           // this.authService.login(username,password).subscribe()
//         }
//         this.isSignUpFailed = false;
//         window.location.replace("user-profile") // last line
//       },
//       error: err => {
        
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       }
//     })
//     // this.user.changeData(data);
//   }
  
}

