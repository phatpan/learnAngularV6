import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { Feed, FeedItem } from '../../models/feed';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  feeds: FeedItem[];
  constructor(private route: ActivatedRoute, private bnkService: BnkService) { }

  ngOnInit() {
    this.getInstagram(this.route.snapshot.params.instagramId);
  }

  getInstagram(id: string) {
    this.bnkService.instagram(id).subscribe((response: Feed) => {
      if(response.feeds){
        this.feeds = response.feeds.filter((i) => {
          return i.thumbnail.endsWith('.jpg');
        });
      }
    });
  }

}
