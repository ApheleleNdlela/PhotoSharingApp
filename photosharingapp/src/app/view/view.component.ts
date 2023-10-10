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

<<<<<<< HEAD
  loggedInUser =
    this._authService.getUsername();
=======
  loggedInUser = this.authService.getUsername() || this.authService.getLocalStorageData() ;
>>>>>>> 94b09c3e654fa2beedcb14fd0cf81f54f163d86d

  constructor(
    private service: BackendApiService,
    private authService: AuthServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getallPosts();
<<<<<<< HEAD
    this.isLoggedInUser()
=======
  console.log(this.authService.getUsername())

  this.authService.getLocalStorageData()
>>>>>>> 94b09c3e654fa2beedcb14fd0cf81f54f163d86d
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
        console.log(this.posts);
      },
    });
  }
}
