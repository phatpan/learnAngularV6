import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
import { Feed } from 'src/app/models/feed';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list():Observable<Member[]> {
    return this.http.get<Member[]>("http://localhost:3000/bnk/members");
  }

  instagram(id: string): Observable<Feed>{
    return this.http.get<Feed>(`${environment.instagram_url}${id}`);
  }
}
