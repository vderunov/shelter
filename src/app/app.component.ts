import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfigService} from './shared/services/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.initConfig();
  }
}
