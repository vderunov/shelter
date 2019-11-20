import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Observable, zip } from 'rxjs';
import { ActiveLot } from '../models/active-lot.model';
import { concatMap, map } from 'rxjs/operators';
import { Shelter } from 'src/app/shelters/models/shelter.interface';
import { AuctionList } from '../models/auction-list.model';
import { Child } from '../models/child.model';
import { Item } from '../models/item.model';
import { Manager } from 'src/app/admin-users/models/manager.model';
import { Person } from 'src/app/shared/models/person.model';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  public getActiveLots(): Observable<ActiveLot[]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get(config.activeLotsApiApproved),
          this.http.get<Child[]>(config.childrenApi),
          this.http.get<Shelter[]>(config.sheltersApi),
          this.http.get(config.donationItemsApi)
        )
      ),
      map(([listOfLots, children, shelters, dontationItems]: [ActiveLot[], Child[], Shelter[], Item[]]) => {
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
    return this.http.get<Manager>(`${api}${managerID}`);
  }

  public getChildrenByManager(managerID: number): Observable<Child[]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get<Child[]>(config.childrenApi),
          this.getManagerById(config.representativesApi, managerID)
        )
      ),
      map(([children, manager]: [Child[], Manager]) => {
        const childrenObj = children.reduce((acc, curr) => {
          const currChilrenHouseId = curr.childrenHouseID;
          if (Object.keys(acc).indexOf(String(currChilrenHouseId)) > -1) {
            acc[currChilrenHouseId].push(curr);
            return acc;
          }
          return ({ [curr.childrenHouseID]: [curr], ...acc });
        }, {});
        return childrenObj[manager.childrenHouseID];
      })
    );
  }

  public createNewLot(formValue: any): Observable<ActiveLot> {
    const data = {
      dateStart: '0001-01-01T00:00:00',
      auctionLotItemID: formValue.items,
      orphanID: formValue.children,
      avatar: null,
      quantity: 1,
      status: 'UnApproved'
    };
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.post<ActiveLot>(config.activeLotsApi, data, this.httpOptions);
      })
    );
  }

  public setLotPhoto(lotPhoto: string | ArrayBuffer = 'null', newLot: ActiveLot): Observable<ActiveLot> {
    newLot.avatar = lotPhoto;
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.put<ActiveLot>(`${config.activeLotsApi}${newLot.id}`, this.createFormData<ActiveLot>(newLot));
      })
    );
  }

  private createFormData<T>(info: T): FormData {
    const formData = new FormData();
    Object.entries(info).forEach(([key, value]: [string, Blob]) =>
      value instanceof File ?
        formData.append(key, value, value.name) :
        formData.append(key, value));
    return formData;
  }

  public deleteLoById(id: number): Observable<any> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.deleteLotHttpRequest(config.activeLotsApi, id);
      })
    );
  }

  private deleteLotHttpRequest(api: string, id: number): Observable<any> {
    return this.http.delete<ActiveLot>(`${api}${id}`);
  }
}
