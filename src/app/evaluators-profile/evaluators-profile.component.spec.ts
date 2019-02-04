import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorsProfileComponent } from './evaluators-profile.component';

describe('EvaluatorsProfileComponent', () => {
  let component: EvaluatorsProfileComponent;
  let fixture: ComponentFixture<EvaluatorsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
