import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSelfEvaluationReportFormComponent } from './school-self-evaluation-report-form.component';

describe('SchoolSelfEvaluationReportFormComponent', () => {
  let component: SchoolSelfEvaluationReportFormComponent;
  let fixture: ComponentFixture<SchoolSelfEvaluationReportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSelfEvaluationReportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSelfEvaluationReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
