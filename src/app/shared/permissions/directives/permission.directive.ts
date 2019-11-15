import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PermissionService } from '../services/permission.service';

@Directive({
  selector: '[appPermission]',
  exportAs: '[appPermission]'
})
export class PermissionDirective {

  constructor(
    private permissionService: PermissionService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

    @Input()
    set appPermission(permission) {
      this.updateView(permission);
    }

    private updateView(permission) {
      const access = this.permissionService.getPermissionByRole(permission);
      if (access) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
}
