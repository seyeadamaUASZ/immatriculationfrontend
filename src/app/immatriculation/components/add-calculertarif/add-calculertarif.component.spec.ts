import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalculertarifComponent } from './add-calculertarif.component';

describe('AddCalculertarifComponent', () => {
  let component: AddCalculertarifComponent;
  let fixture: ComponentFixture<AddCalculertarifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCalculertarifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalculertarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
