import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidItemComponent } from './bid-item.component';

describe('BidItemComponent', () => {
  let component: BidItemComponent;
  let fixture: ComponentFixture<BidItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
