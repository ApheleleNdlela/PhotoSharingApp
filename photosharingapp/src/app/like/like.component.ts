import { Component, OnInit, Input } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  isLiked = false;
  likeCount = 0;

  constructor(private _backService: BackendApiService) {}

  // posts?:any

  ngOnInit(): void {

  }

  // getAllPosts() {
  //   this._backService.getallPosts().subscribe({
  //     next: (res) => {
  //     this.posts = res
  //     },
  //   });
  // }
@Input() post?:any

  toggleLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likeCount++;

    } else {
      this.likeCount--;
    }
  }
}
