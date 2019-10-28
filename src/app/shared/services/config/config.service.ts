import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Config } from './config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';
  configLoaded = new ReplaySubject<Config>(1);

  constructor(private http: HttpClient) {}

  initConfig(): void {
    this.http
      .get<Config>(this.configUrl)
      .pipe(take(1))
      .subscribe(config => this.configLoaded.next(config));
  }
}
