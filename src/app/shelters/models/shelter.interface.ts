import { Location } from './location.interface';
import { AddressShelter } from './address-shelter.interface';

export interface Shelter {
  id?: number;
  name: string;
  rating: number;
  avatar?: any;
  photoPath?: string;
  locationID?: number;
  adressID?: number;
  location?: Location;
  address?: AddressShelter;
  children?: number;
  representative?: any;
}
