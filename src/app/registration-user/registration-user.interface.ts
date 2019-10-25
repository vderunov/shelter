import { User } from './../login/login.interface';

export interface NewUser extends User {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  id?: number
}
