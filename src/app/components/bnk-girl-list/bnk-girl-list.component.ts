import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-bnk-girl-list',
  providers: [MemberService],
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {
  members: Member[];
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe((response: Member[])=>{
      this.members = response;
    });
  }

}
