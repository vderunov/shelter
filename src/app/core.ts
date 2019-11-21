import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Core {
  public consoler() {
    interval(3000).subscribe(_ =>  {
      console.clear();
      console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.');
      console.log('[WDS] Live Reloading enabled.');
    });
  }
}
