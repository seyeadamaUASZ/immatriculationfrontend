import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaqueimmatriculationComponent } from './view-plaqueimmatriculation.component';

describe('ViewPlaqueimmatriculationComponent', () => {
  let component: ViewPlaqueimmatriculationComponent;
  let fixture: ComponentFixture<ViewPlaqueimmatriculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlaqueimmatriculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlaqueimmatriculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
