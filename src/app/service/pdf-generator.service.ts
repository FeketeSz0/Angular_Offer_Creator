import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
   }
   generatePdf(bids: any[]): void {
    const documentDefinition: any = {
      content: [
        { text: 'Bid List', style: 'header' },
        ...bids.map((bid, index) => ({
          text: `${index + 1}. Product: ${bid.productName}, Quantity: ${bid.quantity}, Unit Price: ${bid.unitPrice}, Total Price: ${bid.totalPrice}`,
          margin: [0, 0, 0, 5]
        }))
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        }
      }
    };

    pdfMake.createPdf(documentDefinition).download('bid-list.pdf');
  }
}
