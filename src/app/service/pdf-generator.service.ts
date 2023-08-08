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
    const grandTotal = bids.reduce((total, bid) => total + (bid.unitPrice * 1.27) * bid.quantity, 0);
    const tableBody = bids.map((bid, index) => [
      `${index + 1}`,
      bid.productName,
      bid.quantity + ' pcs',
      bid.unitPrice + ' HUF',
      (bid.unitPrice * 1.27).toFixed(2) + ' HUF',
      bid.totalPrice + ' HUF'
    ]);

    const documentDefinition: any = {
      content: [
        { text: 'Dear Client!', style: 'header' },
        '\n',
        { text: 'Thank you for your interest in our service.....:', style: 'subheader' },
        '\n\n',
        { 
          table: {
            widths: ['*', '*', '*', '*', '*', '*'],
            body: [
              ['No.', 'Product', 'Qty', 'Unit Price', 'Grs. Unit Price', 'Grs. Total Price'],
              ...tableBody
            ],
           
          },
          alignment: 'center',
          margin: [0,0,0,50] 
        },
        {text: `Grand total is: ${grandTotal} HUF`},
      ],
      styles: {
        header: {
          fontSize: 12,
          bold: true
        }
      }
    };
    

    pdfMake.createPdf(documentDefinition).download('offer.pdf');
  }
}
