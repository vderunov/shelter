import { Injectable } from '@angular/core';
import { ROLES } from '../../models/permission/roles.enum';
import { PERMISSIONS } from '../../models/permission/permissions.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private permissionsByRole: Map<ROLES, PERMISSIONS[]> = new Map();

  constructor() {
    this.createPermissionsByRole();
  }

  public getPermissionByRole(role, permission: PERMISSIONS): boolean {
// it need until the server can't return the role ****************//
    let currentRole;
    if (role) {
      currentRole = ROLES.Admin;
    } else {
      currentRole = ROLES[role];
    }
// ********************************************************* //
    return this.permissionsByRole.get(currentRole).includes(Number(PERMISSIONS[permission]));
  }

  private createPermissionsByRole(): void {
    this.permissionsByRole.set(ROLES.Admin, [
      PERMISSIONS.shelterEdit,
      PERMISSIONS.shelterReset,
      PERMISSIONS.shelterSave
    ]);
    this.permissionsByRole.set(ROLES.null, [
      PERMISSIONS.shelterReset
    ]);
  }
}
