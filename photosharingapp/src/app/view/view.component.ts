import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor(private BackendApiService: BackendApiService, private router: Router ) {}

  availableImages?: any;

  ngOnInit(): void {
    this.getallPosts();
  }

  getallPosts() {
    this.BackendApiService.getallPosts().subscribe({
      next: (res) => {
        this.availableImages = res;
      },
    });
  }

  deletePost(id: number): void {
    alert ('Are you sure you want to delete?');
    this.BackendApiService.deletePost(id).subscribe({
      next: () => {
        this.getallPosts()
      },
      error: console.log,
    });
  }
  User:any = {
    name: '',
    image: '',
    caption: ''
  }

}
