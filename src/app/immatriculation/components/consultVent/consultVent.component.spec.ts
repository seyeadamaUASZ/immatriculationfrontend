import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultVentComponent } from './consultVent.component';

describe('ConsultComponent', () => {
  let component: ConsultVentComponent;
  let fixture: ComponentFixture<ConsultVentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultVentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultVentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
