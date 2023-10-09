import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';
// import { AddProfileComponent } from '../add-post/add-profile.component';





@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  

  posts: any;

  post:any = {
    // name: '',
    image: '',
    caption: ''
  }

  constructor(
    private service: BackendApiService, private _router: Router
    ){}

  ngOnInit(): void{
    this.getallPosts() 
    // if(!window.sessionStorage.getItem('token')){
    //   this._router.navigate(['/sign-in'])
    // this.reloadCurrentRoute()
  // }
}

  reloadCurrentRoute() {
    // const currentUrl = this._router.url;
    // this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this._router.navigate([currentUrl]);
    // });
  }

  getallPosts(): void {

    this.service.getallPosts().subscribe({
      next: (res) => {
        this.posts = res;
      },
    });
  }

  deletePost(id: number): void {
    alert ('Are you sure you want to delete?');
    this.service.deletePost(id).subscribe({
      next: () => {
        this.getallPosts()
      },
      error: console.log,
    });
  }

}
