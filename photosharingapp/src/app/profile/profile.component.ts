import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(
    private _authService: AuthServiceService, 
  ){}
  user: any={
    username: '',
    email: '',
  }

  loggedInUser: any;

ngOnInit(){
  this._authService.getToken();
  this.loggedInUser = this._authService.getUsername();
  this.user = this._authService.login
  
}


}
