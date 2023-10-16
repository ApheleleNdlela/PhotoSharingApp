import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  constructor(private _back: BackendApiService) {}

  post?:any
  ngOnInit(): void {
    
  }

  getPost(id:any) {
    this._back.getPosts(id).subscribe({
      next: (res) => {
        console.log(res)
        this.post = res
      }
    }

    )
  }

}
