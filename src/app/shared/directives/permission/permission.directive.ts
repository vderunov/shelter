import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PermissionService } from '../../services/permission/permission.service';
import { AuthStateService } from '../../services/state/auth-state.service';
import { ROLES } from '../../models/permission/roles.enum';

@Directive({
  selector: '[appPermission]'
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
      const access = this.permissionService.getPermissionByRole(role, permission);
      if (access) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
}
