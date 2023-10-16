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
  
  // isLiked:any =  localStorage.getItem('status') || false;

  public loggedInUser = this.authService.getUsername();
  // private userId = this.authService.getUserId();
  // private token = this.authService.getToken();
  // public getLikes = localStorage.getItem('likes') || 0;
  // count = 0

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
        console.log(res)
        this.posts = res;
      },
    });
  }

  // getPost(id: any): void {
  //   this.service.getPosts(id).subscribe({
  //     next: (res) => {
  //       // this.getLikes = res.likes.length;
  //       localStorage.setItem('likes', res.likes.length);
  //     },
  //   });
  // }
// posIds:any = []

  // toggleLike() {
  
    // this.posIds.push(id)
//  console.log(id)
    // console.log(this.posIds)
    // this.isLiked = !this.isLiked;
    // this.count++
    // localStorage.setItem('status', this.isLiked)
//     if (this.isLiked) {
//       this.service.like(id, this.token).subscribe({
//         next: (res) => {
// console.log(res)
     
//           this.getLikes = res.likes.length;
//           localStorage.setItem('likes', res.likes.length);
//         },
//       });
//     }

    // if (!this.isLiked) {
      // this.service.unLike(id, this.token).subscribe({
      //   next: (res) => {
      //     console.log(res)
      //     this.getLikes = res.likes.length;
      //     localStorage.setItem('likes', res.likes.length);
      //   },
      // });
    }
  // }
// }
