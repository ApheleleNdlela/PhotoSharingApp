import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
