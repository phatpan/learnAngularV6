import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Member } from '../models/member';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }
  getMembers() {
    return this.http.get("http://localhost:3000/bnk/members");
  }
}
