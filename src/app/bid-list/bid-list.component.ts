import { Component, OnInit } from '@angular/core';
import { BidService } from '../service/bid.service';
import { Bid } from '../model/model';
import { PdfGeneratorService } from '../service/pdf-generator.service';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit {
  bids: Bid[] = [];
  showBidForm : Boolean = false;

  constructor(private bidService: BidService, private PdfGenerator: PdfGeneratorService) {}

  ngOnInit(): void {
    this.showBidForm  = false;
    this.getBids();
  }
  getBids() : any {
    this.bids = this.bidService.getBids();
  }
  deleteId(id: number) : void {
    this.bidService.deleteBid(id);
    this.getBids();
  }
  addBid(bid: Bid) : void {
    this.bidService.addBids(bid);
    this.getBids();
  }
  downloadPdf() : void {
    this.PdfGenerator.generatePdf(this.bids);
  }
 
}
