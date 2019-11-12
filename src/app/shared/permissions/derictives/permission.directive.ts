import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { AuthStateService } from '../../services/state/auth-state.service';
import { Roles } from '../models/roles.enum';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective {

  constructor(
    private permissionService: PermissionService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private currentRoles: AuthStateService
    ) { }

    @Input()
    set appPermission(permission) {
      this.updateView(permission);
    }

    private updateView(permission) {
      const role = this.currentRoles.getStateValue();

// until server roles not fully implemented let`s assume that any not empty role is Admin //
      const currentRole = role ? Roles.Admin : Roles.Guest;
// ************************************************************************************** //

      const access = this.permissionService.getPermissionByRole(currentRole, permission);
      if (access) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
}
