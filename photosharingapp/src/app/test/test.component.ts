import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
    user = {
      name: 'John Doe',
      profilePicture: 'path/to/profile-picture.jpg',
      bio: 'Web Developer',
      // Add more user details here
    };
  
    constructor() {}
  
    ngOnInit(): void {}
  }
  //   isLiked = false;
  //   likeCount = 0;

  //   showCommentInput = false;
  // commentText = '';
  
    // constructor() { }
  
    // ngOnInit(): void {
    // }
  
    // toggleLike() {
    //   this.isLiked = !this.isLiked;
    //   if (this.isLiked) {
    //     this.likeCount++;
    //   } else {
    //     this.likeCount--;
    //   }
    // }

    // toggleCommentInput() {
    //   this.showCommentInput = !this.showCommentInput;
    //   if (this.showCommentInput) {
        // Focus on the comment input when it's shown
    //     setTimeout(() => {
    //       const commentInput = document.getElementById('commentInput');
    //       if (commentInput) {
    //         commentInput.focus();
    //       }
    //     });
    //   }
    // }

    
  // postComment() {
    // Implement logic to post the comment here (e.g., send it to a server)
    // console.log('Posted comment:', this.commentText);

    // Clear the comment input and hide it
    // this.commentText = '';
    // this.showCommentInput = false;
  // }


  

