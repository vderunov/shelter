export interface Need {
  id: number;
  orphanageID?: number;
  lastDateWhenStatusChanged: string;
  status: string;
  orphanageName: string;
  city?: string;
  street?: string;
  house?: string;
  itemName: string;
  itemDescription?: string;
  types?: string[];
  donationItemID: number;
}
