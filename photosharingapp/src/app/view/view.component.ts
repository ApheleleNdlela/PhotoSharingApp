import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { AuthServiceService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  posts: any;
  isLiked = false;
  likeCount = 0;

  loggedInUser = this.authService.getUsername();
  userId = this.authService.getUserId();
  token = this.authService.getToken()

  constructor(
    private service: BackendApiService,
    private authService: AuthServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getallPosts();
    this.isLoggedInUser();
  }

  isLoggedInUser() {
    if (!this.loggedInUser) {
      this._router.navigate(['/', 'login']);
    }
  }

  getallPosts(): void {
    this.service.getallPosts().subscribe({
      next: (res) => {
        this.posts = res;
      },
    });
  }

  toggleLike(id: any) {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likeCount++;
      // console.log(this.token)
      // console.log(this.userId)
      this.service.like(id, this.token).subscribe({
        next: (res) => {
          console.log(res)
        }
      });
      // this.service.getPosts(id).subscribe({
      //   next: (res) => {
      //     console.log(res)
      //   }
      // })
    } else {
      this.likeCount--;
    }
  }
}
