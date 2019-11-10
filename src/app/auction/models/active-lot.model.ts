export interface ActiveLot {
  id: number;
  dateStart: string;
  auctionLotItemID: number;
  orphanID?: number;
  avatar?: string;
  photoParth?: string;
  quantity: number;
  status: string;
}