import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProfileComponent } from '../add-post/add-profile.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _dialog: MatDialog){
    
  }

  add(){
    this._dialog.open(AddProfileComponent)
  }

  reg(){
    this._dialog.open(RegisterComponent)
  }

}
