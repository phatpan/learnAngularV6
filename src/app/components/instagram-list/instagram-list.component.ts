import { Component, OnInit, Input } from '@angular/core';
import { Feed, FeedItem } from '../../models/feed';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {
  
  @Input() feedList: FeedItem[];
  constructor() { }

  ngOnInit() {
  }

}
