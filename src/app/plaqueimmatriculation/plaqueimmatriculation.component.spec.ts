import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaqueimmatriculationComponent } from './plaqueimmatriculation.component';

describe('PlaqueimmatriculationComponent', () => {
  let component: PlaqueimmatriculationComponent;
  let fixture: ComponentFixture<PlaqueimmatriculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaqueimmatriculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaqueimmatriculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
