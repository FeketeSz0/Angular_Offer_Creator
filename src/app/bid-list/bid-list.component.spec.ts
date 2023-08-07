import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidListComponent } from './bid-list.component';

describe('BidListComponent', () => {
  let component: BidListComponent;
  let fixture: ComponentFixture<BidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
