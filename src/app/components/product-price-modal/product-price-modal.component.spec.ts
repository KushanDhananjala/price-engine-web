import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductPriceModalComponent} from './product-price-modal.component';

describe('ProductPriceModalComponent', () => {
  let component: ProductPriceModalComponent;
  let fixture: ComponentFixture<ProductPriceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPriceModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
