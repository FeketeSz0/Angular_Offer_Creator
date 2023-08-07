import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BidListComponent } from './bid-list/bid-list.component';
import { BidFormComponent } from './bid-form/bid-form.component';
import { BidItemComponent } from './bid-item/bid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BidListComponent,
    BidFormComponent,
    BidItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
