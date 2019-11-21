export interface ActiveLot {
  id: number;
  dateAdded: string;
  auctionLotItemID: number;
  orphanID?: number;
  avatar?: string | ArrayBuffer;
  photoParth?: string;
  quantity: number;
  status: string;
  auctionLotInfo?: any;
  shelterInfo?: any;
}
