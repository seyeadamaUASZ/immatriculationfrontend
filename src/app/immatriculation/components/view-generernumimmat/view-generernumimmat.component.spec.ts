import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGenerernumimmatComponent } from './view-generernumimmat.component';

describe('ViewGenerernumimmatComponent', () => {
  let component: ViewGenerernumimmatComponent;
  let fixture: ComponentFixture<ViewGenerernumimmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGenerernumimmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGenerernumimmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
