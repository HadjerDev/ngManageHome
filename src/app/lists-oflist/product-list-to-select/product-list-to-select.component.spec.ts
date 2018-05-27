import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListToSelectComponent } from './product-list-to-select.component';

describe('ProductListToSelectComponent', () => {
  let component: ProductListToSelectComponent;
  let fixture: ComponentFixture<ProductListToSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListToSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListToSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
