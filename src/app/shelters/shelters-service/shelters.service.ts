import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shelter } from '../models/shelter.interface';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap, map } from 'rxjs/operators';
import { ApiShelter } from '../models/api-shelter.interface';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  getShelters(): Observable<Shelter[]> {
    return this.configService.configLoaded.pipe(
      concatMap(config => this.http.get<ApiShelter[]>(config.sheltersApi)),
      map((arr: ApiShelter[]): Shelter[] =>
        arr.map(
          (el: ApiShelter): Shelter => ({
            avatar: el.Avatar,
            rating: el.Rating,
            adressID: el.adressID,
            id: el.id,
            locationID: el.locationID,
            name: el.name,
            photoPath: el.photoPath
          })
        )
      )
    );
  }
}
