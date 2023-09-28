import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    caption: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    
  }
  post() {
    alert('Hello');
  }

  file: any;
  
  files(event: any) {
    this.file = event.target.files[0]
  }
}