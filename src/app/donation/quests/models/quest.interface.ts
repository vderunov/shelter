export interface Quest {
  id: number;
  orphanageID?: number;
  lastDateWhenStatusChanged: string;
  status: string;
  charityMakerID?: number;
  orphanageName: string;
  city?: string;
  street?: string;
  house?: string;
  itemName: string;
  itemDescription?: string;
  itemID: number;
  types: string[];
}
