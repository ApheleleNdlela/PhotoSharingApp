import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { AuthServiceService } from '../services/auth.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
})
export class MyPostsComponent implements OnInit {
  constructor(
    private _backendService: BackendApiService,
    private _authService: AuthServiceService
  ) {}

  posts: any;
  loggedInUser = this._authService.getUsername();

  ngOnInit(): void {
    this.getUserPosts();
  }

  getUserPosts() {
    this._backendService.getallPosts().subscribe({
      next: (res) => {
        this.posts = res.filter((post: any) => post.user === this.loggedInUser);
        console.log(res)
      },
      
      error: console.log,
    });
  }

  removePost(id: any){
    const confirmed = window.confirm('Are you sure you want to delete this post?');
    // alert('Are you sure you want to delete this post?');
    if(!confirmed){ 
      return;
    }
    this._backendService.deletePost(id).subscribe({
      next: () => {
    
        this.getUserPosts();
      },
      error: console.log,
    });
  }
  }

