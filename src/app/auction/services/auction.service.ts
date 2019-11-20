import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Observable, zip } from 'rxjs';
import { ActiveLot } from '../models/active-lot.model';
import { concatMap, map } from 'rxjs/operators';
import { Shelter } from 'src/app/shelters/models/shelter.interface';
import { AuctionList } from '../models/auction-list.model';
import { Person } from 'src/app/shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  public getActiveLots(): Observable<ActiveLot[]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get(config.activeLotsApi),
          this.http.get<Person[]>(config.childrenApi),
          this.http.get<Shelter[]>(config.sheltersApi),
          this.http.get(config.donationItemsApi)
          )
        ),
        map(([listOfLots, children, shelters, dontationItems]: [AuctionList, Person[], Shelter[], any]) => {
          const childrenObj = children.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          const shetlerObj = shelters.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          const dontationItemsObj = dontationItems.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          return listOfLots.auctionLotDTOs.map((lot: ActiveLot) => {
            return {
              ...lot,
              auctionLotInfo: dontationItemsObj[lot.auctionLotItemID],
              shelterInfo: shetlerObj[childrenObj[lot.orphanID].childrenHouseID]
            };
          });
        })
    );
  }
}
