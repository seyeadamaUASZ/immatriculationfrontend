import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandevehiculeComponent } from './add-demandevehicule.component';

describe('AddDemandevehiculeComponent', () => {
  let component: AddDemandevehiculeComponent;
  let fixture: ComponentFixture<AddDemandevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDemandevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemandevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
