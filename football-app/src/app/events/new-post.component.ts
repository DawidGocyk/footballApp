import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'new-post.component.html'
})

export class NewPostComponent implements OnInit {
  title
  userId
  body
  constructor(private router: Router) { }

  ngOnInit() { }

  savePost(data) {
    console.log(data)
    this.router.navigate(['posts'])
  }
  backToPosts() {
    this.router.navigate(['posts'])
  }
}
