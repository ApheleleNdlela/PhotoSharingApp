import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AddProfileComponent } from './add-profile/add-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photosharingapp';

  constructor(private _dialog: MatDialog){
    
  }

  add(){
    this._dialog.open(AddProfileComponent)
  }
}
