import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Observable, zip, of } from 'rxjs';
import { ActiveLot } from '../models/active-lot.model';
import { concatMap, map } from 'rxjs/operators';
import { Shelter } from 'src/app/shelters/models/shelter.interface';
import { Children } from 'src/app/shared/models/children.interface';
import { AuctionList } from '../models/auction-list.model';
import { Child } from '../models/child.model';
import { Item } from '../models/item.model';
import { Manager } from 'src/app/admin-users/managers/models/manager.model';

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
          this.http.get<Children[]>(config.childrenApi),
          this.http.get<Shelter[]>(config.sheltersApi),
          this.http.get(config.donationItemsApi)
          )
        ),
        map(([listOfLots, children, shelters, dontationItems]: [ActiveLot[], Children[], Shelter[], Item[]]) => {
          const childrenObj = children.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          const shetlerObj = shelters.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          const dontationItemsObj = dontationItems.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          return listOfLots.map((lot: ActiveLot) => {
            return {
              ...lot,
              auctionLotInfo: dontationItemsObj[lot.auctionLotItemID],
              shelterInfo: shetlerObj[childrenObj[lot.orphanID].childrenHouseID]
            };
          });
        })
    );
  }

  public getItems(): Observable<Item[]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.get<Item[]>(config.donationItemsApi);
      })
    );
  }

  private getManagerById(api: string, managerID: number): Observable<Manager> {
    return this.http.get<Manager>(`${api}${managerID}`)
  }

  public getChildrenByManager(managerID: number): Observable<Children[]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get<Child[]>(config.childrenApi),
          this.getManagerById(config.representativesApi, managerID)
          )
        ),
        map(([children, manager]: [Children[], Manager]) => {
          const childrenObj = children.reduce((acc, curr) => {
            const currChilrenHouseId = curr.childrenHouseID;
            if(Object.keys(acc).indexOf(String(currChilrenHouseId)) > -1) {
              acc[currChilrenHouseId].push(curr);
              return acc;
            }
            return ({ [curr.childrenHouseID]: [curr], ...acc });
          }, {});
          return childrenObj[manager.childrenHouseID];
        })
      )
  }

  public createNewLot(formValue) {
    console.log(formValue);
  }
    
}
