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
  likeCount = 0;

  constructor(
    private _backService: BackendApiService, private _router: Router
  ) {}

  @Input() post?: any;

  ngOnInit(): void {
    this.isLiked;
  }

  reloadCurrentRoute() {
    const currentUrl = this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }

  getPost(id: any): void {
    this.isLiked = !this.isLiked;
    

    this._backService.getPosts(id).subscribe({
      next: () => {
        if (this.isLiked) {
          this._backService.like(id).subscribe({
            next: (res) => {
              this.likeCount = res.likes.length;
              this.reloadCurrentRoute()
            },
          });
        } else if (!this.isLiked) {
          this._backService.like(id).subscribe({
            next: (res) => {
              this.likeCount = res.likes.length;
            },
          });
        }
      },
    });
  }
}
