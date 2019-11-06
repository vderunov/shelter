import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shelter } from '../models/shelter.interface';
import { Observable, of, zip } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap, map, take, catchError } from 'rxjs/operators';
import { AddressShelter } from '../models/address-shelter.interface';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Location } from '../models/location.interface';
import { Children } from 'src/app/shared/models/children.interface';
import { Representative } from 'src/app/shared/models/representative.interface';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  public getShelters(paramObj: object = {}): Observable<Shelter[]> {
    const params = new HttpParams();
    Object.entries(paramObj).forEach(([key, value]: string[]) => params.append(key, value));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get<Shelter[]>(config.sheltersApi, { params }),
          this.http.get(config.childrenApi),
          this.http.get(config.representativesApi),
          this.http.get<AddressShelter[]>(config.addressApi),
          )
        ),
        map(([shelters, children, representatives, address]: [Shelter[], Children[], Representative[], AddressShelter[]]) => {
          const countChildren = children.reduce((acc, curr) => {
            acc[curr.childrenHouseID] = acc[curr.childrenHouseID] ? ++acc[curr.childrenHouseID] : 1;
            return acc;
          }, {});
          const representativesObj = representatives.reduce((acc, curr) => ({ [curr.childrenHouseID]: curr, ...acc }), {});
          const addressObj = address.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          return shelters.map((shelter: Shelter) => ({
            ...shelter,
            children: countChildren[shelter.id],
            representative: representativesObj[shelter.id],
            address: addressObj[shelter.adressID],
          }));
        })
      );
  }

  public getDetails(id: string = ''): Observable<Shelter> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.getShelter(config.sheltersApi, id).pipe(
          concatMap((shelter: Shelter): Observable<[Shelter, AddressShelter, Location]> =>
            zip(
              of(shelter),
              this.getAddress(config.addressApi, shelter.adressID),
              this.getLocation(config.locationApi, shelter.locationID)
            )
          ),
          map(([shelter, address, location]): Shelter => ({
            ...shelter,
            address,
            location,
          }))
        )
      )
    );
  }

  private getShelter(api, id): Observable<Shelter> {
    return this.http.get<Shelter>(`${api}/${id}`);
  }

  private getAddress(api, params): Observable<AddressShelter> {
    return params ? this.http.get(`${api}/${params}`) : of(null);
  }

  private getLocation(api, params): Observable<Location> {
    return params ? this.http.get(`${api}/${params}`) : of(null);
  }

  public putShelterDetails(changeData): Observable<[Shelter, AddressShelter]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        const location$ = changeData.shelter.locationID ?
          // will change value null to changeData.address to location when its work is stable
          this.putLocation(config.locationApi, null, changeData.shelter.locationID) :
          this.postLocation(config.locationApi, null);
        return location$.pipe(take(1),
          concatMap((location: Location ): Observable<[Shelter, AddressShelter]> => {
            if (location) {
              changeData.shelter.locationID = location.id;
            } else {
              changeData.shelter.locationID = null;
            }
            return zip(
              this.putShelter(config.sheltersApi, changeData.shelter, changeData.id),
              this.putAddress(config.addressApi, changeData.address, changeData.addressID)
            );
          })
        );
      })
    );
  }

  private putShelter(api, shelter, shelterId): Observable<Shelter> {
    return shelter ? this.http.put<Shelter>(`${api}/${shelterId}`, this.createFormData(shelter)) : of(null);
  }

  private postLocation(api, address): Observable<Location> {
    return address ? this.http.post<Location>(api, this.createFormData(address)) : of(null);
  }

  private putLocation(api, address, locationID): Observable<Location> {
    return address ? this.http.put<Location>(`${api}/${locationID}`, this.createFormData(address)) : of(null);
  }

  private postAddress(api, address): Observable<AddressShelter> {
    return address ? this.http.post<AddressShelter>(api, this.createFormData(address)) : of(null);
  }

  private putAddress(api, address, addressID): Observable<AddressShelter> {
    return address ? this.http.put<AddressShelter>(`${api}/${addressID}`, this.createFormData(address)) : of(null);
  }

  private createFormData(params) {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]: [string, Blob]) => formData.append(key, value));
    return formData;
  }

  public registerShelter(form): Observable<Shelter> {
    const addressDate: AddressShelter = {
      country: form.country,
      region: form.region,
      city: form.city,
      street: form.street,
      house: form.house
    };

    const shelterDate: Shelter = {
      name: form.name,
      rating: form.rating,
      adressID: null,
      avatar: null,
      locationID: null
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.registerAddressShelter(config.addressApi, addressDate).pipe(
          concatMap(address => {
            shelterDate.adressID = address.id;
            return this.registrationShelter(config.sheltersApi, shelterDate);
          })
        );
      })
    );
  }

  private registerAddressShelter(api, addressDate): Observable<AddressShelter> {
    return this.http.post<AddressShelter>(api, addressDate);
  }

  private registrationShelter(api, shelterDate): Observable<Shelter> {
    return this.http.post<Shelter>(api, shelterDate);
  }
}
