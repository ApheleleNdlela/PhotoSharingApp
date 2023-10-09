import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  showCommentInput = false;
  commentText = '';

  constructor() { }
  
  ngOnInit(): void {
  }

  toggleCommentInput() {
    this.showCommentInput = !this.showCommentInput;
    if (this.showCommentInput) {
      // Focus on the comment input when it's shown
      setTimeout(() => {
        const commentInput = document.getElementById('commentInput');
        if (commentInput) {
          commentInput.focus();
        }
      });
    }
  }

  postComment() {
    // Implement logic to post the comment here (e.g., send it to a server)
    console.log('Posted comment:', this.commentText);

    // Clear the comment input and hide it
    this.commentText = '';
    this.showCommentInput = false;
  }
}
