import { Component, OnInit,Inject } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    paswword: new FormControl(''),
    paswword2: new FormControl(''),
  });

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    
    private service: BackendApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {

}
  register(){
    alert('hello')
  
}
}
