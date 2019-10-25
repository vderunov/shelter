import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Need } from '../models/need.interface';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private needsUrl = '/assets/needs.data.json';
  // private needsUrl = 'https://familynetserver.azurewebsites.net/api/v1/donations'

  constructor(private http: HttpClient) { }

  getNeeds(): Observable<Need[]> {
    return this.http.get<Need[]>(this.needsUrl);
  }
}
