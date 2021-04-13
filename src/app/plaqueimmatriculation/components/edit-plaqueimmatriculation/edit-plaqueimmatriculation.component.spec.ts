import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaqueimmatriculationComponent } from './edit-plaqueimmatriculation.component';

describe('EditPlaqueimmatriculationComponent', () => {
  let component: EditPlaqueimmatriculationComponent;
  let fixture: ComponentFixture<EditPlaqueimmatriculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlaqueimmatriculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaqueimmatriculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
