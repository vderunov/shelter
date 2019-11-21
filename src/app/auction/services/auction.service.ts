import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Observable, zip, from } from 'rxjs';
import { ActiveLot } from '../models/active-lot.model';
import { concatMap, map } from 'rxjs/operators';
import { Shelter } from 'src/app/shelters/models/shelter.interface';
import { AuctionList } from '../models/auction-list.model';
import { Child } from '../models/child.model';
import { Item } from '../models/item.model';
import { Manager } from 'src/app/admin-users/models/manager.model';
import { Person } from 'src/app/shared/models/person.model';
import { AdminUserService } from 'src/app/admin-users/services/admin-user.service';

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
    private configService: ConfigService,
    private adminUserService: AdminUserService) { }

  public getActiveLots(): Observable<ActiveLot[]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get(config.activeLotsApiApproved),
          this.http.get<Person[]>(config.childrenApi),
          this.http.get<Shelter[]>(config.sheltersApi),
          this.http.get(config.donationItemsApi)
        )
      ),
      map(([listOfLots, children, shelters, dontationItems]: [ActiveLot[], Person[], Shelter[], Item[]]) => {
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

  public getChildrenByManager(managerID: number): Observable<Child[]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get<Child[]>(config.childrenApi),
          this.adminUserService.getManagerById(String(managerID))
        )
      ),
      map(([children, manager]: [Child[], Manager]) => {
        const childrenHouse = manager.childrenHouseID;
        const childrenArr = children.reduce((acc, curr) => {
          if (curr.childrenHouseID === childrenHouse) {
            acc.push(curr);
          }
          return acc;
        }, []);
        return childrenArr;
      })
    );
  }

  public createNewLot(formValue, lotPhoto): Observable<ActiveLot> {
    const dateAdded = new Date();
    const data = {
      dateAdded: `${dateAdded.getFullYear()}-${dateAdded.getMonth() + 1}-${dateAdded.getDate()}T00:00:00`,
      auctionLotItemID: formValue.item,
      orphanID: formValue.child,
      avatar: null,
      quantity: 1,
      status: 'Approved'
    };
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.post<ActiveLot>(config.activeLotsApi, data, this.httpOptions).pipe(
          concatMap((newLot: ActiveLot) => this.setLotPhoto(lotPhoto, newLot))
        );
      })
    );
  }

  public setLotPhoto(lotPhoto: string | ArrayBuffer = null, newLot: ActiveLot): Observable<ActiveLot> {
    newLot.avatar = lotPhoto;
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.put<ActiveLot>(`${config.activeLotsImageApi}${newLot.id}`, this.createFormData(newLot));
      })
    );
  }

  private createFormData(params): FormData {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]: [string, Blob]) =>
      value instanceof File ? formData.append(key, value, value.name) : formData.append(key, value));
    return formData;
  }

  public deleteLotById(id: number): void {
    this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.deleteLotHttpRequest(config.activeLotsApi, id);
      })
    );
  }

  private deleteLotHttpRequest(api: string, id: number) {
    return this.http.delete<ActiveLot>(`${api}${id}`);
  }
}
