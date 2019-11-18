import { Injectable } from '@angular/core';
import { Roles } from '../models/roles.enum';
import { Permissions } from '../models/permissions.enum';
import { AuthStateService } from '../../services/state/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private permissionsByRole: Map<Roles, Permissions[]> = new Map();

  constructor(private authStateService: AuthStateService) {
    this.createPermissionsByRole();
  }

  public getPermissionByRole(permission: number): boolean {
    const role = this.getRole();
    return this.permissionsByRole.get(role).includes(permission);
  }

  private getRole(): Roles {
    const role = this.authStateService.getStateProperty('roles');
    const currentRole = role ? role[0] : Roles.Guest;
    return currentRole as Roles;
  }

  private createPermissionsByRole(): void {
    this.permissionsByRole.set(Roles.Admin, [
      Permissions.shelterEdit,
      Permissions.shelterReset,
      Permissions.shelterSave,
      Permissions.shelterDelete,
      Permissions.shelterUploadPhoto,
      Permissions.showUserList,
      Permissions.auctionShowPurchase
    ]);
    this.permissionsByRole.set(Roles.Guest, [
      Permissions.shelterReset
    ]);
    this.permissionsByRole.set(Roles.Volunteer, [
      Permissions.shelterUploadPhoto
    ]);
  }
}
