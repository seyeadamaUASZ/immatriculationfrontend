import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenerernumimmatComponent } from './add-generernumimmat.component';

describe('AddGenerernumimmatComponent', () => {
  let component: AddGenerernumimmatComponent;
  let fixture: ComponentFixture<AddGenerernumimmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGenerernumimmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGenerernumimmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
