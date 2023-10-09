import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    
    private authService: AuthService,
    private storageService: StorageService
    ) {}

  ngOnInit() {
    // this.user.currentUserData.subscribe(userData => (this.userData = userData));
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      // this.roles = this.storageService.getUser().roles;
    }
  }

  changeData(event:any) {
    var msg = event.target.value;
    // this.user.changeData(msg);
  }

  
  logIn() {
    // this.user.changeData(data);
    const { username, password } = this.form

    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        
        this.storageService.saveUser(data);
        this.storageService.saveToken(data.token)
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.replace("view") // last line
      },
      error: err => {
        console.error("Details required")
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    })
    
  }

}