import { Injectable } from '@angular/core';
import { Bid } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  private bids: Bid[] = [];
  private highestId: number = 0;

  getBids(): Bid[] {
    return this.bids;
  }
  addBids(bid: Bid) : void {
    this.highestId++;
    bid.id = this.highestId;
    this.bids.push(bid);
  }
  deleteBid(id: Number) : void {
    this.bids = this.bids.filter((bid) => bid.id !== id )
  }
}
