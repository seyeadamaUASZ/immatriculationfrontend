import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTraitantDeuxComponent } from './stat-traitant-deux.component';

describe('StatTraitantDeuxComponent', () => {
  let component: StatTraitantDeuxComponent;
  let fixture: ComponentFixture<StatTraitantDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatTraitantDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTraitantDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
