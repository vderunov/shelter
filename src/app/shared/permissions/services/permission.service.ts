import { Injectable } from '@angular/core';
import { Roles } from '../models/roles.enum';
import { Permissions } from '../models/permissions.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private permissionsByRole: Map<Roles, Permissions[]> = new Map();

  constructor() {
    this.createPermissionsByRole();
  }

  public getPermissionByRole(role: Roles, permission: number): boolean {
    return this.permissionsByRole.get(role).includes(permission);
  }

  private createPermissionsByRole(): void {
    this.permissionsByRole.set(Roles.Admin, [
      Permissions.shelterEdit,
      Permissions.shelterReset,
      Permissions.shelterSave,
      Permissions.shelterDelete,
      Permissions.shelterUploadPhoto,
      Permissions.showUserList
    ]);
    this.permissionsByRole.set(Roles.Guest, [
      Permissions.shelterReset
    ]);
  }
}
