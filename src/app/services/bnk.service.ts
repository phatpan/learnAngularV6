import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list():Observable<Member[]> {
    return this.http.get<Member[]>("http://localhost:3000/bnk/members");
  }
}
