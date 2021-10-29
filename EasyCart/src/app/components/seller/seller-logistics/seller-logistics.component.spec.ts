import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLogisticsComponent } from './seller-logistics.component';

describe('SellerLogisticsComponent', () => {
  let component: SellerLogisticsComponent;
  let fixture: ComponentFixture<SellerLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
