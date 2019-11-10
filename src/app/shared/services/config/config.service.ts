import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Config } from './config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'assets/config.json';
  private configLoaded$ = new ReplaySubject<Config>(1);

  constructor(private http: HttpClient) {}

  public initConfig(): void {
    this.http
      .get<Config>(this.configUrl)
      .pipe(take(1))
      .subscribe(config => this.configLoaded$.next(config));
  }

  public getConfig(): Observable<Config> {
    return this.configLoaded$.pipe(take(1));
  }
}
