import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDemandeComponent } from './stat-demande.component';

describe('StatDemandeComponent', () => {
  let component: StatDemandeComponent;
  let fixture: ComponentFixture<StatDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
