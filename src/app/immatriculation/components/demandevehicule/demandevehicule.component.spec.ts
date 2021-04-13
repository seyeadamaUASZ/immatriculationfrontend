import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandevehiculeComponent } from './demandevehicule.component';

describe('DemandevehiculeComponent', () => {
  let component: DemandevehiculeComponent;
  let fixture: ComponentFixture<DemandevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
