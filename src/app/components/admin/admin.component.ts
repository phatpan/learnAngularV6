import { Component, OnInit } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  members: Member[];
  constructor(private bnkService: BnkService) { }

  ngOnInit() {
    this.bnkService.list().subscribe((response) => {
      this.members = response;
    });
  }
}
