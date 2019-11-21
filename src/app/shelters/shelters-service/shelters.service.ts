import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shelter } from '../models/shelter.interface';
import { Observable, of, zip } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap, map, take } from 'rxjs/operators';
import { AddressShelter } from '../models/address-shelter.interface';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Location } from '../models/location.interface';
import { MapMarker } from 'src/app/map/map-marker.model';
import { Person } from 'src/app/shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  public getShelters(paramObj: object = {}): Observable<Shelter[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get<Shelter[]>(config.sheltersApi, {params}),
          this.http.get<Person[]>(config.childrenApi),
          this.http.get<Person[]>(config.representativesApi),
          this.http.get<AddressShelter[]>(config.addressApi),
          this.http.get<Location[]>(config.locationApi),
        )
      ),
      map(([shelters, children, representatives, address, location]:
        [Shelter[], Person[], Person[], AddressShelter[], Location[]]) => {
        const countChildren = {};
        children.forEach((elem) =>
          countChildren[elem.childrenHouseID] = countChildren[elem.childrenHouseID] ? ++countChildren[elem.childrenHouseID] : 1);
        const representativesObj = representatives.reduce((acc, curr) => ({[curr.childrenHouseID]: curr, ...acc}), {});
        const addressObj = address.reduce((acc, curr) => ({[curr.id]: curr, ...acc}), {});
        const locationObj = location.reduce((acc, curr) => ({[curr.id]: curr, ...acc}), {});
        return shelters.map((shelter: Shelter) => ({
          ...shelter,
          children: countChildren[shelter.id],
          representative: representativesObj[shelter.id],
          address: addressObj[shelter.adressID],
          location: locationObj[shelter.locationID]
        }));
      })
    );
  }

  public getDetails(id: string = ''): Observable<Shelter> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.getShelter(config.sheltersApi, id).pipe(
          concatMap((shelter: Shelter): Observable<[Shelter, Person[], Person[], AddressShelter, Location]> =>
            zip(
              of(shelter),
              this.http.get<Person[]>(config.childrenApi),
              this.http.get<Person[]>(config.representativesApi),
              this.getAddress(config.addressApi, shelter.adressID),
              this.getLocation(config.locationApi, shelter.locationID)
            )
          ),
          map(([shelter, children, representatives, address, location]) => {
            const countChildren = {};
            children.forEach((elem) =>
              countChildren[elem.childrenHouseID] = countChildren[elem.childrenHouseID] ? ++countChildren[elem.childrenHouseID] : 1);
            const representative = representatives.filter((represent: Person) => shelter.id === represent.childrenHouseID)[0];
            return {
              ...shelter,
              representative,
              address,
              location,
              children: countChildren[shelter.id]
            };
          })
      ))
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

  public getLocationEveryShelters(): Observable<{zoom: number,  coords: MapMarker[]}> {
    return this.getShelters().pipe(map((shelters) => this.createShelterLocation(shelters)));
  }

  public createShelterLocation(shelters, zoom?) {
    return {
      zoom: zoom ? zoom : 6,
      coords: shelters
        .filter((shelter) => shelter.locationID !== null)
        .map((shelter) => ({
          location: shelter.location,
          id: shelter.id,
          title: `
            Shelter: ${shelter.name && shelter.name.toUpperCase()}
            country: ${shelter.address && shelter.address.country}
            region: ${shelter.address && shelter.address.region}
            city: ${shelter.address && shelter.address.city}
            street: ${shelter.address && shelter.address.street}
            house: ${shelter.address && shelter.address.house}
            children: ${shelter.children}
            rating: ${shelter.rating}
            representative: ${shelter.representative && shelter.representative.name + shelter.representative.surname}
            `
        }))
      };
  }

  public putShelterDetails(changeData): Observable<[Shelter, AddressShelter]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        const location$ = changeData.shelter.locationID ?
          this.putLocation(config.locationApi, changeData.address, changeData.shelter.locationID) :
          this.postLocation(config.locationApi, changeData.address, changeData.shelter.locationID);
        return location$.pipe(take(1),
          concatMap((location: Location): Observable<[Shelter, AddressShelter]> => {
            if (location) {
              changeData.shelter.locationID = location.id;
            } else if (!changeData.shelter.locationID) {
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

  private postLocation(api, address, locationID): Observable<Location> {
    return address ? this.http.post<Location>(api, this.createFormData(address)) : of({ id: locationID });
  }

  private putLocation(api, address, locationID): Observable<Location> {
    return address ? this.http.put<Location>(`${api}/${locationID}`, this.createFormData(address)) : of({ id: locationID });
  }

  private putAddress(api, address, addressID): Observable<AddressShelter> {
    return address ? this.http.put<AddressShelter>(`${api}/${addressID}`, this.createFormData(address)) : of(null);
  }

  public deleteShelter(shelter): any {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return zip(
          this.http.delete(`${config.sheltersApi}/${shelter.id}`),
          shelter.addressID ? this.http.delete(`${config.addressApi}/${shelter.adressID}`) : of(null),
          shelter.locationID ? this.http.delete(`${config.locationApi}/${shelter.locationID}`) : of(null)
        );
      })
    );
  }

  private createFormData(params): FormData {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]: [string, Blob]) =>
      value instanceof File ? formData.append(key, value, value.name) : formData.append(key, value));
    return formData;
  }

  public registerShelter(form, file): Observable<Shelter> {
    const addressData: AddressShelter = {
      country: form.country,
      region: form.region,
      city: form.city,
      street: form.street,
      house: form.house
    };

    const shelterData: Shelter = {
      name: form.name,
      rating: form.rating,
      adressID: null,
      locationID: null
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.registerAddressShelter(config.addressApi, this.createFormData(addressData)).pipe(
          concatMap(address => {
            shelterData.adressID = address.id;
            const formData = this.createFormData(shelterData);
            formData.append('avatar', file, file.name);
            return this.registrationShelter(config.sheltersApi, formData);
          })
        );
      })
    );
  }

  private registerAddressShelter(api, addressData): Observable<AddressShelter> {
    return this.http.post<AddressShelter>(api, addressData);
  }

  private registrationShelter(api, shelterData): Observable<Shelter> {
    return this.http.post<Shelter>(api, shelterData);
  }
}
