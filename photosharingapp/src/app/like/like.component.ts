import { Component, OnInit, Input } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { AuthServiceService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  isLiked = false;
  likeCount = localStorage.getItem('like')|| 0;

  private userId = this._authService.getUserId();
  private token = this._authService.getToken();

  constructor(
    private _backService: BackendApiService,
    private _authService: AuthServiceService,
  ) {}

  @Input() post?: any;

  ngOnInit(): void {
    this.isLiked;
    this.likeCount;
  }

  getPost(id: any): void {
    this.isLiked = !this.isLiked;
  
    this._backService.getPosts(id).subscribe({
      next: () => {
        if (this.isLiked) {
          this._backService.like(id, this.token).subscribe({
            next: (res) => {
              console.log(res.likes.length);
              this.likeCount = res.likes.length;
              localStorage.setItem('like', JSON.stringify(this.likeCount));
              // localStorage.setItem("color", JSON.stringify(this.isLiked))
              console.log(res.likes.includes(this.userId));
            },
          });
        } else if (!this.isLiked) {
          this._backService.like(id, this.token).subscribe({
            next: (res) => {
              console.log(res.likes);
              this.likeCount = res.likes.length;
              localStorage.setItem('like', JSON.stringify(this.likeCount));
              // localStorage.setItem("color", JSON.stringify(this.isLiked))
            },
          });
        }
      },
    });
  }

  //   toggleLike() {
  //     this.isLiked = !this.isLiked;
  //     if (this.isLiked) {
  //       this.likeCount++;
  //       // this._backService.like(id, this.token).subscribe({
  //       //   next: (res) => {
  //       //     console.log(res);
  //       // if (res.likes.includes())
  //       // this.getLikes = res.likes.length;
  //       //     localStorage.setItem('likes', res.likes.length);
  //       //   },
  //       // });
  //     } else {
  //       this.likeCount--;
  //     }
  //   }
}
