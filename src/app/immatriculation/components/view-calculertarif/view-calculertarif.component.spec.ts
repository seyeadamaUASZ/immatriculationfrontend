import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalculertarifComponent } from './view-calculertarif.component';

describe('ViewCalculertarifComponent', () => {
  let component: ViewCalculertarifComponent;
  let fixture: ComponentFixture<ViewCalculertarifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCalculertarifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalculertarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
