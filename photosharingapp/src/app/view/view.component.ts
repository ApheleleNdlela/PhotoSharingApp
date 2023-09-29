import { Component, OnInit } from '@angular/core';
import { AddProfileComponent } from '../add-post/add-profile.component';
import { BackendApiService } from '../services/backend-api.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit{


  posts: any;

  post:any = {
    name: '',
    image: '',
    caption: ''
  }

  constructor(
    private service: BackendApiService,
    ){}

  ngOnInit(): void{
    this.getallPosts() 
  }

  getallPosts(): void {

    this.service.getallPosts().subscribe({
      next: (res) => {
        this.posts = res;
      },
    });
  }



}
