import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shelter } from '../models/shelter.model';
import { Observable, of, merge } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  getShelters(): Observable<Shelter[]> {
    return this.configService.configLoaded
    .pipe(concatMap(config => this.http.get<Shelter[]>(config.sheltersApi)));
  }
}
