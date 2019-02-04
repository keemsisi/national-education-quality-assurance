import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorsDashboardComponent } from './evaluators-dashboard.component';

describe('EvaluatorsDashboardComponent', () => {
  let component: EvaluatorsDashboardComponent;
  let fixture: ComponentFixture<EvaluatorsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
