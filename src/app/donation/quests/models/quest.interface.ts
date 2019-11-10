export interface Quest {
  id?: number;
  orphanageID?: number;
  charityMakerID?: number;
  orphanageName: string;
  lastDateWhenStatusChanged: string;
  status: string;
  city: string;
  itemName: string;
  itemID: number;
  types: string[];
}
