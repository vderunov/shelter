import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  styleUrls: ['./admin-users.component.scss']
})

export class AdminUsersComponent implements OnInit {
  private location: Location;

  constructor ( location: Location ) {
    this.location = location;
  }

  ngOnInit(): void {
    this.location.replaceState('users/helpers');
    console.log(1);
  }
}
