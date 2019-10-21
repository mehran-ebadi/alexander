import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { IHobby } from '../shared/hobby';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  // TODO:
  private servicetUrl = 'http://localhost:3000/api/hobbies';

  constructor(private http: HttpClient) { }

  getHobbies(userIdFilter: string): Observable<IHobby[]> {
    if (userIdFilter) {
      const params = new HttpParams().set('userId', userIdFilter);
      return this.http.get<IHobby[]>(this.servicetUrl, { params });
    }
    return this.http.get<IHobby[]>(this.servicetUrl);
  }
}
