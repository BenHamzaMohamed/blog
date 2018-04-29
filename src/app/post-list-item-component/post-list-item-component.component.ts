import { Component, OnInit,Input } from '@angular/core';
import {Post} from '../../post';
@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input()
 public post: Post;
  constructor() { 
  
  }

  ngOnInit() {
  }

  onClickLoveIt(){
    this.post.loveIts+=1;
    console.log("***********Ajouter//// loveIts :"+this.post.loveIts);
  }
  onClickDontLoveIt(){
    this.post.loveIts-=1;
    console.log("***********enlever//// loveIts :"+this.post.loveIts);
  }
 

}
