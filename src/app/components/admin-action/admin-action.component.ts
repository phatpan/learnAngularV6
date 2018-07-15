import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
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
    this.getAdmin();
  }

  getAdmin() {
    this.bnkService.admin(this.activatedRoute.snapshot.params.id).subscribe((response) => {
      this.member = response;
      this.adminForm = this.fb.group({
        _id: [response._id, Validators.required],
        name: [response.name, Validators.required],
        imgUrl: [response.imgUrl, Validators.required],
        instagramId: [response.instagramId, Validators.required]
      });
    });
  }

  update() {
    if (this.adminForm.valid) {
      const member: Member = this.adminForm.value;
      this.bnkService.update(member).subscribe((response) => {
        this.router.navigate(["/admin"]);
      });
    } 
  }

  reset() {
    this.adminForm.reset(this.member);
  }

}
