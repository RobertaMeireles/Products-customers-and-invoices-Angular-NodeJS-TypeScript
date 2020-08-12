import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureReadComponent } from './facture-read.component';

describe('FactureReadComponent', () => {
  let component: FactureReadComponent;
  let fixture: ComponentFixture<FactureReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
