import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';
import { UrlValidator } from '../../validators/url.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  adminForm: FormGroup;
  member: Member;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private bnkService: BnkService,
    private router: Router) { }

  ngOnInit() {
    this.bnkService.admin(this.activatedRoute.snapshot.params.id).subscribe((response) => {
      this.member = response;
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
      this.bnkService.update(this.adminForm.value).subscribe(() => {
        this.router.navigate(["/admin"]);
      });
    }
  }

  reset() {
    this.adminForm.reset(this.member);
  }

}
