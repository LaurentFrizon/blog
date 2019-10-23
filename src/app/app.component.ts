import { Component } from '@angular/core';
import { PostEntite } from './entites/post-entite'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'blog';

  posts: Array<PostEntite> = [
    PostEntite.postEntiteFactory({
      title: "Post0",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aspernatur placeat ratione debitis perspiciatis, nemo cum aut quaerat non quo tempora dolorem illum eum perferendis eligendi id. Accusamus, odio sint?",
      loveIts: 0,
      create_at: new Date('2019-07-01')
    }),
    new PostEntite(
      "Post1",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aspernatur placeat ratione debitis perspiciatis, nemo cum aut quaerat non quo tempora dolorem illum eum perferendis eligendi id. Accusamus, odio sint?",
      0),
    new PostEntite("Post2",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aspernatur placeat ratione debitis perspiciatis, nemo cum aut quaerat non quo tempora dolorem illum eum perferendis eligendi id. Accusamus, odio sint?",
      0),
    new PostEntite("Post3",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aspernatur placeat ratione debitis perspiciatis, nemo cum aut quaerat non quo tempora dolorem illum eum perferendis eligendi id. Accusamus, odio sint?",
       0),
  ]

}
