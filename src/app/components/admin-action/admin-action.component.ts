import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { BnkService } from '../../services/bnk.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-admin-action',
  templateUrl: './admin-action.component.html',
  styleUrls: ['./admin-action.component.css']
})
export class AdminActionComponent implements OnInit {
  adminForm: FormGroup
  member: Member;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder, 
    private bnkService: BnkService,
    private router: Router) { }

  ngOnInit() {
    this.adminForm = this.fb.group({
      _id: '',
      name: '',
      imgUrl: '',
      instagramId: ''
    });
    this.getAdmin();
  }

  getAdmin() {
    this.bnkService.admin(this.activatedRoute.snapshot.params.id).subscribe((response) => {
      this.member = response;
      this.adminForm.setValue(response);
    });
  }

  update() {
    const member: Member = this.adminForm.getRawValue();
    this.bnkService.update(member).subscribe((response) => {
      this.router.navigate(["/admin"]);
    });
  }

  reset() {
    this.adminForm.reset(this.member);
  }

}
