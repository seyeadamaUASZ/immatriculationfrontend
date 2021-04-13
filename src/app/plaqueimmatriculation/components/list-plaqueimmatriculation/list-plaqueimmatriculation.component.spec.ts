import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaqueimmatriculationComponent } from './list-plaqueimmatriculation.component';

describe('ListPlaqueimmatriculationComponent', () => {
  let component: ListPlaqueimmatriculationComponent;
  let fixture: ComponentFixture<ListPlaqueimmatriculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlaqueimmatriculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlaqueimmatriculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
