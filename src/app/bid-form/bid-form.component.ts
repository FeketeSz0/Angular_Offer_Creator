import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bid } from '../model/model';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})


export class BidFormComponent {
  @Output() submitBid = new EventEmitter<Bid>();
  bidForm : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.bidForm = this.formBuilder.group({
      productName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      cost: ['', Validators.required],
      unitPrice: ['', [Validators.required, Validators.min(0)]]
    });
  }
  onSubmit() : void {
    if(this.bidForm.valid) {
      const bid: Bid = {
          ...this.bidForm.value,
          totalPrice: this.bidForm.value.quantity * this.bidForm.value.unitPrice
      };
      this.submitBid.emit(bid);
      this.bidForm.reset();
    }
  }
}
