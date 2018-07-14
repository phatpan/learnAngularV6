import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {
  members: Member[] = [
    {
      "_id": "5b496abd4c45fea209d1ead1",
      "name": "Cherprang",
      "imgUrl": "https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg",
      "instagramId": "cherprang.bnk48official"
    },
    {
      "_id": "5b496abd4c45fea209d1ead2",
      "name": "Orn",
      "imgUrl": "https://media-spiceee.net/uploads/content/image/1643617/large_3ec1f891-1a5c-4905-b298-4cb27667320c.jpg",
      "instagramId": "orn.bnk48official"
    },
    {
      "_id": "5b496abd4c45fea209d1ead3",
      "name": "Music",
      "imgUrl": "https://i.pinimg.com/736x/3a/3d/56/3a3d569c3186f168e30256b46095e8de.jpg",
      "instagramId": "music.bnk48official"
    },
    {
      "_id": "5b496abd4c45fea209d1ead4",
      "name": "Pun",
      "imgUrl": "https://i.pinimg.com/736x/cf/ed/05/cfed05907f9acbb70300dcb38b3eb1e2.jpg",
      "instagramId": "pun.bnk48official"
    },
    {
      "_id": "5b496abd4c45fea209d1ead5",
      "name": "Mobile",
      "imgUrl": "https://lifestyle.campus-star.com/app/uploads/2018/01/Mobile-BNK48-4.jpg",
      "instagramId": "mobile.bnk48official"
    },
    {
      "_id": "5b496abd4c45fea209d1ead6",
      "name": "Jennis",
      "imgUrl": "https://themomentum.co/wp-content/uploads/2018/01/TheMomentum-Jennis-Cover-1.png",
      "instagramId": "jennis.bnk48official"
    },
    {
      "_id": "5b496abd4c45fea209d1ead7",
      "name": "Mewnich",
      "imgUrl": "https://thailandsuperstar.com/images/pix/7612703972/F_1779520031933369418.jpg",
      "instagramId": "mewnich.bnk48official"
    },
    {
      "_id": "5b496aee4c45fea209d1eae4",
      "name": "Cherprang",
      "imgUrl": "https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg",
      "instagramId": "cherprang.bnk48official"
    },
    {
      "_id": "5b496aee4c45fea209d1eae5",
      "name": "Orn",
      "imgUrl": "https://media-spiceee.net/uploads/content/image/1643617/large_3ec1f891-1a5c-4905-b298-4cb27667320c.jpg",
      "instagramId": "orn.bnk48official"
    },
    {
      "_id": "5b496aee4c45fea209d1eae6",
      "name": "Music",
      "imgUrl": "https://i.pinimg.com/736x/3a/3d/56/3a3d569c3186f168e30256b46095e8de.jpg",
      "instagramId": "music.bnk48official"
    },
    {
      "_id": "5b496aee4c45fea209d1eae7",
      "name": "Pun",
      "imgUrl": "https://i.pinimg.com/736x/cf/ed/05/cfed05907f9acbb70300dcb38b3eb1e2.jpg",
      "instagramId": "pun.bnk48official"
    },
    {
      "_id": "5b496aee4c45fea209d1eae8",
      "name": "Mobile",
      "imgUrl": "https://lifestyle.campus-star.com/app/uploads/2018/01/Mobile-BNK48-4.jpg",
      "instagramId": "mobile.bnk48official"
    },
    {
      "_id": "5b496aee4c45fea209d1eae9",
      "name": "Jennis",
      "imgUrl": "https://themomentum.co/wp-content/uploads/2018/01/TheMomentum-Jennis-Cover-1.png",
      "instagramId": "jennis.bnk48official"
    },
    {
      "_id": "5b496aee4c45fea209d1eaea",
      "name": "Mewnich",
      "imgUrl": "https://thailandsuperstar.com/images/pix/7612703972/F_1779520031933369418.jpg",
      "instagramId": "mewnich.bnk48official"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
