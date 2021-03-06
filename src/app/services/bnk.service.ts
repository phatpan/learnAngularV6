import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { Feed } from '../models/feed';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list():Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }

  instagram(id: string): Observable<Feed>{
    return this.http.get<Feed>(`${environment.instagram_url}${id}`);
  }

  admin(id: string):Observable<Member> {
    return this.http.get<Member>(`${environment.api_url}/bnk/members/${id}`);
  }

  update(data: Member):Observable<Member> {
    return this.http.patch<Member>(`${environment.api_url}/bnk/members/${data._id}`, data);
  }
}
