import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureProductsComponent } from './facture-products.component';

describe('FactureProductsComponent', () => {
  let component: FactureProductsComponent;
  let fixture: ComponentFixture<FactureProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
