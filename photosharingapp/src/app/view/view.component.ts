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
  constructor(
    private service: BackendApiService,
    private authService: AuthServiceService,
    private _router: Router
  ) {}

  posts: any;

  public loggedInUser = this.authService.getUsername();

  ngOnInit(): void {
    this.isLoggedInUser();
    this.getallPosts();
  }

  isLoggedInUser() {
    if (!this.loggedInUser) {
      this._router.navigate(['/', 'login']);
    }
  }

  getallPosts(): void {
    this.service.getallPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.posts = res.reverse();
      },
    });
  }
}
