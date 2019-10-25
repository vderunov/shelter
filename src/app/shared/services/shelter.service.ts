import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Shelter } from '../../registration-shelter/registration-shelter-interface';
import { Observable } from 'rxjs';

@Injectable()
export class ShelterService {
  constructor(private http: HttpClient) {}

  registerShelter(shelter: Shelter): Observable<Shelter> {
    return this.http.post<Shelter>(
      'https://jsonplaceholder.typicode.com/posts',
      shelter
    );
  }
}
