import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDeleteComponent } from './invoice-delete.component';

describe('InvoiceDeleteComponent', () => {
  let component: InvoiceDeleteComponent;
  let fixture: ComponentFixture<InvoiceDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
