import { Component } from '@angular/core';
import { ConfigService } from './shared/services/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shelter';

  constructor(private configService: ConfigService){
    this.configService.initConfig();
  }
}
