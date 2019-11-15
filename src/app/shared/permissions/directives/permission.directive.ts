import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { AuthStateService } from '../../services/state/auth-state.service';
import { Roles } from '../models/roles.enum';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {

  constructor(
    private permissionService: PermissionService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authStateService: AuthStateService
    ) { }

    @Input()
    set appPermission(permission) {
      this.updateView(permission);
    }

    private updateView(permission) {
      const role = this.authStateService.getStateProperty('roles');
      const currentRole = role ? role[0] : Roles.Guest;
      const access = this.permissionService.getPermissionByRole(currentRole, permission);
      if (access) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
}
