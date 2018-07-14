import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { BnkService } from 'src/app/services/bnk.service';
import { Feed, FeedItem } from 'src/app/models/feed';

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
        this.feeds = response.feeds;
      }
    });
  }

}
