export interface Need {
  id?: number;
  orphanageID?: number;
  orphanageName: string;
  lastDateWhenStatusChanged: string;
  status: string;
  city: string;
  itemName: string;
  itemDescription?: string;
  types?: string[];
  donationItemID: number;
}
