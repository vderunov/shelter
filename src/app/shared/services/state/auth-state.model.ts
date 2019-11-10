export interface AuthStateModel {
  token: string;
  email?: string;
  roles?: string[];
  personId?: string;
  id?: string;
}
