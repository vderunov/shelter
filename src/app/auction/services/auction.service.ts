import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Observable, zip, of } from 'rxjs';
import { ActiveLot } from '../models/active-lot.model';
import { concatMap, map } from 'rxjs/operators';
import { Shelter } from 'src/app/shelters/models/shelter.interface';
import { Children } from 'src/app/shared/models/children.interface';

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
          this.http.get<ActiveLot[]>(config.activeLotsApi),
          this.http.get<Children[]>(config.childrenApi),
          this.http.get<Shelter[]>(config.sheltersApi),
          this.http.get(config.donationItemsApi)
          )
        ),
        map(([listOfLots, children, shelters, dontationItems]: [ActiveLot[], Children[], Shelter[], any]) => {
          const childrenObj = children.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          const shetlerObj = shelters.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          const dontationItemsObj = dontationItems.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});

          return listOfLots.map((lot: ActiveLot) => {
            console.log(dontationItemsObj[lot.auctionLotItemID], shetlerObj[childrenObj[lot.orphanID].childrenHouseID]);
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
