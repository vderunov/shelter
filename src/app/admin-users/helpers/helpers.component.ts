import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelpersService } from '../helper.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss']
})
export class HelpersComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  public user;
  public helperId;
  public visibleFields = false;
  public userForm = new FormGroup({
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    roles: new FormControl(''),
  });

  constructor(private helperService: HelpersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.helperId = this.route.snapshot.params.id;
    this.helperService
      .getUserById(this.helperId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.user = res;
        return this.user;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public changeInfo() {
    this.visibleFields = !this.visibleFields;
  }

  public editInfo() {
    this.helperService
      .updateUser(this.userForm.value, this.helperId)
      .subscribe();
  }

  public deleteUser() {
    this.helperService
      .deleteUser(this.helperId)
      .subscribe();
  }
}
