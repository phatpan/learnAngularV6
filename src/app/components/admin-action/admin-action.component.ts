import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';
import { UrlValidator } from 'src/app/validators/url.validator';

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
      console.log(response);
      this.adminForm = this.fb.group({
        _id: [response._id, Validators.required],
        name: [response.name, Validators.required],
        imgUrl: [response.imgUrl, [Validators.required, UrlValidator.validate]],
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
