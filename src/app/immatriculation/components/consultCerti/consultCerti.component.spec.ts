import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ConsultCertiComponent } from './consultCerti.component';

describe('ConsultComponent', () => {
  let component: ConsultCertiComponent;
  let fixture: ComponentFixture<ConsultCertiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultCertiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
