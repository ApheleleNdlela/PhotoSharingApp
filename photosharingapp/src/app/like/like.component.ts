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

  likeCount = 0;

  constructor(
    private _backService: BackendApiService, private _router: Router
  ) {}

  @Input() post?: any;

  ngOnInit(): void {
    
  }

  reloadCurrentRoute() {
    const currentUrl = this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }

  postLike(id: any): void {
          this._backService.like(id).subscribe({
            next: (res) => {
              this.post = res
              this.likeCount = res.likes.length;
              
            
              this.reloadCurrentRoute()
            },
          });
        
  }
}
