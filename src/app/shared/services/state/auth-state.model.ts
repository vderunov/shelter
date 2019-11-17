import { Roles } from '../../permissions/models/roles.enum';

export interface AuthStateModel {
  token: string;
  email?: string;
  roles?: Roles[];
  personId?: string;
  id?: string;
}
