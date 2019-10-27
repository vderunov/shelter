import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quest } from '../models/quest.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private questsUrl = '/assets/quests.data.json';

  constructor(private http: HttpClient) { }

  public getNeeds(): Observable<Quest[]> {
    return this.http.get<Quest[]>(this.questsUrl);
  }
}
