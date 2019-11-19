export interface ActiveLot {
  id: number;
  dateAdded: string;
  auctionLotItemID: number;
  orphanID?: number;
  avatar?: string;
  photoParth?: string;
  quantity: number;
  status: string;
  auctionLotInfo?: any;
  shelterInfo?: any;
}
