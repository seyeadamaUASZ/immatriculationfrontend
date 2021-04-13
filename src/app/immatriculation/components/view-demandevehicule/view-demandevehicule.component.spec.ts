import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDemandevehiculeComponent } from './view-demandevehicule.component';

describe('ViewDemandevehiculeComponent', () => {
  let component: ViewDemandevehiculeComponent;
  let fixture: ComponentFixture<ViewDemandevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDemandevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDemandevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
