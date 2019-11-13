export interface VolunteerRegistrationModel {
  id?: number;
  name: string;
  surname: string;
  patronymic: string;
  birthday?: string;
  rating: number;
  avatar?: string;
  emailID?: number;
  address?: string;
  photoPath?: string;
  addressID?: number;
}
