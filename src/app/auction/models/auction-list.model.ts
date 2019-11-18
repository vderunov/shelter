import { ActiveLot } from './active-lot.model';

export interface AuctionList {
  auctionLotDTOs: ActiveLot[];
  auctionCounterDTOs: number;
}
