import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {
  members: Member[];
  constructor(private bnkService: BnkService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.bnkService.list().subscribe((response: Member[])=>{
      this.members = response;
    });
  }

}
