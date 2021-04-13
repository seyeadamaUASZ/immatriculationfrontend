import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaqueimmatriculationComponent } from './add-plaqueimmatriculation.component';

describe('AddPlaqueimmatriculationComponent', () => {
  let component: AddPlaqueimmatriculationComponent;
  let fixture: ComponentFixture<AddPlaqueimmatriculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaqueimmatriculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaqueimmatriculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
