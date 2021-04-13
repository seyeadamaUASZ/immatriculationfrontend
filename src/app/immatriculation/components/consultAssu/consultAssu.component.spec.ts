import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultAssuComponent } from './consultAssu.component';

describe('ConsultComponent', () => {
  let component: ConsultAssuComponent;
  let fixture: ComponentFixture<ConsultAssuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultAssuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultAssuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
