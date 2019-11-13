export interface UserRegistrationModel {
  name: string;
  patronymic: string;
  surname: string;
  phone: string;
  address?: string;
  email: string;
  password: string;
  id?: number;
}
