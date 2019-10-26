export interface Shelter {
  avatar: object;
  rating: number;
  adressID: number;
  id: number;
  locationID: number;
  name: string;
  photoPath: string;
}

export interface AddressShelter {
  country: string;
  region: string;
  city: string;
  street: string;
  house: number;
}
