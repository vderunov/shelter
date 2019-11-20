import { Location } from '../shelters/models/location.interface';

export interface MapMarker {
  title: string;
  id?: number;
  location?: Location;
}
