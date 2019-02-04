import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingOfExternalEvaluationOfSchoolsComponent } from './scheduling-of-external-evaluation-of-schools.component';

describe('SchedulingOfExternalEvaluationOfSchoolsComponent', () => {
  let component: SchedulingOfExternalEvaluationOfSchoolsComponent;
  let fixture: ComponentFixture<SchedulingOfExternalEvaluationOfSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingOfExternalEvaluationOfSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingOfExternalEvaluationOfSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
