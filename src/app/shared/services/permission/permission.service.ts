import { Injectable } from '@angular/core';
import { Roles } from '../../models/permission/roles.enum';
import { Permissions } from '../../models/permission/permissions.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private permissionsByRole: Map<Roles, Permissions[]> = new Map();

  constructor() {
    this.createPermissionsByRole();
  }

  public getPermissionByRole(role: Roles, permission: Permissions): boolean {
    return this.permissionsByRole.get(role).includes(Number(Permissions[permission]));
  }

  private createPermissionsByRole(): void {
    this.permissionsByRole.set(Roles.Admin, [
      Permissions.shelterEdit,
      Permissions.shelterReset,
      Permissions.shelterSave,
      Permissions.shelterDelete,
      Permissions.shelterUploadPhoto
    ]);
    this.permissionsByRole.set(Roles.Guest, [
      Permissions.shelterReset
    ]);
  }
}
