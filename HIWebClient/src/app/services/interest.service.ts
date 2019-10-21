import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { IInterest } from '../shared/interest';


@Injectable({
  providedIn: 'root'
})
export class InterestService {

    // TODO:
    private servicetUrl = 'http://localhost:3000/api/interests';

    constructor(private http: HttpClient) { }
  
    getHobbies(userIdFilter: string): Observable<IInterest[]> {
      if (userIdFilter) {
        const params = new HttpParams().set('userId', userIdFilter);
        return this.http.get<IInterest[]>(this.servicetUrl, { params });
      }
      return this.http.get<IInterest[]>(this.servicetUrl);
    }  
}
