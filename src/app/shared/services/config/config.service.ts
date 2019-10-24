import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

export interface Config {
  sheltersApi: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'assets/config.json';
  public configLoaded = new ReplaySubject<Config>(1); 
  
  constructor(private http: HttpClient) { }

  initConfig(): void {
    this.http.get<Config>(this.configUrl).pipe(take(1))
    .subscribe(config => this.configLoaded.next(config));
  }
}
