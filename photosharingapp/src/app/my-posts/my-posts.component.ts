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
      },
      error: console.log,
    });
  }
}
