import { Component, Input, OnInit } from '@angular/core';
import { PostEntite } from '../entites/post-entite'; 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: PostEntite;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      'list-group-item': true,
      'list-group-item-success': this.post.loveIts > 0,
      'list-group-item-danger': this.post.loveIts < 0,
    }
    return classes;
  }

  clickLoveIt() {
    this.post.loveIts++;
    console.log(this.post.loveIts)
  }
  
  clickDontLoveIt() {
    this.post.loveIts--;
    console.log(this.post.loveIts)
  }

}
