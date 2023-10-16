import { Component, OnInit, Input } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { AuthServiceService } from '../services/auth.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  isLiked = localStorage.getItem('status') || false;
  likeCount = 0;
  private token = this._authService.getToken();

  constructor(
    private _backService: BackendApiService,
    private _authService: AuthServiceService
  ) {}

  @Input() post?: any;

  ngOnInit(): void {}

  // getAllPosts() {
  //   this._backService.getallPosts().subscribe({
  //     next: (res) => {
  //       this.posts = res;
  //     },
  //   });
  // }

  getPost(id: any): void {
    // this.isLiked = !this.isLiked;


    this._backService.getPosts(id).subscribe({
      next: () => {
        if (this.isLiked) {
          this.isLiked = false

          this.likeCount++;
          this._backService.like(id, this.token).subscribe({
            next: (res) => {
              console.log(res.likes);
            },
          });
        } 
        else if (!this.isLiked){
          this.isLiked = true
          this.likeCount++;
  
          this._backService.like(id, this.token).subscribe({
            next: (res) => {
              console.log(res.likes);
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
